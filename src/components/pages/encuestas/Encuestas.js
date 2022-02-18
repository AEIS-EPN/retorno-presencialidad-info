import { Image } from "@chakra-ui/image";
import { Box, Center, Divider, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import encuestas from "../../data/encuestas";
import Header from "../../share/Header";
import Encuesta from "./components/Encuesta";

const Encuestas = () => {
    return (
        <Box mb={100}>
            <Header />
            <Center>
                <VStack mt={10} width={{sm: "90%", md: "80%", lg: "60%"}} alignItems="flex-start">
                    <Box textAlign="left" mb={10}>
                        <Text mb={4} borderLeft="2px solid teal" pl={5} fontSize={24} color="teal" fontWeight="bold">
                            Encuestas
                        </Text>
                        <Text textAlign="justify">
                            Es necesario que completes las siguientes encuestas creadas por la comunidad Politécnica Nacional. La información que ingreses en cada uno de estos formularios será muy importante para las autoridades de la institución y la Asociación de Sistemas para el regreso a la presencialidad.
                        </Text>
                    </Box>
                    <Center flexWrap="wrap" display="flex" justifyContent="space-around">
                        {encuestas.map((encuesta, index) => {
                            return (
                                <Center key={index}>
                                    <Encuesta
                                        titulo={encuesta.titulo}
                                        autor={encuesta.autor}
                                        descripcion={encuesta.descripcion}
                                        imagen={encuesta.imagen}
                                        url={encuesta.url}
                                        desdeCorreo={encuesta.desdeCorreo}
                                    />
                                </Center>
                            )
                        })}
                    </Center>
                </VStack>
            </Center>
        </Box>
    )
}

export default Encuestas;