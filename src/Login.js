import { Button, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useInput, useLoginHandler } from "./hooks";

const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: 300,
    padding: 16,
  },
  buttonsGroup: {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
});

const Login = () => {
  const classes = useStyles();
  const loginHandler = useLoginHandler();
  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const submitHandler = (event) => {
    event.preventDefault();

    loginHandler(username, password);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.formContainer}>
        <form onSubmit={submitHandler}>
          <TextField
            value={username}
            onChange={setUsername}
            label="Username"
            fullWidth={true}
          />
          <TextField
            value={password}
            onChange={setPassword}
            type="password"
            label="Password"
            fullWidth={true}
          />
          <div className={classes.buttonsGroup}>
            <Link to="/" className={classes.link}>
              <Button variant="contained">Back</Button>
            </Link>

            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
