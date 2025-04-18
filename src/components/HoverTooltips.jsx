import { Box, Typography } from "@mui/material";
import HoverToolTip from "./HoverToolTip";
import lightsNile from "../assets/lights-nile.png";
import lightsTokyo from "../assets/lights-tokyo.png";
import lightsAus from "../assets/lights-aus.png";
import lightsSahara from "../assets/lights-sahara.png";
import lightsAmazon from "../assets/lights-amazon.png";

const HoverTooltips = () => {
  return (
    <>
      <HoverToolTip
        top={"150px"}
        left={"575px"}
        width="40px"
        height="40px"
        content={
          <>
            <Typography variant="body2" fontWeight="bold">
              <b>Light Zones</b>
            </Typography>
            <Typography variant="caption">
              The Nile River has guided urban growth and is traced out by the
              urban lights.
            </Typography>
            <Box
              component="img"
              src={lightsNile}
              alt="Tooltip visual"
              height={200}
              mt={1}
              borderRadius={1}
            />
          </>
        }
      />
      <HoverToolTip
        top={"110px"}
        left={"845px"}
        width="65px"
        height="65px"
        content={
          <>
            <Typography variant="body2" fontWeight="bold">
              <b>Light Zones</b>
            </Typography>
            <Typography variant="caption">
              Tokyo was the largest city by population and density in the 2000s
              <sup>[27]</sup> and is shown in the size and brightness of the
              lights where Tokyo is.
            </Typography>
            <Box
              component="img"
              src={lightsTokyo}
              alt="Tooltip visual"
              height={200}
              mt={1}
              borderRadius={1}
            />
          </>
        }
      />

      <HoverToolTip
        top={"280px"}
        left={"810px"}
        width="105px"
        height="75px"
        content={
          <>
            <Typography variant="body2" fontWeight="bold">
              <b>Dark Zones</b>
            </Typography>
            <Typography variant="caption">
              Australia’s outback, with its scarce water sources and arid desert
              climate, is generally unsustainable for urban development.
            </Typography>
            <Box
              component="img"
              src={lightsAus}
              alt="Tooltip visual"
              height={200}
              mt={1}
              borderRadius={1}
            />
          </>
        }
      />

      <HoverToolTip
        top={"220px"}
        left={"275px"}
        width="105px"
        height="85px"
        content={
          <>
            <Typography variant="body2" fontWeight="bold">
              <b>Dark Zones</b>
            </Typography>
            <Typography variant="caption">
              The dense Amazon rainforests hinder large scale infrastructure.
            </Typography>
            <Box
              component="img"
              src={lightsAmazon}
              alt="Tooltip visual"
              height={200}
              mt={1}
              borderRadius={1}
            />
          </>
        }
      />

      <HoverToolTip
        top={"160px"}
        left={"455px"}
        width="115px"
        height="75px"
        content={
          <>
            <Typography variant="body2" fontWeight="bold">
              <b>Dark Zones</b>
            </Typography>
            <Typography variant="caption">
              Sahara’s desert is inhospitable and hinders large scale
              infrastructure.
            </Typography>
            <Box
              component="img"
              src={lightsSahara}
              alt="Tooltip visual"
              height={145}
              mt={1}
              borderRadius={1}
            />
          </>
        }
      />
    </>
  );
};

export default HoverTooltips;
