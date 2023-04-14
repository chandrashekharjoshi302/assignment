import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
} from '@chakra-ui/react';

function RegistrationPage() {
  const [formData, setFormData] = useState([]);


  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")

 

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('registrationData', JSON.stringify(formData));
    alert('Registration successful!');
  };

  return (
    <VStack spacing={6} mx="auto" my="10">
      <Heading size="lg">Register</Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            name="firstName"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            name="lastName"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" mt={4}>
          Register
        </Button>
      </form>
    </VStack>
  );
}

export default RegistrationPage;
