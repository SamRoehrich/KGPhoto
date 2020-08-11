import { Button } from "@material-ui/core";
import AboutMe from "../components/AboutMe";
import { makeStyles } from "@material-ui/styles";
import { useGalleryState } from "../components/Gallery/GalleryContext";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Theme from "../components/Theme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const AboutPage = ({ text, theme }) => {
  const classes = useStyles();
  const { dispatch } = useGalleryState();
  const [id, setId] = useState(0);

  useEffect(() => {
    dispatch({ type: "about-page" });
  }, [id]);

  return (
    <Theme theme={theme}>
      <Layout>
        <div className={classes.root}>
          <AboutMe text={text[0]} />
          <Button>
            <a href="mailto:kyle@kgphoto.com">Contact me</a>
          </Button>
        </div>
      </Layout>
    </Theme>
  );
};
export default AboutPage;

export async function getStaticProps() {
  const textFromApi = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/about"
  );
  const text = await textFromApi.json();
  const apiTheme = await fetch(
    "https://kyle-garrett-photo-server.herokuapp.com/theme"
  );
  const jsonTheme = await apiTheme.json();
  const theme = buildTheme(jsonTheme);

  return {
    props: {
      text,
      theme,
    },
  };
}
