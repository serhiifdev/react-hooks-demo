import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography>Home page</Typography>

        <Link to="login" className={classes.link}>
          <Button variant="contained">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
