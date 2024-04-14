"use client";

import { CBStyledLink } from "@/components/CBStyledLink/CBStyledLink";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

function CBHomeSection(): JSX.Element {
  const theme = useTheme();
  const isMobileViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const { firstName } = cbContactInformation;

  return (
    <CBSectionContainer section={Section.Home}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimation()}
      >
        <CBTextGradient variant="h1">Welcome!</CBTextGradient>
      </Typography>

      <Typography
        sx={{ textAlign: "justify" }}
        component={motion.div}
        {...getDefaultAnimation(0.3)}
      >
        {`Hi, I'm ${firstName} 👋`}

        <br />

        {`I do software development for both the web and `}

        <CBStyledLink
          href="https://en.wikipedia.org/wiki/Virtual_reality"
          target="_blank"
        >
          VR
        </CBStyledLink>

        {" and study "}

        <CBStyledLink
          href="https://www.w-hs.de/medieninformatik-ge-master/"
          target="_blank"
        >
          media in&shy;for&shy;ma&shy;tics
        </CBStyledLink>

        {" at the "}

        <CBStyledLink href="https://www.w-hs.de/" target="_blank">
          WH
        </CBStyledLink>

        {`
        in Gelsenkirchen, Germany 🇩🇪. Besides all
        things related to computer science, I also enjoy sports, music
        production, manga and anime.`}

        <br />

        {`To learn more about me, you can scroll down or use the links at the top
        of the page.
        `}
      </Typography>

      <Stack
        spacing={1}
        width="100%"
        alignItems="center"
        component={motion.figure}
        {...getDefaultAnimation(0.6)}
      >
        <Box
          width={isMobileViewport ? "100%" : 600}
          height={450}
          position="relative"
        >
          <Image
            src="/resources/me-and-bruno.jpg"
            alt="Me and Bruno"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              boxShadow: theme.shadows[10],
            }}
          />
        </Box>

        <Typography variant="caption" component="figcaption">
          Me and Bruno :)
        </Typography>
      </Stack>
    </CBSectionContainer>
  );
}

export default CBHomeSection;
