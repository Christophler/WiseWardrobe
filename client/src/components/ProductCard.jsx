import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct} = useProductStore()
    const toast = useToast()
    const handleDeleteProduct = async (prodId) => {
        const {success, message} = await deleteProduct(prodId)
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
    }}

    return (
        <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />

            <Box p={4}>
                <Heading as={'h3'} size={'md'} mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    ${product.price}
                </Text>

                {/* Icons for editing and deleting the record */}
                <HStack spacing={2}>
                    <IconButton icon={<FaEdit />} colorScheme='blue' />
                    <IconButton icon={<FaDeleteLeft />} colorScheme='red' onClick={() => handleDeleteProduct(product._id)}/>
                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard