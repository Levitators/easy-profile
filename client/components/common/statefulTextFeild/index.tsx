import React, { useState, SyntheticEvent, ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

interface TextFieldProps {
  value: string;
  className: string;
  type: string;
  label: string;
}

const StatefulTextFeild: React.SFC<TextFieldProps> = (props) => {
  const [value, setValue] = useState(props.value);

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="outlined-name"
      label={props.label}
      type={props.type}
      name={props.type}
      value={value}
      onChange={valueChangeHandler}
      margin="normal"
      variant="outlined"
    />
  );
};

export default StatefulTextFeild;
