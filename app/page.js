import Image from 'next/image'
import { Container, Box, Grid } from '@mui/material'
import Feed from './components/Feed';
import SearchNews from './components/searchNews';
export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Grid  item sx={{justifyContent:"flex-end"}}>
          <SearchNews />
          <Feed />
        </Grid>
      </Box>
    </Container>
  );
}
