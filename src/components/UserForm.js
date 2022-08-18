import { useDispatch } from "react-redux";

import { TextField, Box } from '@mui/material';

import { changeUserName, changeUserEmail, changeAvatar } from '../redux/actions/userActions';


const UserForm = () => {

  const dispatch = useDispatch();

  return (
      <Box mt={4} sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
      }}>
        <TextField label="Username" variant="outlined" onChange={(e) => dispatch(changeUserName(e.target.value))} />
        <TextField label="Email" variant="outlined" onChange={(e) => dispatch(changeUserEmail(e.target.value))} />
        <TextField label="Avatar Url" variant="outlined" onChange={(e) => dispatch(changeAvatar(e.target.value))} />
      </Box>
  );
}

export default UserForm;
