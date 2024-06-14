import { Container, Heading, Text, Box, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Contact Us
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </Text>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack spacing={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="teal" size="md">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;