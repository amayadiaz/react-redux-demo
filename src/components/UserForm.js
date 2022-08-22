import { useDispatch, useSelector } from "react-redux";

import { TextField, Box } from '@mui/material';

import { changeUserName, changeUserAge } from '../redux/slices/userSlice';


const UserForm = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);

  return (
      <Box mt={4} sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
      }}>
        <TextField label="Username" variant="outlined" onChange={(e) => dispatch(changeUserName(e.target.value))} defaultValue={user.name} />
        <TextField label="Age" variant="outlined" onChange={(e) => dispatch(changeUserAge(e.target.value))} defaultValue={user.age} />
      </Box>
  );
}

export default UserForm;
