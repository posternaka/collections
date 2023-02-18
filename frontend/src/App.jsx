import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PrivateRoutes from "./routes/PrivateRoutes";
import { Account, Admin, Home, Item, SignIn } from './pages/index';
import { EditCollection, EditItem, Layout, SignUp } from './components/index';

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
              <Route path="/account" element={ <Account user={ accessUser } /> } />
              <Route path="/item" element={ <Item />} />
              <Route path="/edit_item" element={ <EditItem />} />
              <Route path="/edit_collection" element={ <EditCollection userId={ accessUser?.id } />} />
              <Route path="/admin" element={ <Admin token={ accessUser?.token } /> } />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
