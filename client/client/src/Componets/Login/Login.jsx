import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (currentUser) {
      alert(`Welcome back, ${currentUser.firstName}!`);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Box p="6" maxWidth="sm" mx="auto">
      <Heading as="h1" mb="6" textAlign="center">
        Login
      </Heading>

      <Box borderWidth="1px" borderRadius="md" p="6">
        <form onSubmit={handleSubmit}>
          <Stack spacing="3">
            {error && (
              <Text color="red.500" fontSize="sm" fontWeight="semibold">
                {error}
              </Text>
            )}

            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue">
              Log In
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
