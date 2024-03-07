import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

//import { CldImage } from 'next-cloudinary';

export interface ImageListProps {
    imgUrls: (string | StaticImageData)[];
   }

export function CarouselPlugin(
    {imgUrls}: ImageListProps
  ) {
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnMouseEnter: true,stopOnInteraction:false })
    )
   
    return (
      <Carousel
        plugins={[plugin.current]}
        className=" w-[95%] "
        opts={{loop:true}}
      >
            <CarouselContent>
                {imgUrls.map((value, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 relative md:h-[30rem] h-80 overflow-hidden">
                          
                            <Image
                                src={value}
                                alt="Project I worked on"
                                quality={100}
                                fill={true}
                                sizes="100vw md:80vw"
                               // priority = {true}
                                placeholder="blur"
                               // sizes="500px"
                                className="block rounded-t-lg shadow-2xl
         transition 
         group-hover:scale-[1.04] w-fit object-contain"

                            />
                            
                          
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    )
  }