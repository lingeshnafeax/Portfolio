import AppContainer from "./AppContainer";
import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";
import PageLoading from "./components/PageLoading";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<AppContainer></AppContainer>}></Route>
      </Routes>
      <PageLoading></PageLoading>
    </Fragment>
  );
}

export default App;
