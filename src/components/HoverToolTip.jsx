import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const CustomTooltipContent = () => (
  <Box p={1}>
    <Typography variant="body2" fontWeight="bold">
      Fun Fact
    </Typography>
    <Typography variant="caption">
      This is a cool place with amazing history.
    </Typography>
    <Box
      component="img"
      src="/path/to/tooltip-image.jpg"
      alt="Tooltip visual"
      width={100}
      mt={1}
      borderRadius={1}
    />
  </Box>
);

const HoverToolTip = ({ height = 200, width = 200, top = 0, left = 0 }) => {
  return (
    <Tooltip title={<CustomTooltipContent />} arrow placement="top">
      <Box
        width={width}
        height={height}
        left={left}
        top={top}
        position="absolute"
        border="grey 2px solid"
        borderRadius={"10px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer" }}
      ></Box>
    </Tooltip>
  );
};

export default HoverToolTip;
