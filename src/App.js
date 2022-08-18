import './App.css';

import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

import { Box } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <Box mb={6}>
        <UserForm />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <UserCard />
      </Box>
    </div>
  );
}

export default App;
