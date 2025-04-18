import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import buildingLight from "../assets/building-light.png";
import upwardSpill from "../assets/upward-spill.png";

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

const SolutionsTabs = () => {
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
          <Tab label="Eliminating upward spill light" />
          <Tab
            label="Smart Lighting Technology
"
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography component={"p"} variant={"p"}>
          Upward spill light is the main contributor to skyflow when light
          travels above the horizontal plane of its source (NSW Department of
          Planning and Environment, 2023). There are already prioritisations of
          light attachments under building elements and designs for light
          fixtures, which direct light downward where necessary. Downlighting is
          achieved with solid, opaque tops angled to block light from shining
          above the horizontal plane and mitigate light trespass.
        </Typography>
        <Box display={"flex"} gap={2}>
          <Box flex={2}>
            <Box component={"img"} src={upwardSpill} width={"100%"} />
            <Typography variant="subtitle2">
              Figure 8. Graphic of worst (left) lighting fixtures to best
              (right) in mitigating light pollution (NSW Department of Planning
              and Environment, 2023).
            </Typography>
          </Box>
          <Box flex={1}>
            <Box component={"img"} src={buildingLight} width={"100%"} />
            <Typography variant="subtitle2">
              Figure 9. A graphical example of light fixtures underneath
              building elements (NSW Department of Planning and Environment,
              2023)
            </Typography>
          </Box>
        </Box>
        <br />
        <Typography fontSize={"19px"}>
          <b>Effectiveness:</b>
        </Typography>
        <Typography>
          Shielded lighting is moderately effective at reducing light pollution.
          The advantage to this method is that it doesn’t require people to
          change their behaviour, and does not compromise functionality and
          safety. This is supported by a 2016 and 2017 study in Tucson, Arizona,
          involving replacing 90% of street lights with downward-facing
          fixtures. The results showcased a 7% drop in overall light pollution
          (Troche, 2025). More importantly, a follow-up showed no increase in
          crime or traffic accidents, and no public complaints were received
          (Cokinos, 2024).
        </Typography>
        <br />
        <Typography fontSize={"19px"}>
          <b>Challenges:</b>
        </Typography>
        <Typography>
          Directing light downward helps reduce skyglow, but does not fully
          eliminate environmental impact. Many nocturnal ecosystems are still
          affected by artificial light at night, especially land animals (AMA,
          2016).
        </Typography>
        <br />
        <Typography>
          Shielded lighting is a solid first step in reducing skyglow, but it
          works best alongside solutions like smart lighting. With improved
          design standards and increased monetary support for fixture upgrades,
          a clearer night sky could soon be within reach.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography component={"p"} variant={"p"}>
          Smart lighting technology allows us to adjust light according to
          movement, time of day, and activity levels. They ensure that lights
          are on only when it is necessary. Examples include, but are not
          limited to: motion-sensor lights, dimmable streetlamps, as well as
          programmable timers that control brightness on a set schedule.
        </Typography>
        <br />
        <Typography fontSize={"19px"}>
          <b>Effectiveness:</b>
        </Typography>
        <Typography>
          There aren't many studies indicating that smart lighting can diminish
          light pollution, perhaps due to differences in how astronomers and
          engineers measure light (Lighting, Art & Science Pty Limited, 2022).
          However, it should be clear that reducing artificial light will
          provide a cleaner night sky as lighting consumes 25% of the world's
          energy, with nearly 19% used by artificial light directed into the sky
          as light pollution (Rajkhowa, 2014). This energy generation also
          produces greenhouse gases, exacerbating climate change. Smart lights
          also consume a much lower amount of power, offering a long-term
          cost-effective incentive for individuals and governments to adopt
          (Viswanathan, 2021).
        </Typography>
        <br />{" "}
        <Typography fontSize={"19px"}>
          <b>Challenges:</b>
        </Typography>
        <Typography>
          Smart lighting is very costly and older existing systems lack the
          necessary infrastructure for wireless connectivity, meaning entire
          fixtures may need replacing. Additionally, varying standards and
          configurations of outdated setups also pose a challenge (Arun, 2024).
        </Typography>
        <br />
        <Typography>
          As smart lighting tech evolves, integration with environmental data
          will further assist in determining if a balance can be struck, finding
          light levels that are safe and functional for humans, while also being
          beneficial to nocturnal wildlife.
        </Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default SolutionsTabs;
