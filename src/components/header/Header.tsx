'use client';
import {AppBar, Container, IconButton, Stack} from "@mui/material";
import {Menu, ShoppingCart} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import {useContext, useState} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import LateralMenu from "@/components/lateral-menu";

const Header = () => {
    const {isMenuActive, setIsMenuActive} = useContext(GlobalContext);

    const onMenuButtonClick = () => {
        setIsMenuActive && setIsMenuActive(true);
    }

    return (
        <AppBar>
            <Container>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    height={'4.5rem'}
                >
                    <IconButton onClick={onMenuButtonClick}>
                        <Menu/>
                    </IconButton>
                    <Link href={'/'} style={{position: 'relative', width:'8.125rem', height: '2rem'}}>
                        <Image
                            alt={'logo'}
                            src={'https://i.postimg.cc/d1vpb0WB/La-Fontana.png'}
                            fill
                            priority
                        />
                    </Link>
                    <IconButton>
                        <ShoppingCart/>
                    </IconButton>
                </Stack>
            </Container>
            <LateralMenu/>
        </AppBar>
    )
}

export default Header;