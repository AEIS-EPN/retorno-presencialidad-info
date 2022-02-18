import { Box, VStack } from "@chakra-ui/layout"
import videos from "../../../data/videos"
import Video from "./Video"

const Videos = () => {
    return (
        <VStack display="flex" flexDirection="column">
            {
                videos.map(
                    (video, index) => {
                        return (
                            <Box width="100%" display="flex" justifyContent="center" mt={2} mb={5}>
                                <Video
                                    canal={video.canal}
                                    canalUrl={video.canalUrl}
                                    titulo={video.titulo}
                                    url={video.url}
                                    id={video.id}
                                    key={index}
                                />
                            </Box>
                        )
                    }
                )
            }
        </VStack>
    )
}

export default Videos;