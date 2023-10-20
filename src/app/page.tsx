'use client';
import CarouselHero from "@/components/carousel-hero";
import {Box} from "@mui/material";
import Search from "@/components/search";
export default function Home() {
    return (
        <Box marginTop={'4.5rem'}>
            <CarouselHero/>
            <Search/>
        </Box>
    )
}
