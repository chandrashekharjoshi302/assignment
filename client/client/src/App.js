import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import Navbar from './Componets/Navbar/Navbar'
import Wishlist from './Componets/SingleProducts/Wishlist';
import Login from './Componets/Login/Login';
import Register from './Componets/Registration/Register';
import ProductPage from "./Componets/Products/ProductPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box px={4}>
        <Switch>
          {/* <Route path="/" exact>
            <h1>Home page</h1>
          </Route> */}
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/ProductPage">
            <ProductPage />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
