import React from "react";
import Navbar from "./components/navbar";
import FooterBar from "./components/footerBar";

import WhoWeAre from "./components/WhoWeAre";

import WhatWeDoSection from "./components/whatwedo";
import HeroSection from "./components/heroDesigns";
import MissionSection from "./components/mission";
const App = () => (
  <div className="min-h-screen flex flex-col ">
    <Navbar />
    
    <HeroSection />
    <WhoWeAre />

    <MissionSection />
    <WhatWeDoSection />

    <FooterBar />

    {/* rest of your page */}
  </div>
);

export default App;
