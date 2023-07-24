// import './globals.css'
import Nav from './components/nav';

export const metadata = {
  title: 'Current News App',
  description: 'Trending News from around the country.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFFDD0" }}>
        {" "}
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
