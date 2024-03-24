import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import PageNotFound from './components/PageNotFound';
import Container from '@material-ui/core/Container';
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/user/:username", element: <UserDetails />
  },
  {
    path: "*", element: <PageNotFound />
  }
])

const StyledBox = styled(Box)({
  margin: "30px 0px",
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container maxWidth={'md'}>
    <StyledBox>
      <RouterProvider router={router} />
    </StyledBox>
  </Container>
);
