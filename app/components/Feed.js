"use client"
import NewsCard from "./newsCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Shrikhand } from "next/font/google";
import { useEffect, useState } from "react";
const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });



const NewsFeed = async () => {
  const [newsArray, setNewsArray] = useState([]);
    const capitalize = (word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    };
  
  async function fetchNews() {
    try {
      const response = await fetch("/api/news", {
        cache: "no-store",
      });
      const news = await response.json();
      console.log("news:: ", news);
      setNewsArray(news.results);
    } catch (error) {
      return new Error("no data returned");
    }
  }
  var newsArr = [];
  const getNews = () => {
        fetchNews().then((data) => {
          console.log(data);
      for (var i = 0; i < data.length; i++) {
        var title = data[i].title;
        var content = data[i].content;
        var creator = data[i].creator;
        var description = data[i].description;
        var pubDate = new Date(data[i].pubDate).toString().slice(0, 15);
        var link = data[i].link;
        var img = data[i].image_url;
        var category = capitalize(data[i].category.toString());

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
         // setNewsArray(newsArr);
          console.log("newsObj: ",newsArray)
    })

  }

 useEffect(() => {
   getNews();
 }, []);
  
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
          {
            !newsArray ? null : newsArray.length === 0 ? (
              <Grid>Loading</Grid>
            ) : (
              newsArr.map((item, id) => {
                <h4>{item.title}</h4>;
              })
            )
            //     (
            //   newsArr.map((item, id) => {
            //   return (
            //     <NewsCard
            //       key={id}
            //       title={item.title}
            //       creator={item.creator}
            //       description={item.description}
            //       pubDate={item.pubDate}
            //       category={item.category}
            //       img={item.img}
            //       link={item.link}
            //     />
            //   );
            // }))
          }
        </Grid>
      </Grid>
    </>
  );
};

export default NewsFeed;

    