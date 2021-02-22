import React from 'react'
import { Grid, InputLabel, Select, MenuItem } from '@material-ui/core'

const CustomSelectField = ({label, value, options, onChange}) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} fullWidth onChange={onChange}>
        {options.map(([code, name]) => ({ id: code, label: name })).map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  )
}

export default CustomSelectField
