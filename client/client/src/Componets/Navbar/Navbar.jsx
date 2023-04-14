import { Box, Flex, Spacer, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const styles = {
       
        
      };
  return (
    <Box bg="gray.100" px={4}>
      <Flex alignItems="center" justifyContent="space-between" h={16}>
        <Link as={RouterLink} to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuAnyzHjbpD5C-_av_VpGGjkz2bq-x1TJm-YeHLP7FE_P5x-V87_hXLgj1UF1XpseRzo&usqp=CAU" alt="Logo" style={{ width: '200px', height: '100px' }}/>
        </Link>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/wishlist" mx={4}>
            Wishlist
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
