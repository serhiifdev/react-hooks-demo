import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppRouter from "./AppRouter";
import { StoreProvider } from "./store";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <StoreProvider>
      <CssBaseline />
      <div className={classes.root}>
        <AppRouter />
      </div>
    </StoreProvider>
  );
};

export default App;
