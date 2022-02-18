import { AttachmentIcon, InfoIcon, ViewIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Center, Divider, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import { Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/tabs";
import Header from "../../share/Header";
import Documentos from "./components/Documentos";
import Videos from "./components/Videos";


const InformacionOficial = () => {
    return (
        <Box mb={100}>
            <Header />
            <Center>
                <VStack mt={10} width={{ sm: "90%", md: "80%", lg: "60%" }} alignItems="flex-start">
                    <Box textAlign="left" mb={10}>
                        <Text mb={4} borderLeft="2px solid teal" pl={5} fontSize={24} color="teal" fontWeight="bold">
                            Información Adicional
                        </Text>
                        <Text textAlign="justify">
                            Autoridades de nuestra institución como de nuestro país han establecido información importante sobre el retorno a la presencialidad que te presentamos a continuación.
                        </Text>
                    </Box>
                    <Box width="100%">
                        <Tabs isFitted variant='enclosed'>
                            <TabList mb='1em'>
                                <Tab color="gray.500"><ViewIcon mr={2}/> <Text>Vídeos</Text></Tab>
                                <Tab color="gray.500"><AttachmentIcon mr={2}/> Documentos</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Videos />
                                </TabPanel>
                                <TabPanel>
                                    <Documentos />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </VStack>
            </Center>
        </Box>
    )
}

export default InformacionOficial;