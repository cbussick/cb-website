import { Box, BoxProps, Grid2Props, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";
import CBCVCard from "../CBCard/CBCVCard";
import { CBStyledLink } from "../CBStyledLink/CBStyledLink";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { useCBSkillsetStyles } from "./CBSkillsetStyles";

const gridItemProps: Grid2Props = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 2,
  sx: { maxWidth: { xs: 300, sm: 1000 } },
};

const commonImageLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

const commonImageContainerProps: BoxProps = {
  position: "relative",
  width: "100%",
  height: 175,
};

function CBSkillset(): JSX.Element {
  const styles = useCBSkillsetStyles();

  return (
    <CBCVCard title={<CBTextGradient variant="h2">Skillset</CBTextGradient>}>
      <Typography sx={{ textAlign: "justify" }}>
        {`These are the technologies I am proficient with and which I `}

        <CBStyledLink
          href="https://en.wikipedia.org/wiki/Law_of_the_instrument"
          target="_blank"
        >
          usually
        </CBStyledLink>

        {` rely on when building projects. I am always interested in learning new
        stuff 🚀`}
      </Typography>

      <Grid2 container spacing={12} sx={styles.grid}>
        <Grid2 {...gridItemProps}>
          <Link href="https://reactjs.org/" {...commonImageLinkProps}>
            <Box {...commonImageContainerProps}>
              <Image src="/resources/react-logo.svg" alt="React Logo" fill />
            </Box>
          </Link>
        </Grid2>

        <Grid2 {...gridItemProps}>
          <Link
            href="https://www.typescriptlang.org/"
            {...commonImageLinkProps}
          >
            <Box {...commonImageContainerProps}>
              <Image
                src="/resources/typescript-logo.svg"
                alt="TypeScript Logo"
                fill
              />
            </Box>
          </Link>
        </Grid2>

        <Grid2 {...gridItemProps}>
          <Link href="https://www.unrealengine.com/" {...commonImageLinkProps}>
            <Box {...commonImageContainerProps}>
              <Image
                src="/resources/ue-logo.svg"
                alt="Unreal Engine Logo"
                fill
              />
            </Box>
          </Link>
        </Grid2>

        <Grid2 {...gridItemProps}>
          <Link href="https://www.meta.com/quest/" {...commonImageLinkProps}>
            <Box {...commonImageContainerProps}>
              <Image
                src="/resources/meta-quest-logo.svg"
                alt="Meta Quest Logo"
                fill
              />
            </Box>
          </Link>
        </Grid2>

        <Grid2 {...gridItemProps}>
          <Link
            href="https://www.adobe.com/products/photoshop.html"
            {...commonImageLinkProps}
          >
            <Box {...commonImageContainerProps}>
              <Image
                src="/resources/photoshop-logo.svg"
                alt="Photoshop Logo"
                fill
              />
            </Box>
          </Link>
        </Grid2>

        <Grid2 {...gridItemProps}>
          <Link
            href="https://www.adobe.com/products/illustrator.html"
            {...commonImageLinkProps}
          >
            <Box {...commonImageContainerProps}>
              <Image
                src="/resources/illustrator-logo.svg"
                alt="Illustrator Logo"
                fill
              />
            </Box>
          </Link>
        </Grid2>
      </Grid2>
    </CBCVCard>
  );
}

export default CBSkillset;
