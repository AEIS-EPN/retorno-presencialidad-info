import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Link, Text } from "@chakra-ui/layout"
import { SiFacebook } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { Link as LinkRouter, useLocation } from "react-router-dom";


const Header = _ => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        // background="linear-gradient(to right, red, purple);"
        <header>
            <Box height={2} background="linear-gradient(to right, #1F67AF, #00CC82);"></Box>
            <HStack pt={10} pb={10} display="flex" justifyContent={"space-around"} boxShadow='md' flexWrap="wrap">
                <LinkRouter to={'/inicio'}>
                    <Image width={125} src={require('../../utils/LogotipoAEIS.png')} alt="Logotipo de la Asociación de Ingeniería de Sistemas de la Escuela Politécnica Nacional - AEIS" />
                </LinkRouter>
                <nav>
                    <HStack spacing={{sm: 0, md: 10, lg: 50}} display="flex"  alignItems={{sm: "flex-start"}} flexDirection={{sm: "column",md: "row"}} flexWrap="wrap">
                        <LinkRouter to={'/inicio'}>
                            <Text
                            width="100%"
                                pl={2}
                                pr={2}
                                fontWeight={pathname === '/inicio' ? "bold" : "normal"}
                                color={pathname === '/inicio' ? "teal" : "gray.500"}
                                borderBottom={pathname === '/inicio' ? "1px solid rgba(19, 198, 167, 0.48)" : ""}
                            >
                                Inicio
                            </Text>
                        </LinkRouter >
                        <LinkRouter to={'/informacion-oficial'}>
                            <Text
                         width="100%"
                                fontWeight={pathname === '/informacion-oficial' ? "bold" : "normal"}
                                color={pathname === '/informacion-oficial' ? "teal" : "gray.500"}
                                borderBottom={pathname === '/informacion-oficial' ? "1px solid rgba(19, 198, 167, 0.48)" : ""}
                            >
                                Información Oficial
                            </Text>
                        </LinkRouter>
                        <LinkRouter to={'/arriendos'}>
                            <Text
                                pl={2}
                                pr={2}
                                fontWeight={pathname === '/arriendos' ? "bold" : "normal"}
                                color={pathname === '/arriendos' ? "teal" : "gray.500"}
                                borderBottom={pathname === '/arriendos' ? "1px solid rgba(19, 198, 167, 0.48)" : ""}
                            >
                                Arriendos
                            </Text>
                        </LinkRouter>
                        <LinkRouter to={'/encuestas'}>
                            <Text
                                pl={2}
                                pr={2}
                                fontWeight={pathname === '/encuestas' ? "bold" : "normal"}
                                color={pathname === '/encuestas' ? "teal" : "gray.500"}
                                borderBottom={pathname === '/encuestas' ? "1px solid rgba(19, 198, 167, 0.48)" : ""}
                            >
                                Encuestas
                            </Text>
                        </LinkRouter>
                    </HStack>
                </nav>
                <HStack spacing={5}>
                    <Link fontSize={23} href="https://www.facebook.com/AEIS.FIS.EPN" isExternal>
                        <Icon color="gray.400" as={SiFacebook} />
                    </Link>
                    <Link fontSize={24} href="https://www.instagram.com/aeis_epn/" isExternal>
                        <Icon color="gray.400" as={RiInstagramFill} />
                    </Link>
                </HStack>
            </HStack>
        </header>
    )
}

export default Header;