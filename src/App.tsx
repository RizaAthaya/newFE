import React, { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import LoadingPage from "./pages/LoadingPage";

//Route
import AuthRoute from "./routes/AuthRoute";

//context
import {
  TagCostProvider,
  TagCountriesProvider,
  TagLevelProvider,
} from "./context/TagProvider";
import { FormProvider } from "./context/FormProvider";

function App() {
  return (
    <FormProvider>
      <TagCostProvider>
        <TagCountriesProvider>
          <TagLevelProvider>
            <div className="App">
              <Routes>
                <Route element={<SuspenseWrapper />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/project" element={<Project/>} />

                  <Route element={<AuthRoute />}></Route>
                </Route>
              </Routes>
            </div>
          </TagLevelProvider>
        </TagCountriesProvider>
      </TagCostProvider>
    </FormProvider>
  );
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Outlet />
    </React.Suspense>
  );
};

const Home = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/Home")), 1500);
  });
});


const Team = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/Team")), 1500);
  });
});


const Project = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/Project")), 1500);
  });
});

export default App;
