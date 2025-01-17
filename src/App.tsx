import "./App.css";
import Landingpage from "./component/Landingpage";
import Navbar from "./component/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Createcampaign from "./component/campaign/Createcampaign";
import Createcampaign1 from "./component/campaign/Createcampaign1";
import Activecampaign from "./component/campaign/Activecampaign";
// import Landingpage from "./component/Landingpage";
import CampaignInfo from "./component/campaign/CampaignInfo";

import Creatordashboard from "./component/campaign/Creatordashboard";

function App() {
  const location = useLocation(); // Get the current location

  // Define routes where the Navbar should be visible (only on landing page)
  const showNavbarRoutes = ["/"];
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <div className="relative">
      {/* Conditionally render Navbar */}
      {shouldShowNavbar && <Navbar />}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/createcampaign1" element={<Createcampaign1 />} />
        <Route path="/creatordashboard" element={<Creatordashboard />} />
        <Route path="/createcampaign" element={<Createcampaign />} />
        <Route path="/activecampaign" element={<Activecampaign />} />
        <Route path="/campaigninfo" element={<CampaignInfo />} />
      </Routes>
    </div>
  );
}

export default App;
