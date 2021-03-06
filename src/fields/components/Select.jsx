import React from 'react';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

export default ({ type, value = '', options, label, htmlId, nullOption, onChange, ...rest }) => {
  return (
    <Select
      {...rest}
      id={htmlId}
      value={String(value)}
      onChange={onChange}
    >
      {value === null && <MenuItem value={''}>{nullOption}</MenuItem>}
      {options.map(o => <MenuItem key={o.key} value={String(o.key)}>{String(o.value)}</MenuItem>)}
    </Select>
  );
};
