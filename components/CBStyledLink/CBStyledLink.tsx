"use client";

import { Box, useTheme } from "@mui/material";
import Link from "next/link";
import { CBStyledLinkProps } from "./CBStyledLinkInterfaces";

export const CBStyledLink = (props: CBStyledLinkProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component={Link}
      sx={{
        color: theme.palette.text.primary,
        textDecoration: "none",
        transition: "0.3",
        background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, ${theme.palette.primary.light} 71%, ${theme.palette.primary.light} 94%, rgba(255,255,255,0) 100%)`,
        "&:hover": {
          color: theme.palette.primary.contrastText,
          background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${theme.palette.primary.light} 6%, ${theme.palette.primary.light} 94%, rgba(255,255,255,0) 100%)`,
        },
      }}
      {...props}
    />
  );
};
