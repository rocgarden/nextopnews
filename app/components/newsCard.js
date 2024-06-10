import Link from "next/link";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from "next/image";

export default function NewsCard(props) {
  const { title, publisher, snippet, timestamp, newsUrl, img } =
    props;

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Card
        sx={{
          display: "flex",
          mb: 3,
          mx: 8,
          ":hover": {
            boxShadow: 10,
          },
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="caption" color="red">
             Latest News
          </Typography>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {publisher}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {timestamp}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {snippet}
          </Typography>
          <Link href={newsUrl} target="_blank">
            Read more →
          </Link>
        </CardContent>
        {img === null ? (
          <CardMedia
            sx={{
              position: "relative",
              width: 160,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src="/imgHolder.jpg"
              alt="image by Chester Wade on Unsplash"
              style={{ objectFit: "cover" }}
              fill
            />
          </CardMedia>
        ) : (
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={img}
            alt={title}
          />
       
        )}
      </Card>
    </Grid>
  );
}


  

