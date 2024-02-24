import {   createBrowserRouter,Route, RouterProvider, Routes, } from "react-router-dom";
import Home from "./pages/homePage";
import Details from "./pages/detailsFilingPage";
import Preview from "./pages/previewDetailsPage";
import AboutUs from "./pages/aboutUsPage"
import MyResume from "./pages/myResume";
import Navigation from "./components/Navigation";

// used new createBrowserRouter structure for routing 
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function Root() {

  return (
    <div>
      {/* Navigation compenent is used at at top level to avoid re- rended of same component again */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/details" element={<Details />}/> 
        <Route path="/preview" element={<Preview />}/> 
        <Route path="/aboutUs" element={<AboutUs />}/> 
        <Route path="/myResume" element={<MyResume />}/> 
      </Routes>
    </div>
  )
}

export default function App() {
  return <RouterProvider router={router} />;
}
