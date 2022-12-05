import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
