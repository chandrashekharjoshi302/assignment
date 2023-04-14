import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const styles = {
       
        
      };
  return (
    <Box bg="gray.100" px={4}>
      <Flex alignItems="center" justifyContent="space-between" h={16}>
        <Link as={RouterLink} to="/ProductPage">
          <img src="data:image/png;base64,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" alt="Logo" style={{ width: '100px', height: '60px' }}/>
        </Link>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/wishlist" mx={4}>
            Wishlist❤️
          </Link>
          <Link as={RouterLink} to="/login" mx={4}>
            Login
          </Link>
          <Link as={RouterLink} to="/register" mx={4}>
            Register
          </Link>
          <Link as={RouterLink} to="/ProductPage" mx={4}>
          ProductPage
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
