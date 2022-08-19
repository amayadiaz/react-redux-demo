

import { Card, CardContent, Typography, Chip, Divider } from '@mui/material';

import { useSelector } from 'react-redux';

const UserCard = () => {

  const user = useSelector((state) => state.userReducer);

  return (
    <Card sx={{ width: 300, maxWidth: 345 }}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
          <Typography gutterBottom variant="h6" mt={2}>
            Username: {user.name}
          </Typography>
          <Typography gutterBottom variant="h6" mt={2}>
            Age: <Chip label={user.age} size="medium" />
          </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default UserCard;