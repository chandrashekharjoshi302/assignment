import React, { useState, useEffect } from 'react';
import { SimpleGrid, Text, Box, Button, Flex } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [productCategories, setCategories] = useState([]);
  const [addWishlist, setWishlist] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=${perPage}&page=${curPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setCategories(new Set(data.map((product) => product.category)));
      });
  }, [curPage, perPage]);

  const addToWishlist = (product) => {
    setWishlist([...addWishlist, product]);
    localStorage.setItem('wishlist', JSON.stringify([...addWishlist, product]));

    // Show success alert
    // <Alert
    //     status="success"
    //     variant="subtle"
    //     flexDirection="column"
    //     alignItems="center"
    //     justifyContent="center"
    //     textAlign="center"
    //     height="200px"
    //   >
    //     <AlertIcon boxSize="40px" mr={0} />
    //     <AlertTitle mt={4} mb={1} fontSize="lg">
    //       Product successfully added to wishlist!
    //     </AlertTitle>
    //     <AlertDescription maxWidth="sm">
    //       You can view your wishlist on the wishlist page.
    //     </AlertDescription>
    //   </Alert>
    alert("Product successfully added to wishlist!")
  };

  const handlePageChange = (np) => {
    setCurPage(np);
  };

 
  return (
    <>
      <SimpleGrid columns={4} spacing={2}>
        {products?.map((product) => (
          <Box w="100%" key={product.id}>
            <Text fontSize="3xl">{product.title}</Text>
            <img src={product.image} alt={product.title} />
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <Button onClick={() => addToWishlist(product)}>❤️</Button>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center" alignItems="center" mt="4">
        <Button
          onClick={() => handlePageChange(curPage - 1)}
          disabled={curPage === 1}
          mr="2"
        >
          Previous
        </Button>
        <Button mr="2">{curPage}</Button>
        <Button onClick={() => handlePageChange(curPage + 1)} ml="2">
          Next
        </Button>
      </Flex>
    </>
  );
}

export default ProductPage;
