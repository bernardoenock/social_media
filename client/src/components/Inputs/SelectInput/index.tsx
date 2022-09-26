import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  error: any;
}

const SelectInput: React.FC<IProps> = ({ register, error }) => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Categoria"
            onChange={handleChange}
          >
            <MenuItem value={"Post"}>Post</MenuItem>
            <MenuItem value={"Evento"}>Evento</MenuItem>
            <MenuItem value={"Artigo"}>Artigo</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectInput;
