

import { Card, CardActions, CardContent, Button, Typography, Avatar, Chip, Divider } from '@mui/material';

import { useSelector } from 'react-redux';

const UserCard = () => {

  const user = useSelector((state) => state.userReducer);

  console.log(user);

  return (
    <Card sx={{ width: 300, maxWidth: 345 }}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
          <Avatar alt="User Avatar" src={user.avatar} sx={{ width: 120, height: 120, textAlign: 'center' }} />
          <Typography gutterBottom variant="h5" mt={2}>
            {user.name}
          </Typography>
          <Chip label={user.email} />
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small">Logout</Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;