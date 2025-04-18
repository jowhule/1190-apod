import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

const CustomTooltipContent = ({ content }) => <Box p={1}>{content}</Box>;

const HoverToolTip = ({
  height = 200,
  width = 200,
  top = 0,
  left = 0,
  content,
}) => {
  return (
    <Tooltip
      title={<CustomTooltipContent content={content} />}
      arrow
      placement="top"
    >
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
        backgroundColor={"transparent"}
      ></Box>
    </Tooltip>
  );
};

export default HoverToolTip;
