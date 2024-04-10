import { CardContent } from "@mui/material";
import CBCVCard from "../CBCard/CBCVCard";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import CBTimeline from "../CBTimeline/CBTimeline";
import { CBCVTimelineCardProps } from "./CBCVTimelineCardInterfaces";
import { useCBCVTimelineCardStyles } from "./CBCVTimelineCardStyles";

function CBCVTimelineCard({
  title,
  bulletPoints,
}: CBCVTimelineCardProps): JSX.Element {
  const styles = useCBCVTimelineCardStyles();

  return (
    <CBCVCard title={<CBTextGradient variant="h2">{title}</CBTextGradient>}>
      <CardContent sx={styles.cardContent}>
        <CBTimeline bulletPoints={bulletPoints} />
      </CardContent>
    </CBCVCard>
  );
}

export default CBCVTimelineCard;
