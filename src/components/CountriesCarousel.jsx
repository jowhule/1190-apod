import lightsEastAsia from "../assets/lights-east-asia.png";
import lightsUs from "../assets/lights-us.png";
import lightsEurope from "../assets/lights-europe.png";
import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const CountriesCarousel = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage className="d-block w-100" src={lightsEastAsia} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={lightsUs} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={lightsEurope} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};

export default CountriesCarousel;
