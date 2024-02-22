import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProductList = React.lazy(() => import("pages/ProductList"));
const CategorieswithSidebar = React.lazy(
  () => import("pages/CategorieswithSidebar"),
);
const HomepageVThree = React.lazy(() => import("pages/HomepageVThree"));
const HomepageVTwo = React.lazy(() => import("pages/HomepageVTwo"));
const HomepageVOne = React.lazy(() => import("pages/HomepageVOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageVOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepagevtwo" element={<HomepageVTwo />} />
          <Route path="/homepagevthree" element={<HomepageVThree />} />
          <Route
            path="/categorieswithsidebar"
            element={<CategorieswithSidebar />}
          />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
