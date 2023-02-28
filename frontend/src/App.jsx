import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PrivateRoutes from "./routes/PrivateRoutes";
import Layout from "./routes/Layout";
import { Profile, Collection, Admin, Home, Item, SignIn, SignUp, AddCollection, AddItem } from './pages/index';

const App = () => {
  const [accessUser, setAccessUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout user={ accessUser } />}>
            <Route index element={ <Home user={ accessUser } /> } />
            <Route path="signin" element={ <SignIn setUser={ setAccessUser } /> } />
            <Route path="signup" element={ <SignUp /> } />
            <Route element={ <PrivateRoutes token={ accessUser?.token } /> }>
              <Route path="/profile" element={ <Profile user={ accessUser } /> } />
              <Route path="/collection/:id" element={ <Collection username={accessUser?.username} />} />
              <Route path="/item/:id" element={ <Item user={accessUser} />} />
              <Route path="/add_item" element={ <AddItem />} />
              <Route path="/add_collection" element={ <AddCollection userId={ accessUser?.id } />} />
              <Route path="/admin" element={ <Admin token={ accessUser?.token } /> } />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
