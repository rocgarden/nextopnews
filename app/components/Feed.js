import NewsCard from "./newsCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Shrikhand } from "next/font/google";
const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

async function fetchNews() {
  try {
  const response = await fetch(process.env.GET_NEWS + "/api/news", {
    next: { revalidate: 1 }
  }
  );
  const news = await response.json();
  return news;
  } catch (error) {
    return new Error("no data returned");
}

}

const NewsFeed = async () => {
    const capitalize = (word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    };

  try {
    const news = await fetchNews();
    var newsArr = [];
    for (var i = 0; i < news.results.length; i++) {
      var title = news.results[i].title;
      var content = news.results[i].content;
      var creator = news.results[i].creator;
      var description = news.results[i].description;
      var pubDate = new Date(news.results[i].pubDate).toString().slice(0, 15);
      var link = news.results[i].link;
      var img = news.results[i].image_url;
      var category = capitalize(news.results[i].category.toString());

      var newsObj = {
        title: title,
        content: content,
        creator: creator,
        description: description,
        pubDate: pubDate,
        link: link,
        img: img,
        category: category,
      };
      newsArr.push(newsObj);
    }
  } catch (error) {
    console.log(error)
  }
  
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
            {newsArr.map((item, id) => {
            return (
              <NewsCard
                title={item.title}
                creator={item.creator}
                description={item.description}
                pubDate={item.pubDate}
                category={item.category}
                img={item.img}
                link={item.link}
              />
            )
          })}
            
        </Grid>
      </Grid>
    </>
  );
};

export default NewsFeed;

    