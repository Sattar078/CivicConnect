import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import CitizenDashboard from "./CitizenDashboard";
import ComplaintModal from "../components/ComplaintModal";
import ComplaintSuccessModal from "../components/ComplaintSuccessModal";
import Footer from "../components/Footer";



// Home Component
const Home = () => {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState(null);

  const handleComplaintSubmit = (details) => {
    setIsComplaintOpen(false);
    setSuccessDetails(details);
  };

  return (
    // Main Container
    <div className="min-h-screen w-full" >
        <Navbar onOpenDashboard={() => setIsDashboardOpen(true)} />
        <Main onOpenComplaint={() => setIsComplaintOpen(true)} />
        {isComplaintOpen && <ComplaintModal onClose={() => setIsComplaintOpen(false)} onSubmit={handleComplaintSubmit} />}
        {isDashboardOpen && <CitizenDashboard onClose={() => setIsDashboardOpen(false)} />}
        {successDetails && <ComplaintSuccessModal onClose={() => setSuccessDetails(null)} details={successDetails} />}
      <div className="relative z-10">
       {/* Footer Section */}
       <Footer />
    </div>
    </div>
  );
};

export default Home;