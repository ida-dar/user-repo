import { Octokit } from '@octokit/rest';

/* SELECTORS */
export const getUserRepos = ({user}) => {
  let output = user.repos;

  // sort by stars
  output.sort((a, b) => b.stars !== a.stars ? b.stars - a.stars : b.name - a.name);

  return output;
};
export const getRequest = ({user}) => user.request;

/* ACTIONS */

// action name creator
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const GET_ITEM = createActionName('GET_ITEM');

// action creators
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const getItem = payload => ({ payload, type: GET_ITEM });

/* thunk creators */
export const fetchSearchedItem = (input) => {

  return async (dispatch) => {
    dispatch(startRequest({ name: 'GET_ITEM' }));

    try {
      let dataArr = [];
      const octokit = new Octokit({});

      await octokit.paginate(
        octokit.repos.listForUser,
        {
          username: input,
        },
        (res) => {
          res.data.map(item => {
            const data = {
              owner: item.owner.login,
              name: item.name,
              url: item.html_url,
              stars: item.stargazers_count,
            }

            return dataArr.push(data);
          });

          dispatch(getItem(dataArr));
        }
      );

      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
      case GET_ITEM:
        return {
          ...statePart,
          repos: [...action.payload],
        };
      case START_REQUEST:
        return { ...statePart, request: { pending: true, error: null, success: false } };
      case END_REQUEST:
        return { ...statePart, request: { pending: false, error: null, success: true } };
      case ERROR_REQUEST:
        return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
