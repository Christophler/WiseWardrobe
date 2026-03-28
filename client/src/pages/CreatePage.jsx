import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast()  // small popup to notify the user the status of their request
  const {createProduct}=useProductStore()

  const handleAddItem = async() => {
    const {success, message} = await createProduct(newItem);
    if (!success) {
      toast({
        "title": "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true
      });
    } else {
      toast({
        "title": "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true
      });
    }
    setNewItem({ name: "", price: "", image: ""});  // resetting the input boxes
  }

  return <Container maxW={"container.sm"} pt={5}>
    <VStack
      spacing={8}
    >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Add New Item
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
						<Input
							placeholder='Item Name'
							name='name'
							value={newItem.name}
							onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newItem.price}
							onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newItem.image}
							onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
						/>

            <Button colorScheme='blue' onClick={handleAddItem} w={'full'}>
              Add Item
            </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage