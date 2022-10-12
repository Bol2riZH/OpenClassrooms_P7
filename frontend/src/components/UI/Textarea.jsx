import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <textarea
      {...props}
      className={`${classes.textarea} ${
        props.isValid === false ? classes.invalid : ''
      } ${props.className} `}
    >
      {props.children}
    </textarea>
  );
};

export default Textarea;
