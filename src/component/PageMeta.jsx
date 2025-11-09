import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Home",
  "/about": "About",
  "/roles": "Roles",
  "/award": "Award",
  "/media": "Media",
  "/judges": "Judges",
  "/public": "Public Speaking",
  "/resume": "Resume",
  "/contact": "Contact",
  "/publications": "Publications",
};

const PageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Page";
    document.title = `${title} / Rakesh Datta`;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default PageMeta;
