import { Card, CardHeader, Stack } from "@mui/material";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBCVCardProps } from "./CBCVCardInterfaces";
import { useCBCVCardStyles } from "./CBCVCardStyles";

/**
 * A simple wrapper which allows reusing the styling for all cards inside the CV section.
 */
function CBCVCard({ title, children }: CBCVCardProps): JSX.Element {
  const styles = useCBCVCardStyles();

  return (
    <Card component={Stack} spacing={5}>
      <CardHeader
        title={<CBTextGradient variant="h2">{title}</CBTextGradient>}
        sx={styles.cardHeader}
      />

      {children}
    </Card>
  );
}

export default CBCVCard;
