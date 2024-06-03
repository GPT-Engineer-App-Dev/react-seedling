import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.700" color="white" py={4} px={{ base: 4, md: 8 }}>
        <Container maxW="container.md">
          <Flex justify="space-between" align="center" flexWrap="wrap">
            <Text fontSize="xl" fontWeight="bold" flexShrink={0}>MyApp</Text>
            <Flex display={{ base: "none", md: "flex" }}>
              <Link href="#" mx={2} my={{ base: 2, md: 0 }}>Home</Link>
              <Link href="#" mx={2} my={{ base: 2, md: 0 }}>About</Link>
              <Link href="#" mx={2} my={{ base: 2, md: 0 }}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" py={8} flex="1">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">&copy; 2023 MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;