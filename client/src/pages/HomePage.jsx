import { Container, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'

const HomePage = () => {
  // Fetching the items from the database
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products:", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        {/* Header */}
        <Text
					fontSize={"30"}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
          Current Items⚡
        </Text>

        {/* The case of an empty database */}
        <VStack spacing={2}>
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No items found 😢{" "}

						<Link to={"/create"}>
							<Text color={'blue.500'} _hover={{ textDecoration: "underline" }}>
								Click HERE to add an item!
							</Text>
						</Link>
					</Text>
        </VStack>
      </VStack>
    </Container>
  )
}

export default HomePage