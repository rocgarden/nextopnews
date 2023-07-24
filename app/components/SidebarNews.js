"use client"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function SidebarNews({item}) {
    const formatDate = (s) =>
        new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

    return (
      <Grid item xs={12} sm={6} md={4}>
        <List
          sx={{  bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {formatDate(item.datePublished)}
                  </Typography>
                  <Grid> {item.description}</Grid>
                  <Grid
                    style={{
                      color: "#555",
                      fontWeight: "bold",
                      fontSize: "80%",
                      display: "flex",
                    }}
                  >
                    <ListItemAvatar>
                      {item.provider[0].image?.thumbnail && (
                        <Avatar
                          alt={item.name}
                          src={
                            item.provider[0].image.thumbnail.contentUrl +
                            "&w=16&h=16"
                          }
                          sx={{ width: 30, height: 30 }}
                        />
                      )}
                    </ListItemAvatar>
                    <Grid style={{ marginTop: "1em" }}>
                      {" "}
                      {item.provider[0].name}
                    </Grid>
                  </Grid>
                </>
              }
            />
          </ListItem>
          <Grid style={{marginleft:"3em"}}>
            <Link href={item.url} target="_blank">
              Go to story →
            </Link>
          </Grid>
        </List>
      </Grid>
    );
}