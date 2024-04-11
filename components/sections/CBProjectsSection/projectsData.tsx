import { CBStyledLink } from "@/components/CBStyledLink/CBStyledLink";
import { Project, ProjectThumbnailType } from "../../../interfaces/Project";

const whWebsite = "https://www.w-hs.de/";

export const projects: Project[] = [
  {
    id: "vr-office-exercises",
    name: "VR Office Exercises",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: "/resources/vr-office-exercises-farm.png",
    url: "https://www.youtube.com/watch?v=L4YNOIWra-A",
    description: (
      <>
        {`Physical inactivity is a major cause of mortality worldwide. But
        motivating yourself to get up and exercise can often be hard. How about
        you put on a VR headset and do meaningful tasks in a virtual world while
        also doing exercise in the real world? For this reason I developed the
        VR Office Exercises as part of my bachelor thesis at the `}

        <CBStyledLink href={whWebsite} target="_blank">
          WH
        </CBStyledLink>

        {`. The player finds himself on a farm, helping an elderly farmer with
        harvesting and other tasks.`}
      </>
    ),
    techStack: ["Unreal Engine", "Blueprints", "Meta Quest 2"],
  },
  {
    id: "virtual-boxing-simulator",
    name: "Virtual Boxing Simulator",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: "/resources/vbs-logo.svg",
    url: "https://www.youtube.com/watch?v=3zIW1LwYYDQ",
    description: (
      <>
        {`A game simulating the sport of boxing in virtual reality. This project
        was made by our group of 6 students from the `}

        <CBStyledLink href={whWebsite} target="_blank">
          WH
        </CBStyledLink>

        {` as part of our respective curricula. It features a rhythm-based game
        mode with multiple difficulties, progress recording and character
        customization.`}
      </>
    ),
    techStack: ["Unreal Engine", "Blueprints", "Meta Quest"],
  },
  {
    id: "bpm-tapper",
    name: "BPM Tapper",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: "/resources/bpm-tapper.png",
    url: "https://cbussick.github.io/bpm-tapper",
    description: (
      <>
        {`A bpm tapper is a tool used in music production to figure out the tempo
        of a song, measured in beats per minute (bpm). The tool is usually part
        of a `}

        <CBStyledLink
          href="https://en.wikipedia.org/wiki/Digital_audio_workstation"
          target="_blank"
        >
          DAW
        </CBStyledLink>

        {`, installed on a computer. This project is meant to make the tool
        browser-based.`}
      </>
    ),
    techStack: ["React", "TypeScript", "Chakra UI"],
  },
  {
    id: "my-website",
    name: "My Website",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: "/resources/portfolio-website.png",
    description: (
      <>
        The website you are currently on! It serves as my digital portfolio 🚀
      </>
    ),
    techStack: ["React", "TypeScript", "Material UI"],
  },
];
