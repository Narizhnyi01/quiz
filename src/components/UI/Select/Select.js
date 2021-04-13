import classes from './Select.module.css'
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`

  return(
    <div className={classes.Select}>
      {/*<label htmlFor={htmlFor}>{props.label}</label>*/}
      {/*<select*/}
      {/*  id={htmlFor}*/}
      {/*  value={props.value}*/}
      {/*  onChange={props.onChange}*/}
      {/*>*/}
      {/*  {props.options.map((option, index) => {*/}
      {/*    return (*/}
      {/*      <option*/}
      {/*        value={option.value}*/}
      {/*        key={option.value + index}*/}
      {/*      >*/}
      {/*        {option.text}*/}
      {/*      </option>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</select>*/}
      <TextField
        select
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        fullWidth
      >
        {props.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}
export default Select