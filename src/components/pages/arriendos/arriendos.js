import { ViewIcon } from "@chakra-ui/icons";
import { Badge, Box, Center, Link, Text, VStack } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr, Tfoot } from "@chakra-ui/table";
import Header from "../../share/Header";

const Arriendos = () => {
    return (
        <Box mb={100}>
            <Header />
            <Center>
                <VStack mt={10} width={{ sm: "90%", md: "80%", lg: "80%" }} alignItems="flex-start">
                    <Box textAlign="left" mb={10}>
                        <Text mb={4} borderLeft="2px solid teal" pl={5} fontSize={24} color="teal" fontWeight="bold">
                            Arriendos
                        </Text>
                        <Text textAlign="justify">
                            En esta sección podrás ver los arriendos que hemos recopilado para los estudiantes de provincia.
                        </Text>
                    </Box>
                    <Box>
                        <Table variant='simple'>
                            <TableCaption>El sábado 19 de febrero anunciaremos arriendos en la tarde.</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Sector</Th>
                                    <Th>Dirección</Th>
                                    <Th>Descripción</Th>
                                    <Th>Amueblado</Th>
                                    <Th isNumeric>Arriendo</Th>
                                    <Th isNumeric>Garantía</Th>
                                    <Th>Télefono de Contacto</Th>
                                    <Th>Imágenes</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>La Tola</Td>
                                    <Td>José María Aguirre y Martín Peralta</Td>
                                    <Td>Un cuarto estudiantil más baño y cocina compartida.</Td>
                                    <Td><Badge colorScheme="red">No</Badge></Td>
                                    <Td isNumeric>125.00</Td>
                                    <Td isNumeric>250.00</Td>
                                    <Td isNumeric>+593987373484</Td>
                                    <Td isNumeric><Link href="https://apollo-virginia.akamaized.net/v1/files/tax036w3gv31-EC/image;s=1080x1080" isExternal><ViewIcon color="teal.500"/> </Link></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>

                </VStack>
            </Center>
        </Box>
    )
}

export default Arriendos;