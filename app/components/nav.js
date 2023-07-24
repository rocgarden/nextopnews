import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Shrikhand } from "next/font/google";
 const shrikhand = Shrikhand({ subsets: ["latin"], weight:['400'] });

export default function Links() {
  let links;
  links = (
    <>
      {
        <Toolbar
          sx={{
            borderRadius: 12,
            opacity: 0.8,
            mt: 1,
            mx: 3,
            textAlign: "center",
            flexDirection:"column"
          }}
        >
          <Typography
            className={shrikhand.className}
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: 100,
              flex: 1,
              background: "linear-gradient(to right bottom, #FFF600, #FFCF07)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: 3
            }}
          >
            NexTop News
          </Typography>
        
        </Toolbar>
      }
    </>
  );

  return <div>{links}</div>;
}
