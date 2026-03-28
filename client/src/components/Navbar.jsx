import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiPlusSquare, FiMoon, FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"false"} px={4} bg={useColorModeValue("gray.200", "gray.800")}>  {/* Max width of window and padding x */}
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, #1991e0, #0c00fa)"}
					bgClip={"text"}
        >
          <Link to={"/"}>WiseWardrobe 🧥</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <FiPlusSquare />
          </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode == "light" ? <FiMoon /> : <FiSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar