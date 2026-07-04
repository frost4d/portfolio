import { Box, CircularProgress } from '@mui/material';

const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '40vh',
    }}
  >
    <CircularProgress
      sx={{
        color: 'linear-gradient(90deg, #38bdf8, #818cf8)',
      }}
    />
  </Box>
);

export default Loader;
