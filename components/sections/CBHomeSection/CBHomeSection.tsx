"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

function CBHomeSection(): JSX.Element {
  const theme = useTheme();

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

        <Link
          href="https://en.wikipedia.org/wiki/Virtual_reality"
          target="_blank"
        >
          VR
        </Link>

        {" and study "}

        <Link
          href="https://www.w-hs.de/medieninformatik-ge-master/"
          target="_blank"
        >
          media in&shy;for&shy;ma&shy;tics
        </Link>

        {" at the "}

        <Link href="https://www.w-hs.de/" target="_blank">
          WH
        </Link>

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
        spacing={2}
        alignSelf="center"
        component={motion.figure}
        {...getDefaultAnimation(0.6)}
      >
        <Image
          src="/resources/me-and-bruno.jpg"
          alt="Me and Bruno"
          width={650}
          height={400}
          style={{
            maxWidth: "100%",
            boxShadow: theme.shadows[10],
          }}
        />

        <Typography variant="caption" component="figcaption">
          Me and Bruno :)
        </Typography>
      </Stack>
    </CBSectionContainer>
  );
}

export default CBHomeSection;
