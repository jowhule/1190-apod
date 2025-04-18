import { Box, Link, Typography } from "@mui/material";
import StarsCanvas from "./components/StarsCanvas";
import apodImg from "./assets/apod-pic.jpg";
import dsmpSatellite from "./assets/dsmp-satellite.jpg";
import apodNoText from "./assets/earth_lights_lrg.jpg";
import HoverToolTip from "./components/HoverToolTip";
import CountriesCarousel from "./components/CountriesCarousel";

function App() {
  return (
    <>
      <Box
        position="relative"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        height="100vh"
      >
        <Box position="absolute" top="10px" left="10px">
          <Typography component="p">
            APOD written and coded by Jo Wu<br></br>Created: 04/2025
          </Typography>
        </Box>
        <StarsCanvas />
        <Box
          position="absolute"
          top="0"
          maxWidth={"1200px"}
          height="100%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography component="h1" variant="h1" textAlign={"center"}>
            The Night Sky: <br />
            When Earth Becomes the Constellation
          </Typography>
          <Typography component="p" fontSize={"20px"}>
            For centuries, the night sky has inspired, awed and directed
            humankind on Earth. In the past, sailors and navigators used
            celestial events to cross seas and traverse forests, while artists
            and poets found inspiration from the Milky Way; the stars have had
            meaningful roles in the lives of humankind.
          </Typography>
          <br></br>
          <Typography component="p" fontSize={"20px"} textAlign={"center"}>
            But today, the stars are <u>fading for many of us.</u>
          </Typography>
        </Box>
      </Box>
      <Box
        maxWidth={"1200px"}
        display={"flex"}
        flexDirection={"column"}
        margin="100px auto"
        minHeight="100vh"
      >
        <Typography
          component="p"
          variant="p"
          fontSize={"28px"}
          textAlign={"center"}
        >
          More than <span style={{ fontSize: "29px" }}>80%</span>
          <sup>[9]</sup> of the world’s population now lives under
          light-polluted skies.
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"20px"}>
          The nighttime satellite image of the Earth is a stunning sea of
          artificial lights. The glowing patterns reflect our urban sprawl,
          infrastructure and industrialisation.
        </Typography>
        <br />
        <Box component="img" src={apodImg} alt="apod image of night sky" />
        <Typography variant="caption">
          Figure 1: APOD picture from NASA (2008)
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"20px"}>
          Amazingly, the Earth at night nowadays resembles the night sky the way
          it existed before extensive development. We have traded the Milky Way
          for skyscrapers and highways.
        </Typography>
        {/*  */}
        <br />
        <br />
        <br />
        <Typography component="h3" variant="h3">
          The Science Behind the Image
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          {/* Text */}
          <Typography component="p" variant="p" fontSize={"20px"}>
            The image that reveals human activity isn’t a single photograph, but
            was produced using the data from the
            <b> Defense Meteorological Satellite Program (DMSP)</b> in 2000
            <sup>[26]</sup>. The program’s satellites are normally used for
            monitoring weather patterns and Earth’s geophysical environments
            (more details on the satellites’ features{" "}
            <Link
              target="_blank"
              href="https://www.spaceforce.mil/About-Us/Fact-Sheets/Article/2197779/defense-meteorological-satellite-program/"
            >
              here
            </Link>
            ) but contain visible and infrared sensors, specifically the{" "}
            <Link
              target="_blank"
              href="https://www.earthdata.nasa.gov/data/instruments/ols"
            >
              Operational Linescan System (OLS)
            </Link>
            , which could pick up reflected moonlight and capture images in a
            3000 km wide area [19].
          </Typography>

          {/* Image + Caption in a vertical column */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={dsmpSatellite}
              alt="graph of DSMP Satellite"
              height="auto"
            />
            <Typography variant="caption">
              Figure 2: A graphical depiction of a DMSP satellite in orbit
              provided by NESDIS, 2024.
            </Typography>
          </Box>
        </Box>
        <Typography component="p" variant="p" fontSize={"20px"}>
          It was eventually noted that the city lights were visible in the
          satellite's images on new moons, when the moonlight was bright enough.
          With this knowledge, a NASA biologist, Marc Imhoff and his team
          compiled images of Earth over several new moons to create a global map
          of city lights [26], revealing where major civilisations are
          illuminated.
        </Typography>
        <br />

        <Box display="flex" gap={2}>
          {/* Text */}
          <Box flex={1}>
            <Typography component="p" variant="p" fontSize={"20px"}>
              <b>Distribution of Lights</b>
            </Typography>
            <Typography component="p" variant="p" fontSize={"20px"}>
              The glowing patches like stars in the image are more than just
              pretty lights, we are seeing patterns of human settlement and
              development. The brightest areas correspond to highly urbanised
              regions, particularly in East Asia, North America and Europe.
              These regions are also known to have some of the highest human
              development index and densest populations (World Population
              Review, 2025).
            </Typography>
          </Box>

          <Box flex={1}>
            <CountriesCarousel />
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          {/* Text */}
          <Box flex={1}>
            <Typography component="p" variant="p" fontSize={"20px"}>
              Interestingly, we can observe where most urban lights are
              clustered near coastlines, rivers and fertile plains. This
              reflects water's importance in urban growth to achieve
              “sustainable development, social needs, economic development and
              environmental limits” (Kafy et al., 2018), with denser city lights
              often found near water sources.
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography component="p" variant="p" fontSize={"20px"}>
              <b>Distribution of Dark Zones</b>
            </Typography>
            <Typography component="p" variant="p" fontSize={"20px"}>
              In contrast, the dark zones across the map equally tell us a lot
              about urbanisation. These areas are sparsely populated as they
              are, with limited infrastructure usually due to challenging
              environmental conditions that make it difficult for developing
              cities.
            </Typography>
          </Box>
        </Box>
        <br />
        <Box position="relative">
          <Box
            component="img"
            src={apodNoText}
            alt="APOD Earth at Night"
            width="100%"
          />
          <HoverToolTip />
        </Box>
      </Box>
    </>
  );
}

export default App;
