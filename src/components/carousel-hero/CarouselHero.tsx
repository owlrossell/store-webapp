'use client';
import {Carousel, CarouselItem} from "react-bootstrap";
import {Box} from "@mui/material";
import Image from "next/image";
import {useEffect, useState} from "react";

const CarouselHero = () => {
    const [index, setIndex] = useState(0);

    const onSelect = (newIndex : number) => {
        setIndex(newIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={onSelect}>
            <CarouselItem>
                <Box sx={{width: '100%', aspectRatio:'1', backgroundColor:'#000', position: 'relative'}}>
                    <Image
                        src={'https://metroio.vtexassets.com/assets/vtex.file-manager-graphql/images/2a131b1f-e064-43a8-8049-286c7b183d77___a3480dae56ad4af30532ed4f018bfdfd.jpg'}
                        alt={'hero'}
                        fill
                    />
                </Box>
            </CarouselItem>
            <CarouselItem>
                <Box sx={{width: '100%', aspectRatio:'1', backgroundColor:'#000'}}>
                    b
                </Box>
            </CarouselItem>
            <CarouselItem>
                <Box sx={{width: '100%', aspectRatio:'1', backgroundColor:'#000'}}>
                    c
                </Box>
            </CarouselItem>
        </Carousel>
    )
}
export default CarouselHero;