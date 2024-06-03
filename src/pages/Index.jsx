import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">MyApp</Text>
            <Flex>
              <Link href="#" mx={2}>Home</Link>
              <Link href="#" mx={2}>About</Link>
              <Link href="#" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" flex="1" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of an empty React app.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;