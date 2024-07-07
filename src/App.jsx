import AppContainer from "./AppContainer";
import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AppContainer></AppContainer>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
