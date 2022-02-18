import { Box } from "@chakra-ui/layout"
import documentos from "../../../data/documentos";
import Documento from "./Documento";

const Documentos = () => {
    return(
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            {
                documentos.map(
                    (documento, index) => {
                        return(
                            <Documento
                                key={index}
                                titulo={documento.titulo}
                                autor={documento.autor}
                                url={documento.url}
                                fechaPublicacion={documento.fechaPublicacion}
                            />
                        )
                    }
                )
            }

        </Box>
    )
}

export default Documentos;