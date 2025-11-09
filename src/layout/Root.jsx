
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../component/ScrollToTop";
import ScrollTop from "../component/ScrollTop";
import PageMeta from "../component/PageMeta";


const Root = () => {
  return (
    <div>
      <PageMeta></PageMeta>
      <Header />
      <Outlet />
      <Footer />
      <ScrollTop></ScrollTop>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default Root;
