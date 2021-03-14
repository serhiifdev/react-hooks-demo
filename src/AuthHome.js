import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLogoutHandler, useUsername } from "./hooks";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AuthHome = () => {
  const classes = useStyles();
  const userName = useUsername();
  const logoutHandler = useLogoutHandler();

  return (
    <div className={classes.root}>
      <div>
        <Typography>Hi, {userName}</Typography>

        <Button onClick={logoutHandler} variant="contained">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AuthHome;
