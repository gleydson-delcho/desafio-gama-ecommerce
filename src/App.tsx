import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountDownProvider from "./contexts/CountDownContext";
import Home from "./pages/Home";


function App() {
  return (
    <CountDownProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </CountDownProvider>
  );
}

export default App;
