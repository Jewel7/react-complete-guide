import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

// Outlet is a placeholder for the child routes. It renders the nested
//route content (child routes)
function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
