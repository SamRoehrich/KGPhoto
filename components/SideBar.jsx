import SideBarLink from "./SideBarLink";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useFetchUser } from "../utils/user";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    height: "85vh",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useFetchUser();

  function handleDeployClick() {
    confirm(
      "This will deploy all the changes you have made. All unsaved changes will be lost. Are you sure you want to continue?"
    );
    fetch(
      "https://api.vercel.com/v1/integrations/deploy/QmQjrzkeZGww9ny68yjvxdWxvoNbofwsGh73jwprcDJa6B/6nrbnHyVN1",
      {
        method: "POST",
      }
    );
    alert(
      "Deploy has started. Wait about 2 minutes for changes to be displayed on the site."
    );
  }

  return router.pathname.includes("admin") ? (
    user && (
      <div className={classes.root}>
        <SideBarLink text="Home" href="admin" />
        <SideBarLink text="Upload an Image" href="admin/upload-photo" />
        <SideBarLink text="Manage Photos" href="admin/manage-photos" />
        <SideBarLink text="Edit Theme" href="admin/edit-theme" />
        <Button onClick={() => handleDeployClick()}>Deploy Changes</Button>
        <Link href="/api/logout">
          <a>Logout</a>
        </Link>
      </div>
    )
  ) : (
    <div className={classes.root}>
      <SideBarLink text="Home" href="" />
      <SideBarLink text="Climbing" href="climbing" />
      <SideBarLink text="Not Climbing" href="notclimbing" />
      <SideBarLink text="Portraits" href="portraits" />
      <SideBarLink text="About" href="about" />
    </div>
  );
};
export default SideBar;
