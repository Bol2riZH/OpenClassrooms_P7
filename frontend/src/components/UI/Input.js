import classes from './Input.module.scss';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeHolder}
        type={props.type ? props.type : 'text'}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
