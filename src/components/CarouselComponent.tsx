import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";

import img3 from "../assets/3.jpeg";

import img4 from "../assets/4.jpeg";
import { Image } from "@chakra-ui/react";
import "./CarouselComponent.css";
const options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
};

const CarouselComponent: React.FC = () => {
  const images = [img1, img2, img3, img4];
  return (
    <Splide options={options}>
      {images.map((img) => (
        <SplideSlide>
          <div className="carousel-item">
            <Image src={img} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CarouselComponent;
