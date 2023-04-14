import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    const user = registrationData.find(
      (e) => e.email === email && e.password === password,
    );

    if (user) {
      alert(`Welcome ${user.firstName} ${user.lastName}!`);
      window.location.href = "/ProductPage";
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <VStack spacing={6} mx="auto" my="10">
      <Heading size="lg">Login</Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>

        {error && (
          <FormControl isInvalid>
            <FormLabel>Error</FormLabel>
            <Input
              isReadOnly
              value={error}
              bg="red.100"
              color="red.700"
              borderColor="red.500"
            />
          </FormControl>
        )}

        <Button type="submit" colorScheme="blue" mt={4}>
          Login
        </Button>
      </form>
    </VStack>
  );
}

export default LoginPage;
