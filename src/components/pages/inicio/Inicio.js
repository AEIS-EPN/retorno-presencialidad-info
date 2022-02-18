import { Button, ButtonGroup } from "@chakra-ui/button";
import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Header from "../../share/Header";

const Inicio = () => {
    return (
        <div>
            <Header />
            <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                <Center mt={{ lg: -10 }} width={{ sm: "100%", md: "100%", lg: "50%" }}>
                    <VStack width="90%" p={{ sm: 10, lg:50}} ml={{lg: 20}}>
                        <Heading lineHeight={1.2} mt={-5} textAlign="left" as="h1" size="2xl" color="teal.400">¡Trabajamos por un retorno a la presencialidad seguro!</Heading>
                        <Heading lineHeight={1.3} color="gray.600" pt={4} pb={5} size="md" textAlign="left">Bienvenido al sitio web de la AEIS con respecto al retorno a la presencialidad en la Escuela Politécnica Nacional. </Heading>
                        <HStack display="flex" justifyContent={{md: "center", lg: "flex-start"}} width="100%" flexWrap="wrap">
                            <Link  to="/informacion-oficial">
                                <Button m={4} colorScheme='teal' mr={5}>Información Oficial</Button>
                            </Link>
                            <Link to="/arriendos">
                                <Button m={4} colorScheme='teal' mr={5}>Arriendos</Button>
                            </Link>
                            <Link to="/encuestas">
                                <Button m={4} colorScheme='teal' mr={5}>Encuestas</Button>
                            </Link>
                        </HStack>
                    </VStack>
                </Center>
                <Box
                    width={{md: "100%", lg:"700px"}}
                    height="750px"
                    backgroundImage={require('../../../utils/aeis2022.png')}
                    backgroundRepeat="no-repeat"
                    backgroundSize="100%"
                >
                </Box>
            </Box>
        </div>
    )
}

export default Inicio;