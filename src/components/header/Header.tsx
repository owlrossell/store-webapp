import {AppBar, Container, IconButton, Stack} from "@mui/material";
import {Menu, ShoppingCart} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <AppBar>
            <Container>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    height={'4.5rem'}
                >
                    <IconButton>
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
        </AppBar>
    )
}

export default Header;