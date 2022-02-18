import { Box, Link, Text } from "@chakra-ui/layout";
import YoutubeEmbed from "../../../share/YoutubeEmbed";



const Video = ({ id, titulo, url, canal, canalUrl}) => {

    return (
        <Box width={{lg: "50%"}}  borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box>
                <YoutubeEmbed embedId={id} />
            </Box>
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                  
                >
                    <Text>
                    <Link href={url}>{titulo}</Link>
                    </Text>
                </Box>

                <Box>
                    <Link href={canalUrl}> {canal} </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Video;