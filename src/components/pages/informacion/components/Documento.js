import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/layout";

const Documento = ({ titulo, autor, url, fechaPublicacion }) => {
    return (
        <Box boxShadow="0px 0px 10px rgba(229, 229, 229, 0.8)" m={{ sm:1, md: 2, lg: 10}} width={{ lg: "80%" }} borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6' textAlign="left">
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                >
                    <Link href={url} isExternal> <Text>{titulo} <ExternalLinkIcon mx='5px' fontSize="17px" pb={1} /></Text></Link>
                </Box>
                <Box>
                    <Text color="gray">
                        <strong>Autor:</strong> {autor}
                    </Text>
                </Box>
                <Box>
                    <Text color="gray">
                        <strong>Fecha de publicación:</strong> {autor}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Documento;