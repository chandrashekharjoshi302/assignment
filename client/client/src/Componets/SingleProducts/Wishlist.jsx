import React, { useEffect, useState } from 'react';
import { SimpleGrid, Box, Text, Image, Button } from '@chakra-ui/react';

function WishlistPage() {
  const [showishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = showishlist.filter((product) => product.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
      {showishlist?.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.title} />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Text fontWeight="semibold" fontSize="xl" mb="2">
                {product.title}
              </Text>
            </Box>
            <Text mb="2">{product.brand}</Text>
            <Text mb="2">{product.category}</Text>
            <Text mb="2">{product.price}</Text>
            <Button colorScheme="red" onClick={() => removeFromWishlist(product.id)}>
              Remove
            </Button>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default WishlistPage;
