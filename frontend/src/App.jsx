import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import Layout from "./routes/Layout";
import { Profile, Collection, Admin, Home, Item, SignIn, SignUp, AddCollection, AddItem, EditAdmin, NotFound } from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Home /> } />
            <Route path="signin" element={ <SignIn /> } />
            <Route path="signup" element={ <SignUp /> } />
            <Route path="*" element={ <NotFound /> } />
            <Route element={ <PrivateRoute /> }>
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/collection/:id" element={ <Collection  />} />
              <Route path="/item/:id" element={ <Item />} />
              <Route path="/add_item" element={ <AddItem />} />
              <Route path="/add_collection" element={ <AddCollection />} />
              {/* <Route path="/edit_admin/:id" element={ <EditAdmin token={ accessUser?.token } isAdmin={isAdmin} /> } /> */}
            </Route>
            <Route element={ <AdminRoute /> }>
              <Route path="/admin" element={ <Admin /> } />
              <Route path="/edit_admin/:id" element={ <EditAdmin /> } />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
