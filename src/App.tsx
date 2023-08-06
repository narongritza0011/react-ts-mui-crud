import AppRouter from "../routes/AppRouter";
import NavBar from "./components/AppBar";

const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
