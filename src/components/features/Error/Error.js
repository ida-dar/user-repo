import React from "react";
import styles from './Error.module.scss';

const Error = ({variant = ''}) => {

  return(
    <div className={styles.error + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
      {variant === 'notFound' ?
        <p>Oh no! We couldn't find the user that you're looking for :(</p>
        :
        <p>There was an error while loading data. Please try again or reload the page.</p>
      }
    </div>
  )
}

export default Error;
