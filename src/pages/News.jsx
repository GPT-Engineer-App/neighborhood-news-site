import { Container, Heading, Text, Box, Image, Link, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          News
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Stay updated with the latest news
        </Text>

        <Flex w="full" justify="space-between" wrap="wrap">
          <Box w={["full", "48%"]} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src="/images/news1.jpg" alt="News 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              News Title 1
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Text>
            <Link color="teal.500" onClick={() => navigate('/news/1')} mt={2} display="block">
              Read more
            </Link>
          </Box>
          <Box w={["full", "48%"]} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src="/images/news2.jpg" alt="News 2" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              News Title 2
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Text>
            <Link color="teal.500" onClick={() => navigate('/news/2')} mt={2} display="block">
              Read more
            </Link>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default News;