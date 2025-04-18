import lightsEastAsia from "../assets/lights-east-asia.png";
import lightsUs from "../assets/lights-us.png";
import lightsEurope from "../assets/lights-europe.png";
import { Box, Typography } from "@mui/material";
// App.jsx or Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [lightsEastAsia, lightsUs, lightsEurope];
const countries = ["East Asia", "North America", "Europe"];

function CountriesCarousel() {
  return (
    <Box width="400px" m="0 auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              width="100%"
              position="relative"
              display={"flex"}
              justifyContent={"center"}
            >
              <Box
                component="img"
                src={src}
                alt={`Slide ${index + 1}`}
                width="100%"
              />
              <Typography position="absolute" zIndex={1} bottom="25px">
                {countries[index]}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CountriesCarousel;
