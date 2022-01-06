import React from 'react';
import styles from './UserForm.module.scss';

import Button from '../../common/Button/Button';
import PowerModeInput from 'power-mode-input';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      search: {
        input: '',
      },
      isError: false,
    }
  }

  componentDidMount(){
    PowerModeInput.make(this.inputRef.current);
  }

  updateTextField = ({ target }) => {
    const { search } = this.state;
    const { value, name } = target;

    this.setState({ search: { ...search, [name]: value }});
  }

  submitForm = async (e) => {
    const { search } = this.state;
    const { loadItem } = this.props;

    e.preventDefault();

    if(search.input) {
      await loadItem(search.input);

      this.setState({
        search: {
          input: '',
        },
        isError: false,
      });
    } else {
      this.setState({ isError: true });
    }
  }

  render(){
    const { search } = this.state;

    return (
      <>
        <form onSubmit={this.submitForm} method='GET' className={styles.form} action={`${process.env.PUBLIC_URL}/`}>
          <label>
            <input
              ref={this.inputRef}
              className={`${styles.input}`}
              type='text'
              id='input'
              name='input'
              placeholder='GitHub username'
              value={search.input}
              onChange={this.updateTextField}
            />
          </label>
          <Button type='submit'>Search</Button>
        </form>
      </>
    );
  }
}

export default UserForm;
