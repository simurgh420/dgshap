import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui/';
import img1 from './image/1.png';
import img2 from './image/2.png';
import img3 from './image/3.jpg';
import img4 from './image/4.webp';
function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[img1, img2, img3, img4].map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[400px] w-full flex items-center justify-center p-6">
                  <Image src={img} alt="banner" fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
