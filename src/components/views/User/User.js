import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

import Button from '../../common/Button/Button';
import UserForm from '../../features/UserForm/UserFormContainer';

class User extends React.Component {

  state = {
    activePage: 1,
    n: 30,
  }

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  render(){
    const { activePage, n } = this.state;
    const { user, request } = this.props;

    const pagesCount = Math.ceil(user.length / n);

    const indexOfLast = activePage * n;
    const indexOfFirst = indexOfLast - n;
    const userArray = user.slice(indexOfFirst, indexOfLast);

    const pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(num => {
      return (
        <li
          key={num}
        >
          <Button
            onClick={() => this.handlePageChange(num)}
            variant={num === activePage ? `pages active` : 'pages'}
          >
            {num}
          </Button>
        </li>
      );
    });

    return (
      <div className='row justify-content-around align-content-center'>
        <div className={`col-lg-8 col-md-12 col-sm-12 ${styles.text}`}>
          <p>Welcome to simple app listing any GitHub user public repositories. Please find below a form in which you may enter a GitHub username.</p>
          <p>Repositories are sorted by repo's star number or alphabetically if the stars number is equal.</p>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <UserForm />
        </div>
        <div className={`col-lg-12 col-md-10 col-sm-12`}>
          {(request.success && user) &&
          <>
            <>
              <div className={styles.pages}>
                <h4>Displaying repositories of GitHub user: <strong>{user[0].owner}</strong></h4>
                <p>No. of repos: {user.length}</p>
                <ul>{pageNumbers.length > 1 && renderPageNumbers}</ul>
              </div>
            </>
            <ul className={styles.list}>
              {user && userArray.map((el, index) => (
                <li key={index} className={styles.listItem}>
                  <a href={el.url} className={styles.link} target={'_blank'} rel='noreferrer'>
                    <span className={styles.mask}>
                      <div className={styles.linkContainer}>
                        <span className={`${styles.linkTitle1} ${styles.title}`}>{el.name}</span>
                        <span className={`${styles.linkTitle2} ${styles.title}`}>{el.name}</span>
                      </div>
                    </span>
                  </a>
                  <span>
                    No. of stars: {el.stars}
                  </span>
                </li>
              ))}
            </ul>
          </>}
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.array,
  request: PropTypes.object,
};

export default User;
