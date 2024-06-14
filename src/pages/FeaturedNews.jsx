import { Container, Heading, Text, Box, Image } from "@chakra-ui/react";

const FeaturedNews = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src="/images/featured-news.jpg" alt="Featured News" borderRadius="md" />
        <Heading as="h2" size="lg" mt={4}>
          Featured News Title
        </Heading>
        <Text mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </Text>
      </Box>
    </Container>
  );
};

export default FeaturedNews;