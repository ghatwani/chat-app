import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import Loader from "./components/dialogs/Loader";

const Home = lazy(() => import("./components/pages/Home"));
const Login = lazy(() => import("./components/pages/Login"));

const user = true;
function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
