import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PrivateRoutes from "./routes/PrivateRoutes";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Admin from "./pages/Admin";

import SignUp from "./components/SignUp";
import Layout from "./components/Layout";

const App = () => {
  const [accessUser, setAccessUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signin" element={ <SignIn setUser={setAccessUser} /> } />
            <Route path="signup" element={ <SignUp /> } />
            <Route element={ <PrivateRoutes token={accessUser?.token} /> }>
              <Route index element={ <Home /> } />
              <Route path="/account" element={ <Account user={accessUser} /> } />
              <Route path="/admin" element={ <Admin token={accessUser?.token} /> } />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
