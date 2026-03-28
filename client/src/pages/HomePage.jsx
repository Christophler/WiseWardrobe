import { Container, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        {/* The case of an empty database */}
        <VStack spacing={2}>
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No items found 😢{" "}

						<Link to={"/create"}>
							<Text color={'blue.500'} _hover={{ textDecoration: "underline" }}>
								Click here to add an item!
							</Text>
						</Link>
					</Text>
        </VStack>
      </VStack>
    </Container>
  )
}

export default HomePage