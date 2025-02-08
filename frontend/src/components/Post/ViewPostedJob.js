import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  Star,
  Share2,
  Users,
  DollarSign,
  XCircle,
} from "lucide-react";
import { Card } from "../ui/card/Card";
import { CardContent } from "../ui/card/CardContent";
import { Button } from "../ui/button/Button";
import Navbar from "../Navbar";
import SidebarNavigation from "../SidebarNavigation";

export default function JobPosting() {
  const [saved, setSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Handle job closing and navigate to posted jobs list
  const handleCloseJob = () => {
    navigate("/postedjobslist");
  };

  // Handle share button click (popup appears & auto-closes)
  const handleShareClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    
    <>
      <Navbar />
      <div className="flex">
        <SidebarNavigation />
        <div className="flex items-center justify-center w-full min-h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-700">
          <Card className="relative w-full max-w-3xl p-6 text-white bg-gray-800 border border-gray-700 shadow-2xl rounded-2xl">
            <CardContent>
              {/* Job Title & Company */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-blue-400">SDE</h2>
                  <p className="text-sm text-gray-400">Internshala</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSaved(!saved)}
                  className="text-blue-400 border-blue-400"
                >
                  {saved ? <Star className="text-blue-400" /> : <Star />} Save
                </Button>
              </div>

              {/* Job Details */}
              <div className="flex mb-6 space-x-6 text-lg text-gray-400">
                <div className="flex items-center space-x-2">
                  <Briefcase className="text-green-400" /> <span>Full-Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-red-400" /> <span>Nagpur</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-yellow-400" /> <span>Closing: 2025-12-25</span>
                </div>
              </div>

              {/* Referral & Salary Info */}
              <div className="flex mb-6 space-x-6 text-lg text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="text-purple-400" /> <span>5 Referrals Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-green-400" /> <span>15 LPA</span>
                </div>
              </div>

              {/* Job Description */}
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Guys, start applying! A trusted job portal with a large database of job
                listings and an interface that's easy to navigate. Suitable for both freshers and experienced professionals.
              </p>

              {/* Buttons - Apply & Share */}
              <div className="flex items-center justify-between mt-6">
                <Button className="px-8 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="relative flex items-center px-6 py-3 text-gray-300 border-gray-500 rounded-lg hover:border-white hover:text-white"
                  onClick={handleShareClick}
                >
                  <Share2 className="mr-2" /> Share
                </Button>

                {/* Share Popup */}
                {showPopup && (
                  <div className="absolute right-0 flex p-3 mt-2 space-x-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg animate-fade-in">
                    <a href="https://wa.me/?text=Check%20out%20this%20job%20posting!" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://jobportal.com/jobposting" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://jobportal.com/jobposting" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
                    </a>
                  </div>
                )}
              </div>

              {/* Close Job Button */}
              <div className="flex justify-end mt-6 space-x-4">
                <Button
                  className="flex items-center px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={handleCloseJob}
                >
                  <XCircle className="mr-2" /> Close Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

//  change only ui/uxof this code i wan to show data in card  use glassmorphism hover effect and animation in this card use bluelight white linear gradient color shadow effect also this card shown from center of screen to right side completly