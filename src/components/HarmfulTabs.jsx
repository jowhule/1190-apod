import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const HarmfulTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Humans" />
          <Tab label="Wildlife" />
          <Tab label="Astronomy" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography component={"p"} variant={"p"}>
          Light pollution does more than hide our stars. Brighter night skies
          and exposure to bright LEDS confuse our circadian rhythm (our internal
          night/day clock) (National Geographic, 2022), and blue-rich LEDS have
          been found to suppress our nocturnal production of melatonin
          (Rajkhowa, 2014). Brighter residential areas have also been reported
          to have poorer sleep quality, reduced sleep times and obesity (AMA,
          2016).
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography component={"p"} variant={"p"}>
          Not just humans, but wildlife ecosystems have suffered consequences
          from light pollution as well. Many ecosystems also rely on the natural
          day and night cycle to navigate, feed and reproduce. Most affected are
          nocturnal animals, migratory birds and insects which depend on
          starlight to navigate at night. Our city lights are so bright that
          they wash out the stars, and birds and insects are drawn off course by
          them (Le Tallec, 2016). Birds have been reported to collide more often
          into lit buildings, and as some insects are extremely attracted to
          that same light, our cities have become optimal for spider propagation
          (Hänel et al., 2016).
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography component={"p"} variant={"p"}>
          Astronomy develops by detecting faint cosmic objects and requires a
          clear, dark sky. Bortle (2006) states, “Even a small amount of light
          pollution degrades diffuse objects such as comets, nebulae, and
          galaxies far more than stars.” Due to increasing light pollution,
          large observatories (in the Northern Hemisphere) can no longer view
          the faintest celestial objects (NSW Department of Planning and
          Environment, 2023). It was also reported that three-quarters of
          observatories have crossed the 10% limit of brighter natural light
          levels for light-polluted observatories (Hattenbach, 2023).
        </Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default HarmfulTabs;
