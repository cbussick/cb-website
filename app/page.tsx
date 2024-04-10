"use client";

import CBHeader from "@/components/CBHeader/CBHeader";
import CBCVSection from "@/components/sections/CBCVSection/CBCVSection";
import CBContactSection from "@/components/sections/CBContactSection/CBContactSection";
import CBHomeSection from "@/components/sections/CBHomeSection/CBHomeSection";
import CBProjectsSection from "@/components/sections/CBProjectsSection/CBProjectsSection";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <CBHeader />

      <Container maxWidth={false} component="main" disableGutters>
        <CBHomeSection />

        <CBProjectsSection />

        <CBCVSection />

        <CBContactSection />
      </Container>
    </Container>
  );
}
