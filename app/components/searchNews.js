"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SidebarNews from "./SidebarNews";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { Shrikhand } from "next/font/google";
const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

function SearchNews() {
  const [query, setQuery] = useState("");
  const [newsResults, setNewsResults] = useState([]);
  const [postsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const currentDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`api/news/search?query=${query}`, {
      cache: "no-store",
    });
    const news = await res.json();
    // console.log(news);
    setNewsResults(news.value);
    setQuery("");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsResults.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid container sx={{ marginTop: 8, justifyContent: "space-between" }}>
        <Grid sx={{}}>
          {" "}
          <Typography
            className={shrikhand.className}
            sx={{
              fontSize: 30,
              marginLeft: 5,
              color: "#FFCF07",
            }}
          >
            {currentDate}
          </Typography>
        </Grid>
        <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-search"
              label="Search other news"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton sx={{ color: "#FFCF07" }} type="submit">
              <SearchIcon />
            </IconButton>
          </form>
        </Grid>
      </Grid>
      {!newsResults ? null : newsResults.length === 0 ? (
        ""
      ) : (
        <>
          <Grid component="main" style={{ marginTop: 18 }}>
            {/* */}
            <Grid container spacing={3}>
              {/* {newsResults.map((item, id) => {
                  return (
                    <>
                      <SidebarNews item={item} key={id} />
                    </>
                  );
                })} */}
              {currentPosts.map((item, id) => {
                return (
                  <>
                    <SidebarNews item={item} key={id} />
                  </>
                );
              })}
            </Grid>
            <Grid style={{ marginTop: 7 }}>
              {" "}
              <Pagination
                page={currentPage}
                count={Math.ceil(newsResults.length / postsPerPage)}
                onChange={paginate}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
export default SearchNews;
  