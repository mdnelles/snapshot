import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Snap from "./views/Snapshot";
import Colors from "./views/Colors";

const App = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Snap} />
            <Route exact path="/colors" component={Colors} />
         </Switch>
      </Router>
   );
};
export default App;
