import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function PostList () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters='true'>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', textAlign: 'center', paddingTop: '30px' }} >Blog Posts - List</Box>
      </Container>
    </React.Fragment>
  );
}