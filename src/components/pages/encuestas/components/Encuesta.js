import { Image } from "@chakra-ui/image";
import { Badge, Box, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Encuesta = ({ titulo, descripcion, autor, imagen, url, desdeCorreo }) => {

    return (
        <Box mb={{lg: 5}} w={{lg: "500px"}} borderWidth='1px' borderRadius='lg' overflow='hidden' >
            <VStack spacing='10px' p='6'>
                <Link w="100%" href={url} isExternal>
                    <Box
                        fontWeight='semibold'
                        lineHeight='tight'
                        isTruncated
                        w="100%"
                        height="150px"
                        backgroundImage={imagen}
                        backgroundSize="100%"
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Badge colorScheme='teal'>
                            {autor}
                        </Badge>
                    </Box>
                </Link>
                <Link href={url} isExternal>
                    <Heading as="h2" size="sm" align="left">
                        {titulo}
                        {desdeCorreo ? 
                        <Badge ml={2} colorScheme='blue'>Abrir desde el correo electrónico<ExternalLinkIcon mx='5px' fontSize="17px" pb={1} />
                        </Badge> 
                        :  
                        <ExternalLinkIcon mx='5px' fontSize="17px" pb={1} />
                        }
                    </Heading>
                </Link>
                <Text align="left">
                    {descripcion}
                </Text>

            </VStack>
        </Box>
    )
}

export default Encuesta;
