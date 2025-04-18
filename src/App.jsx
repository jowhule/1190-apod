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
import Divider from "@mui/material/Divider";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import SolutionsTabs from "./components/SolutionsTabs";

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
        <Box position="absolute" bottom="10px" left="10px">
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
          <Typography
            component="h1"
            variant="h1"
            textAlign={"center"}
            fontFamily={"Open Sans"}
            fontWeight={900}
          >
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
        <Typography
          component="h3"
          variant="h3"
          fontFamily={"Open Sans"}
          fontWeight={900}
          color={"#90caf9"}
        >
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
              provided by NESDIS, 2024<sup>[20]</sup>.
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
              development index and densest populations<sup>[28]</sup>. <br />
              <br />
              Interestingly, we can observe where most urban lights are
              clustered near coastlines, rivers and fertile plains. This
              reflects water's importance in urban growth to achieve
              “sustainable development, social needs, economic development and
              environmental limits”<sup>[12]</sup>, with denser city lights
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
            <Typography component="p" variant="p" fontSize={"22px"}>
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
        <Typography
          component="h3"
          variant="h3"
          fontFamily={"Open Sans"}
          fontWeight={900}
          color={"#90caf9"}
        >
          The Light We Lost
        </Typography>
        <Typography component="p" variant="p">
          For many, our skies are dark with a few specks of stars, and it is
          hard to fathom the thousands more that should be visible. Traces of
          the galaxy being “erased” are more evident as more than 99% of the US
          and Europe live under polluted skies<sup>[9]</sup>. In 1994, a 6.7
          magnitude earthquake hit Los Angeles at night, causing a city-wide
          blackout which unveiled a giant cosmic cloud<sup>[5]</sup>. People
          were so intimidated by the cloud that they called emergency centres
          and the Griffith Observatory<sup>[23]</sup>. The ‘cloud’ was simply
          the Milky Way, hidden by the cloak of <b>light pollution</b> caused by
          urban lights.
        </Typography>
        <br />
        <Box component={"img"} src={lightPollution} />
        <Typography variant="subtitle2" textAlign={"center"}>
          Figure 3. A photograph of the night sky and stars above a
          light-polluted city from<sup>[7]</sup>
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
          fainter lights, like stars<sup>[16]</sup>.
        </Typography>
        <br />
        <Box display="flex" gap={8}>
          <Box flex={1}>
            <Typography component="p" variant="p">
              There are 4 types of light pollution<sup>[22]</sup>:
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
              <sup>[3]</sup>.
            </Typography>
          </Box>
        </Box>
        <br />
        <Typography component="p" variant="p">
          Additionally, clouds, made up of water droplets, can reflect visible
          light and contribute to light pollution<sup>[13]</sup>. This means
          that on days with cloudier weather or denser clouds, the light
          pollution in cities can increase further by a factor of 10
          <sup>[14]</sup>.
        </Typography>
        <br />
        <Typography component="p" variant="p" fontSize={"22px"}>
          <b>What produces light pollution?</b>
        </Typography>
        <Typography component="p" variant="p">
          Light pollution comes from ignorance of poor lighting, which causes
          the spread of excessive or unwanted artificial light sources[7].
          Sources of light pollution include city lighting, such as, but not
          limited to, public and road lighting, lighting from buildings,
          particularly for commercial reasons, and vehicle headlights
          <sup>[14]</sup>. Since the invention of LEDS, which replaced older
          lighting technology due to their low cost, efficiency, and safety, the
          skies have become 7%-10% brighter each year<sup>[16]</sup>.
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
        <Typography
          component="h3"
          variant="h3"
          fontFamily={"Open Sans"}
          fontWeight={900}
          color={"#90caf9"}
        >
          What Can We Do?
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
          </Link>
          <sup>[4]</sup>, he discusses the stars and planets visible for each
          ranking on the scale as well as the telescope size required. This
          guide makes astronomy more accessible to many individuals, even under
          polluted skies.
        </Typography>
        <br />
        <Box component="img" src={bortleScale} width="80%" m="0 auto" />
        <Typography variant="subtitle2" textAlign={"center"}>
          Figure 6. A visual representation of the Bortle Scale used by both
          amateur and professional astronomers provided by Celestron
          <sup>[6]</sup>.
        </Typography>
        <br />
        <Box display={"flex"} gap={2}>
          <Box flex={1}>
            <Typography component="p" variant="p">
              Additionally, there has been research and development of equipment
              that aids, albeit to a limited extent, telescopes and cameras to
              view the galaxy in cities such as dew shields, eyepieces and light
              pollution filters<sup>[6]</sup>.
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="subtitle2" textAlign={"right"}>
              Figure 7. A side by side comparison of a lightly polluted sky with
              and without a filter by Peter Zelinka<sup>[29]</sup>. His{" "}
              <Link
                target="_blank"
                href="https://www.peterzelinka.com/blog/2019/8/light-pollution-filters-for-astrophotography"
              >
                blog
              </Link>{" "}
              showcases more filters and examples.
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
        <br />
        <Typography component="p" variant="p" fontSize={"22px"}>
          <b>What Cities are Doing!</b>
        </Typography>
        <SolutionsTabs />

        <br />
        <br />
        <br />
        <Typography
          component="h3"
          variant="h3"
          fontFamily={"Open Sans"}
          fontWeight={900}
          color={"#90caf9"}
        >
          The Bigger Picture and What’s Next
        </Typography>

        <blockquote class="otro-blockquote">
          For my part I know nothing with any certainty, but the sight of the
          stars makes me dream.
          <span>Vincent van Gogh</span>
        </blockquote>
        <Typography>
          The night sky has long revealed both the universe above and our
          decisions here on earth. From ancient humans who used stars as guides,
          through astronomers who seek answers from the stars, our relationship
          with the night sky has always mattered. But due to modern, artificial
          lighting, that relationship is being lost under artificial light.
          Light pollution isn't just an issue of how things look, it's a
          cultural, scientific, as well as environmental issue. As cities expand
          and energy consumption rises, it is increasingly difficult to see
          stars. But alternatives exist. By educating people, employing better
          illumination, and planning, cities can shine without blocking out the
          sky. <br></br>
          <br></br> The issue is: can we grow without diminishing our ability to
          appreciate how vast, old, and spectacular our world is? Or will we no
          longer see stars in 20 years<sup>[17]</sup>?
        </Typography>

        <br />
        <br />
        <br />
        <Typography
          component="h4"
          variant="h4"
          fontFamily={"Open Sans"}
          fontWeight={900}
        >
          References
        </Typography>
        <ol>
          <li>
            AMA (American Medical Association). “AMA Adopts Guidance to Reduce
            Harm from High Intensity Street Lights.” American Medical
            Association, 14 July 2016,
            www.ama-assn.org/press-center/press-releases/ama-adopts-guidance-reduce-harm-high-intensity-street-lights.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Arun, M., et al. “Internet of Things and Deep Learning-Enhanced
            Monitoring for Energy Efficiency in Older Buildings.” Case Studies
            in Thermal Engineering, vol. 61, 1 July 2024, pp. 104867–104867,
            https://doi.org/10.1016/j.csite.2024.104867. Accessed 15 Apr. 2025.
          </li>
          <li>
            Big Bend Dark Sky Reserve. “What Is Light Pollution?” Greater Big
            Bend International Dark Sky Reserve, 2023,
            www.bigbenddarkskyreserve.org/what-is-light-pollution. Accessed 13
            Apr. 2025.
          </li>
          <li>
            Bortle, John. “Light Pollution and Astronomy: How Dark Are Your
            Night Skies?” Sky & Telescope, 18 July 2006,
            skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Buck, Stephanie. “During a 1994 Blackout, L.A. Residents Called 911
            When They Saw the Milky Way for the First Time.” Timeline, 16 Feb.
            2017, medium.com/timeline/los-angeles-light-pollution-ebd60d5acd43.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            Celestron. “What Is Light Pollution and How Does It Affect Views
            through My Telesc | Celestron.” Www.celestron.com, 17 Feb. 2022,
            www.celestron.com/blogs/knowledgebase/what-is-light-pollution-and-how-does-it-affect-views-through-my-telescope.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Cokinos, Christopher. “How to Win the Fight against Light
            Pollution.” Astronomy Magazine, July 2024,
            www.astronomy.com/science/how-to-win-fight-against-light-pollution/.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            DarkSky. “Light Pollution Affects Human Health.” DarkSky
            International, 11 Sept. 2024,
            darksky.org/resources/what-is-light-pollution/effects/human-health/.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            Falchi, Fabio, et al. “The New World Atlas of Artificial Night Sky
            Brightness.” Science Advances, vol. 2, no. 6, 10 June 2016, p.
            e1600377, www.science.org/doi/10.1126/sciadv.1600377,
            https://doi.org/10.1126/sciadv.1600377. Accessed 11 Apr. 2025.
          </li>
          <li>
            Hänel, Andreas, et al. “Sustainable Outdoor Lighting for Reducing
            Energy and Light Waste.” Proceedings of the 9th International
            Conference Improving Energy Efficiency in Commercial Buildings and
            Smart Communities, IEECB & SC, Frankfurt, Germany, 2016, pp. 16–18,
            www.researchgate.net/profile/Lambros-Doulos/publication/316860637_Sustainable_outdoor_lighting_for_reducing_energy_and_light_waste/links/591497ff0f7e9b70f49c231b/Sustainable-outdoor-lighting-for-reducing-energy-and-light-waste.pdf.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            Hattenbach, Jan. “Light Pollution Is Creeping up on the World’s
            Observatories.” Sky & Telescope, 6 Jan. 2023,
            skyandtelescope.org/astronomy-news/light-pollution-is-creeping-up-on-worlds-observatories/.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Kafy, Abdulla -Al, et al. Importance of Surface Water Bodies for
            Sustainable Cities: A Case Study of Rajshahi City Corporation. 12
            Apr. 2025.
          </li>
          <li>
            Kokhanovsky, A. “Optical Properties of Terrestrial Clouds.”
            Earth-Science Reviews, vol. 64, no. 3-4, Feb. 2004, pp. 189–241,
            https://doi.org/10.1016/s0012-8252(03)00042-4. Accessed 13 Apr.
            2025.
          </li>
          <li>
            Le Tallec, Thomas. “What Is the Ecological Impact of Light
            Pollution? - Encyclopédie de L’environnement.” Encyclopaedia of the
            Environment, 17 Oct. 2016,
            www.encyclopedie-environnement.org/en/life/what-is-the-ecological-impact-of-light-pollution/.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            Lighting, Art & Science Pty Limited. MODIFICATION REPORT Australian
            Strategic Materials (Holdings) Ltd Dubbo Project Appendix 6. Mar.
            2022.
          </li>
          <li>
            Matson, Lilly. “Preserving the Stars: Light Pollution and What You
            Can Do about It.” UNSW, UNSW, 28 Mar. 2023,
            www.unsw.edu.au/newsroom/news/2023/03/preserving-the-stars--light-pollution-and-what-you-can-do-about-.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            McKie, Robin. “Stars Could Be Invisible within 20 Years as Light
            Pollution Brightens Night Skies.” The Observer, 27 May 2023,
            www.theguardian.com/science/2023/may/27/light-pollution-threatens-to-make-stars-invisible-within-20-years.
            Accessed 16 Apr. 2025.
          </li>
          <li>
            Nathanson, Jerry. “Light Pollution | Britannica.” Encyclopædia
            Britannica, 2020, www.britannica.com/science/light-pollution.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            National Geographic. “Light Pollution.”
            Education.nationalgeographic.org, National Geographic, 15 July 2022,
            education.nationalgeographic.org/resource/light-pollution/. Accessed
            13 Apr. 2025.
          </li>
          <li>
            NCEI (National Centers for Environmental Information). “Defense
            Meteorological Satellite Program (DMSP) | National Centers for
            Environmental Information (NCEI).” Noaa.gov, NOAA (National Oceanic
            and Atmospheric Administration), 2024,
            www.ncei.noaa.gov/products/satellite/defense-meteorological-satellite-program.
            Accessed 12 Apr. 2025.
          </li>
          <li>
            NESDIS (National Environmental Satellite, Data, and Information
            Service). “Defense Meteorological Satellite Program.” Noaa.gov, NOAA
            (National Oceanic and Atmospheric Administration), 2024,
            www.nesdis.noaa.gov/our-satellites/currently-flying/defense-meteorological-satellite-program#.
            Accessed 12 Apr. 2025.
          </li>
          <li>
            NSW Department of Planning and Environment. “Dark Sky Planning
            Guideline.”
            Https://Www.planning.nsw.gov.au/Sites/Default/Files/2023-06/Dark-Sky-Planning-Guideline-2023.Pdf,
            NSW Department of Planning and Environment, June 2023,
            www.planning.nsw.gov.au/sites/default/files/2023-06/dark-sky-planning-guideline-2023.pdf.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Rajkhowa, Rasna. “Light Pollution and Impact of Light Pollution.”
            International Journal of Science and Research (IJSR), vol. 3, no.
            10, Oct. 2014, pp. 861–867,
            d1wqtxts1xzle7.cloudfront.net/87472490/T0NUMTQyMTA_-libre.pdf?1655167711=&response-content-disposition=inline%3B+filename%3DLight_Pollution_and_Impact_of_Light_Poll.pdf&Expires=1744922539&Signature=DNABLEQ1cN9QaKXyAZJM5oBq6-tKpZIPSYalWOVwlBUM5j1S-1YjELtZGne3SUsl9-eOQrkjH2MblHjj8m64-DrVkjY~w6JsW45J3qQcE7W6brbz09jjhw7Y-sCrkhk~6juUeXY8xUcC75W5ZSjRG0Tta8byT-DZ9btwhU6CDJiNmzVOFrx7yTpPI1OIyoxTZVaJ1FLHkUOOP-PUAYmXpLSJoHMPnP78yQy5LuzvOGEkun1mPmoHFLwzFPfEFakN-YXDQr0-OvrEBO5E6xpsB-eL5xgJeS89hl2NC7Jd58BU5WfBgu5ePHJbu1kbU49t6awCeRboWP1nOpLZcm6bAw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA.
            Accessed 13 Apr. 2025.
          </li>
          <li>
            Sharkey, Joe. “Helping the Stars Take Back the Night.” The New York
            Times, 30 Aug. 2008,
            www.nytimes.com/2008/08/31/business/31essay.html. Accessed 13 Apr.
            2025.
          </li>
          <li>
            Troche, Kat. “February’s Night Sky Notes: How Can You Help Curb
            Light Pollution?” NASA Science, 7 Feb. 2025,
            science.nasa.gov/solar-system/skywatching/night-sky-network/februarys-night-sky-notes-how-can-you-help-curb-light-pollution/.
            Accessed 14 Apr. 2025.
          </li>
          <li>
            Viswanathan, Shekar, et al. “A Model for the Assessment of
            Energy-Efficient Smart Street Lighting—a Case Study.” Energy
            Efficiency, vol. 14, no. 6, 30 June 2021,
            link.springer.com/article/10.1007/s12053-021-09957-w#citeas,
            https://doi.org/10.1007/s12053-021-09957-w. Accessed 15 Apr. 2025.
          </li>
          <li>
            Weier, John. “Bright Lights, Big City.” Nasa.gov, NASA Earth
            Observatory, 19 Oct. 2000,
            earthobservatory.nasa.gov/features/Lights. Accessed 12 Apr. 2025.
          </li>
          <li>
            Weschler, PJ. “2000 Megacities.” Bluemarblecitizen.com, 2024,
            www.bluemarblecitizen.com/megacities/2000. Accessed 12 Apr. 2025.
          </li>
          <li>
            World Population Review. “Largest Cities by Population 2025.”
            Worldpopulationreview.com, 2025, worldpopulationreview.com/cities.
            Accessed 12 Apr. 2025.
          </li>
          <li>
            Zelinka, Peter. “Light Pollution Filters for Astrophotography.”
            Peter Zelinka Photography, 15 Aug. 2019,
            www.peterzelinka.com/blog/2019/8/light-pollution-filters-for-astrophotography.
            Accessed 15 Apr. 2025.
          </li>
        </ol>
      </Box>
    </ThemeProvider>
  );
}

export default App;
