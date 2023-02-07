import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

import SignUp from "./components/SignUp";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route element={<PrivateRoutes token={true} />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
