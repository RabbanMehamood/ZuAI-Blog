import React from 'react';
import RoutesComponent from './Routes';
import { Container } from '@mui/material';

function App() {
  return (
    <Container disableGutters={true} maxWidth={false} maxHeight={false}>
      <RoutesComponent />
    </Container>
  );
}

export default App;
