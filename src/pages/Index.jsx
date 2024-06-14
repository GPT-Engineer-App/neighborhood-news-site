import { Container, VStack, Heading, Text, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Local News Today
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your source for the latest news in your community
        </Text>

        <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/featured-news.jpg" alt="Featured News" borderRadius="md" />
          <Heading as="h2" size="lg" mt={4}>
            Featured News Title
          </Heading>
          <Text mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
          <Link color="teal.500" href="#" mt={2} display="block">
            Read more
          </Link>
        </Box>

        <Flex w="full" justify="space-between" wrap="wrap">
          <Box w={["full", "48%"]} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
            <Image src="/images/news1.jpg" alt="News 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              News Title 1
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Text>
            <Link color="teal.500" href="#" mt={2} display="block">
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
            <Link color="teal.500" href="#" mt={2} display="block">
              Read more
            </Link>
          </Box>
        </Flex>

        <Flex w="full" justify="center" mt={8}>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://instagram.com" isExternal mx={2}>
            <FaInstagram size="24px" />
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;