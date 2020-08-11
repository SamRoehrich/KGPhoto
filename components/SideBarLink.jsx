import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    borderRadius: 0,
    // marginBottom: 15,
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.main,
      transition: ".25s",
    },
  },
  active: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
    transition: ".75s",
    borderRadius: 0,
  },
}));

const SideBarLink = ({ text, href }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Link href={`/${href}`}>
      <Button
        className={
          router.pathname === `/${href}` ? classes.active : classes.root
        }
      >
        {text}
      </Button>
    </Link>
  );
};
export default SideBarLink;
