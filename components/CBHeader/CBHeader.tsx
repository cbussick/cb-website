"use client";

import { getCBGradient } from "@/helpers/getCBGradient";
import { GitHub } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  buttonClasses,
  typographyClasses,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { cbContactInformation } from "../../data/cbContactInformation";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBLogo from "../CBLogo/CBLogo";
import { headerLinks } from "./headerLinkData";

const mobileMenuButtonStyles = (isInsideDrawer: boolean) => ({
  ".hamburger-react": {
    // Don't have the mobile menu icon blocked by the logo when it is absolutely positioned
    // on small viewports
    zIndex: 1,
    // Remove blue flashing when tapping the mobile menu icon
    // Note: This property is non-standard
    // See https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
    WebkitTapHighlightColor: "transparent",
    alignSelf: isInsideDrawer ? "flex-end" : undefined,
    marginTop: 1,
    marginRight: 1,
  },
});

function CBHeader(): JSX.Element {
  const theme = useTheme();

  const isPageScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: typeof window === "undefined" ? undefined : window,
  });

  const isMobileViewport = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const MobileMenuButton = (
    <Hamburger
      toggled={isMobileMenuOpen}
      toggle={setIsMobileMenuOpen}
      label={isMobileMenuOpen ? "Close menu" : "Show menu"}
      size={isSmallViewport ? 24 : 32}
      rounded
    />
  );

  const gitHubLink = cbContactInformation.gitHub;

  const GitHubLinkButton = isSmallViewport ? (
    <Link href={gitHubLink} target="_blank">
      <Button
        startIcon={<GitHub />}
        classes={{ startIcon: "link-icon" }}
        sx={{
          p: (t) => t.spacing(2),
          justifyContent: isMobileViewport ? "flex-start" : undefined,
        }}
      >
        <Typography variant="subtitle1" component="span" className="link-label">
          Me on GitHub
        </Typography>
      </Button>
    </Link>
  ) : (
    <Link href={gitHubLink} target="_blank">
      <IconButton
        sx={{
          transition: "0.2s",
          "&& .MuiTouchRipple-child": {
            color: (t) => t.palette.text.primary,
            opacity: 0.3,
          },
          "&:hover": {
            bgcolor: "transparent",
            color: (t) => t.palette.primary.main,
          },
        }}
      >
        <GitHub titleAccess="Me on GitHub" />
      </IconButton>
    </Link>
  );

  const headerElements: JSX.Element[] = headerLinks.map((link) => {
    const selector = link.id === "" ? undefined : `#${link.id}`;

    return (
      <Button
        key={link.id}
        href={selector}
        onClick={(e) => {
          scrollToElement(e, selector);
        }}
        startIcon={<link.icon />}
        sx={{
          p: (t) => t.spacing(2),
          justifyContent: isMobileViewport ? "flex-start" : undefined,
          pr: isMobileViewport ? (t) => t.spacing(5) : undefined,
          // This notation with alpha/opacity at the end is necessary to have a proper transition with a gradient on hover
          color: (t) => `${t.palette.text.primary}FF`,
          "&:hover": {
            bgcolor: "transparent",
            [`& .${buttonClasses.startIcon}`]: {
              color: (t) => t.palette.primary.main,
            },
            [`& .${typographyClasses.root}`]: {
              color: (t) => `${t.palette.text.primary}00`,
              background: getCBGradient(),
              backgroundClip: "text",
            },
          },
          [`& .${buttonClasses.startIcon}`]: {
            transition: "0.2s",
          },
          "&& .MuiTouchRipple-child": {
            opacity: 0.3,
          },
        }}
      >
        <Typography
          variant="subtitle1"
          component="span"
          sx={{
            transition: "0.2s",
            background: getCBGradient(),
            backgroundClip: "text",
          }}
        >
          {link.label}
        </Typography>
      </Button>
    );
  });

  return (
    <AppBar
      sx={{
        backgroundColor: (t) => t.palette.background.default,
        transition: "0.3s",
        boxShadow: isPageScrolled ? (t) => t.shadows[6] : "none",
        p: isPageScrolled
          ? undefined
          : (t) => `${t.spacing(1)} 0px ${t.spacing(2)} 0px`,
        ...mobileMenuButtonStyles(false),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar component="nav" disableGutters>
          {isMobileViewport ? (
            <>
              {MobileMenuButton}

              <CBLogo
                isMobileViewport={isMobileViewport}
                isSmallViewport={isSmallViewport}
              />

              {!isSmallViewport && GitHubLinkButton}
            </>
          ) : (
            <>
              <CBLogo
                isMobileViewport={isMobileViewport}
                isSmallViewport={isSmallViewport}
              />

              {headerElements}

              {GitHubLinkButton}
            </>
          )}
        </Toolbar>

        {isMobileViewport && (
          <Drawer
            open={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            sx={{ ...mobileMenuButtonStyles(true) }}
          >
            {MobileMenuButton}

            {headerElements}

            {isSmallViewport && GitHubLinkButton}
          </Drawer>
        )}
      </Container>
    </AppBar>
  );
}

export default CBHeader;
