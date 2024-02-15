import { Autocomplete, TextField } from "@mui/material"

import categories from "../../categories.json"



const CategorySelect = () => (<Autocomplete
    disablePortal
    id="combo-box-demo"
    options={categories.categories}
    sx={{ width: 300 ,textTransform: "capitalize"}}
    renderInput={(params) => <TextField sx={{textTransform: "capitalize"}} {...params} label="Category" />}
  />)

export default CategorySelect