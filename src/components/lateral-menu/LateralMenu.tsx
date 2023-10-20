'use client';
import {
    AppBar, Backdrop,
    Box,
    Container, Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {useContext} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import {CSSTransition} from "react-transition-group";
import {Category, Close} from "@mui/icons-material";
import Image from "next/image";

const LateralMenu = () => {
    const {
        isMenuActive,
        setIsMenuActive,
        categories,
    } = useContext(GlobalContext);
    const onCloseClick = () => {
        setIsMenuActive && setIsMenuActive(false);
    }
    return (
        <>
            <Backdrop open={isMenuActive || false}/>
            <CSSTransition
                in={isMenuActive}
                timeout={200}
                classNames={'toRight'}
                unmountOnExit
            >
                <Box
                    width={'100%'}
                    maxWidth={'36rem'}
                    height={'100vh'}
                    position={'fixed'}
                    bgcolor={'#fffffa'}
                >
                    <AppBar>
                        <Container>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}
                                   height={'4.5rem'}>
                                <Box position={'relative'}>
                                    <Image
                                        src={'https://i.postimg.cc/QMTL5Pry/store.png'}
                                        height={40}
                                        width={40}
                                        alt={'icono'}
                                    />
                                </Box>
                                <Typography variant={'h6'} component={'h2'}>Menú</Typography>
                                <IconButton onClick={onCloseClick}>
                                    <Close/>
                                </IconButton>
                            </Stack>
                        </Container>
                    </AppBar>
                    <Box marginTop={'4.5rem'}>
                        <List>
                            {categories && categories.map((category: any, index) => (
                                <ListItemButton
                                    key={category.id || index}
                                    disableGutters
                                >
                                    <Container>
                                        <Stack direction={'row'}>
                                            <ListItemIcon>
                                                <Category/>
                                            </ListItemIcon>
                                            <ListItemText primary={category.name || ''}/>
                                        </Stack>
                                    </Container>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Box>
            </CSSTransition>
        </>
    );
}
export default LateralMenu;