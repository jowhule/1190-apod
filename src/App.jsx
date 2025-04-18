import {
  Accordion,
  Box,
  Link,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StarsCanvas from "./components/StarsCanvas";
import apodImg from "./assets/apod-pic.jpg";
import dsmpSatellite from "./assets/dsmp-satellite.jpg";
import apodNoText from "./assets/earth_lights_lrg.jpg";
import lightPollution from "./assets/light-pollution.png";
import pollutionTypes from "./assets/pollution-types.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import CountriesCarousel from "./components/CountriesCarousel";
import HoverTooltips from "./components/HoverTooltips";
import HarmfulTabs from "./components/HarmfulTabs";
import ausPollution from "./assets/aus-light-pollution.png";
import filterOne from "./assets/filter1.png";
import filterTwo from "./assets/filter2.png";
import bortleScale from "./assets/bortle-scale.png";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
          maxWidth={"1000px"}
          height="100%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography component="h1" variant="h1" textAlign={"center"}>
            The Night Sky: <br />
            When Earth Becomes the Constellation
          </Typography>
          <Typography component="p">
            For centuries, the night sky has inspired, awed and directed
            humankind on Earth. In the past, sailors and navigators used
            celestial events to cross seas and traverse forests, while artists
            and poets found inspiration from the Milky Way; the stars have had
            meaningful roles in the lives of humankind.
          </Typography>
          <br></br>
          <Typography component="p" textAlign={"center"}>
            But today, the stars are <u>fading for many of us.</u>
          </Typography>
        </Box>
      </Box>
      <Box
        maxWidth={"1000px"}
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
        <Typography component="p" variant="p">
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
        <Typography component="p" variant="p">
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
          <Typography component="p" variant="p">
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
        <Typography component="p" variant="p">
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
            <Typography component="p" variant="p" fontSize={"22px"}>
              <b>Distribution of Lights</b>
            </Typography>
            <Typography component="p" variant="p">
              The glowing patches like stars in the image are more than just
              pretty lights, we are seeing patterns of human settlement and
              development. The brightest areas correspond to highly urbanised
              regions, particularly in East Asia, North America and Europe.
              These regions are also known to have some of the highest human
              development index and densest populations (World Population
              Review, 2025). <br />
              <br />
              Interestingly, we can observe where most urban lights are
              clustered near coastlines, rivers and fertile plains. This
              reflects water's importance in urban growth to achieve
              “sustainable development, social needs, economic development and
              environmental limits” (Kafy et al., 2018), with denser city lights
              often found near water sources.
            </Typography>
            <br />
            <Typography variant="subtitle2">
              (Hover over the squares on the image below)
            </Typography>
          </Box>

          <Box flex={1}>
            <CountriesCarousel />
            <br />
            <Typography component="p" variant="p">
              <b>Distribution of Dark Zones</b>
            </Typography>
            <Typography component="p" variant="p">
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
          <HoverTooltips />
        </Box>
        <Typography component="p" variant="p">
          In short, the satellite images are more than just pictures of the
          world at night, but provide us a perspective on how human populations
          are distributed across the planet. Although visually impressive, these
          urban light images have a dark side.
        </Typography>
        <br />
        <br />
        <br />
        <Typography component="h3" variant="h3">
          The Light We Lost
        </Typography>
        <Typography component="p" variant="p">
          For many, our skies are dark with a few specks of stars, and it is
          hard to fathom the thousands more that should be visible. Traces of
          the galaxy being “erased” are more evident as more than 99% of the US
          and Europe live under polluted skies (Falchi et al. 2016). In 1994, a
          6.7 magnitude earthquake hit Los Angeles at night, causing a city-wide
          blackout which unveiled a giant cosmic cloud (Buck, 2017). People were
          so intimidated by the cloud that they called emergency centres and the
          Griffith Observatory (Sharkey, 2008). The ‘cloud’ was simply the Milky
          Way, hidden by the cloak of <b>light pollution</b> caused by urban
          lights.
        </Typography>
        <br />
        <Box component={"img"} src={lightPollution} />
        <Typography variant="subtitle2" textAlign={"center"}>
          Figure 3. A photograph of the night sky and stars above a
          light-polluted city from (Cokinos, 2024)
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"22px"}>
          <b>Light Pollution</b>
        </Typography>
        <Typography component="p" variant="p">
          We have all heard about air pollution from carbon emissions, water
          pollution from waste in waterways and landfills. Instead, light
          pollution refers to the excessive or unwanted artificial light that
          seeps into the sky. Not only is this a waste of energy, but the
          escaped light brightens our skies and thus decreases the visibility of
          fainter lights, like stars (Matson, 2023).
        </Typography>
        <br />
        <Box display="flex" gap={8}>
          <Box flex={1}>
            <Typography component="p" variant="p">
              There are 4 types of light pollution (Rajkhowa, 2014):
            </Typography>
            <br />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Skyglow
              </AccordionSummary>
              <AccordionDetails>
                It is the brightening of the urban skies from direct upward
                light
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Light Trespass
              </AccordionSummary>
              <AccordionDetails>
                It is unwanted light entering spaces, such as bedroom windows,
                from outside sources.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Glare
              </AccordionSummary>
              <AccordionDetails>
                It results from excessive flashing of light that causes
                discomfort.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Clutter
              </AccordionSummary>
              <AccordionDetails>
                It is the excessive grouping of bright lights that causes
                confusion and visual disturbance.
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box flex={1}>
            <Box width="100%" component={"img"} src={pollutionTypes} />
            <Typography variant="subtitle2">
              Figure 4. A graphic diagram of various forms of light pollution
              (Big Bend Dark Sky Reserve, 2023).
            </Typography>
          </Box>
        </Box>
        <br />
        <Typography component="p" variant="p">
          Additionally, clouds, made up of water droplets, can reflect visible
          light and contribute to light pollution (Kokhanovsky, 2016). This
          means that on days with cloudier weather or denser clouds, the light
          pollution in cities can increase further by a factor of 10 (Le Tallec,
          2016).
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"22px"}>
          <b>What produces light pollution?</b>
        </Typography>
        <Typography component="p" variant="p">
          Light pollution comes from ignorance of poor lighting, which causes
          the spread of excessive or unwanted artificial light sources (Cokinos,
          2024). Sources of light pollution include city lighting, such as, but
          not limited to, public and road lighting, lighting from buildings,
          particularly for commercial reasons, and vehicle headlights (Le
          Tallec, 2016). Since the invention of LEDS, which replaced older
          lighting technology due to their low cost, efficiency, and safety, the
          skies have become 7%-10% brighter each year (Matson, 2023).
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"22px"}>
          <b>So what? What does it affect?</b>
        </Typography>
        <Box display={"flex"} gap={2}>
          <Box flex={1}>
            <HarmfulTabs />
          </Box>
          <Box flex={1}>
            <Box component={"img"} width="100%" src={ausPollution} />
            <Typography variant="subtitle2">
              Figure 5. A heatmap of Australia’s light pollution as of World
              Atlas 2015 provided by{" "}
              <Link target="_blank" href="https://www.lightpollutionmap.info">
                https://www.lightpollutionmap.info
              </Link>
              .
            </Typography>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <Typography component="h3" variant="h3">
          The Light We Lost
        </Typography>
        <Typography component="p" variant="p">
          Due to light pollution, it might mean that anyone who wishes to
          observe the stars have to travel further away from civilisation. While
          conditions may not be perfect, stargazing in cities is still far from
          hopeless. John E. Bortle created the Bortle Scale, where he quantifies
          the amount of light pollution. Within{" "}
          <Link
            src="https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/"
            target="_blank"
          >
            his article
          </Link>{" "}
          (2006), he discusses the stars and planets visible for each ranking on
          the scale as well as the telescope size required. This guide makes
          astronomy more accessible to many individuals, even under polluted
          skies.
        </Typography>
        <br />
        <Box component="img" src={bortleScale} width="80%" m="0 auto" />
        <Typography variant="subtitle2" textAlign={"center"}>
          Figure 6. A visual representation of the Bortle Scale used by both
          amateur and professional astronomers provided by Celestron (2022).
        </Typography>
        <br />
        <Box display={"flex"} gap={2}>
          <Box flex={1}>
            <Typography component="p" variant="p">
              Additionally, there has been research and development of equipment
              that aids, albeit to a limited extent, telescopes and cameras to
              view the galaxy in cities such as dew shields, eyepieces and light
              pollution filters (Celestron 2022).
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="subtitle2" textAlign={"right"}>
              Figure 7. A side by side comparison of a lightly polluted sky with
              and without a filter by Peter Zelinka (2019). His{" "}
              <Link
                target="_blank"
                href="https://www.peterzelinka.com/blog/2019/8/light-pollution-filters-for-astrophotography"
              >
                blog
              </Link>{" "}
              showcases more filters and examples with sliders for better
              comparisons.
            </Typography>
          </Box>

          <Box flex={3}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={filterOne} alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src={filterTwo} alt="Image two" />
              }
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
