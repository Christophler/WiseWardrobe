import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  // Fetching the items from the database
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

        {/* Grid layout view for the items in the database */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >
          {/* Mapping the product card(s) to the grid */}
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

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