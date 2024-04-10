import { Typography } from "@mui/material";
import { CVBulletPointProps } from "./CVBulletPointInterfaces";

function CVBulletPoint({
  title,
  caption,
  startDate,
  endDate,
}: CVBulletPointProps): JSX.Element {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <Typography variant="body2">{caption}</Typography>

      <Typography variant="subtitle1" component="p">
        {`${startDate} - ${endDate}`}
      </Typography>
    </>
  );
}

export default CVBulletPoint;
