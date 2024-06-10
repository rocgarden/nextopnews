import NewsCard from "./newsCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Shrikhand } from "next/font/google";
const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

  async function fetchNews() {
    try {
      const response = await fetch(`${process.env.GET_NEWS}/api/news`,
        {
          cache: "no-store",
        }
      );
      const news =  response.json();
       return news;
    } catch (error) {
      return new Error("no data returned");
    }
  }
async function NewsFeed() {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  };

  var newsArr = [];
  try {
    const data = await fetchNews();
    // .then((data) => {
    console.log("length", data);
    for (var i = 0; i < 11; i++) {
      var title = data.items[i].title;
      var content = data.items[i].content;
      var publisher = data.items[i].publisher;
      var snippet = data.items[i].snippet;
      var timestamp = new Date(data.items[i].timestamp).toString().slice(0, 15);
      var newsUrl = data.items[i].newsUrl;
      var img = data.items[i].images.thumbnail;
      // var category = capitalize(data.results[i].category.toString());

      var newsObj = {
        title: title,
        content: content,
        publisher: publisher,
        snippet: snippet,
        timestamp: timestamp,
        newsUrl: newsUrl,
        img: img,
      };
      newsArr.push(newsObj);
    }
    // )
  } catch (error) {
    console.log(error);
  }
  //  }
  return (
    <>
      <Grid
        item
        sx={{ justifyContent: "center", alignItems: "center", marginTop: 3 }}
      >
        <Grid
          item
          sx={{ textAlign: "center", display: { xs: "none", sm: "block" } }}
        >
          <Typography
            color="textSecondary"
            variant="h5"
            component="h2"
            gutterBottom={true}
          >
            <Typography variant="h5" component="span">
              Trending
            </Typography>{" "}
            <Typography
              className={shrikhand.className}
              fontWeight="bold"
              color="#FFF600"
              variant="h2"
              component="span"
            >
              News
            </Typography>{" "}
            <Typography variant="h5" component="span">
              around the country
            </Typography>
          </Typography>
        </Grid>

        <Grid sx={{ marginTop: 7 }}>
          {newsArr.map((item, index) => {
            return (
              <NewsCard
                key={index}
                title={item.title}
                publisher={item.publisher}
                snippet={item.snippet}
                timestamp={item.timestamp}
                img={item.img}
                newsUrl={item.newsUrl} />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default NewsFeed;

    