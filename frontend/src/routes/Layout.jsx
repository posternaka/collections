import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = ({ user }) => {
  return (
    <>
        <Header user={user} />
        <Outlet />
    </>
  )
}

export default Layout