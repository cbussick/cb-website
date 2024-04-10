"use client";

import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { ___Component_Name___Props } from "./___componentName___Interfaces";

export const ___Component_Name___ =
  ({}: ___Component_Name___Props): JSX.Element => {
    const theme = useTheme();

    return (
      <Box sx={{ bgcolor: theme.palette.primary.main }}>
        <Typography sx={{ color: theme.palette.secondary.main }}>
          Hey ___Component_Name___ 🚀
        </Typography>
      </Box>
    );
  };
