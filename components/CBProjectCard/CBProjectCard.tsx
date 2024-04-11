import { DoubleArrow } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ReactPlayer from "react-player";
import { ProjectThumbnailType } from "../../interfaces/Project";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBProjectCardProps } from "./CBProjectCardInterfaces";
import { useCBProjectCardStyles } from "./CBProjectCardStyles";

function CBProjectCard(props: CBProjectCardProps): JSX.Element {
  const { project } = props;
  const styles = useCBProjectCardStyles();

  const cardMedia = project.thumbnailType !== ProjectThumbnailType.None && (
    <CardMedia
      component={
        project.thumbnailType === ProjectThumbnailType.Image
          ? "img"
          : ReactPlayer
      }
      image={
        project.thumbnailType === ProjectThumbnailType.Image
          ? project.thumbnail
          : undefined
      }
      alt={
        project.thumbnailType === ProjectThumbnailType.Image
          ? project.name
          : undefined
      }
      url={
        project.thumbnailType === ProjectThumbnailType.Video
          ? project.url
          : undefined
      }
      controls={
        project.thumbnailType === ProjectThumbnailType.Video ? true : undefined
      }
      sx={styles.cardMedia}
    />
  );

  const headerAndContentAndActions: JSX.Element = (
    <>
      <CardHeader
        title={
          project.url ? (
            <Link href={project.url || ""} target="_blank" rel="noreferrer">
              {project.name}
            </Link>
          ) : (
            project.name
          )
        }
        titleTypographyProps={{
          variant: "h3",
          component: CBTextGradient,
          // Necessary because the `fontWeight` from the `CBTextGradient` is ignored here for whatever reason
          fontWeight: 600,
          display: "flex",
          sx: styles.cardTitleTypography,
        }}
        subheader={<>Tech Stack: {project.techStack.join(", ")}</>}
        subheaderTypographyProps={{
          variant: "caption",
          sx: styles.cardSubHeaderTypography,
        }}
        sx={styles.cardHeader}
      />

      <Divider sx={styles.divider} />

      {cardMedia}

      <CardContent sx={styles.cardContent}>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ textAlign: "justify" }}
        >
          {project.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing sx={styles.cardActions}>
        {project.url && (
          <Link href={project.url} target="_blank">
            <Button
              variant="contained"
              aria-label="go to the project"
              endIcon={<DoubleArrow />}
            >
              <Typography variant="body2">Take me to the project!</Typography>
            </Button>
          </Link>
        )}
      </CardActions>
    </>
  );

  return (
    <Card sx={styles.card} component={Stack} spacing={5}>
      {headerAndContentAndActions}
    </Card>
  );
}

export default CBProjectCard;
