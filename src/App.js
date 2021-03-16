import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import localForage from "localforage";

import Snap from "./views/Snapshot";
import Colors from "./views/Colors";

const App = () => {
   return (
      <>
         <Route exact path="/" component={Snap} />
         <Route exact path="/colors" component={Colors} />
      </>
   );
};
export default App;
