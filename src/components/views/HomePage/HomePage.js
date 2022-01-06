import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import User from '../User/UserContainer';

const HomePage = () => {

  return(
    <div className={`row justify-content-center align-content-start ${styles.component}`}>
      <User />
    </div>
  )
}

// HomePage.propTypes = {};

export default HomePage;
