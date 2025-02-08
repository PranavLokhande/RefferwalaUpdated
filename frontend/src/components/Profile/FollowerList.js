import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarNavigation from '../SidebarNavigation';
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import Loader from '../Loader';
import { motion } from "framer-motion";
import { BiBriefcase, BiMap } from "react-icons/bi";

export default function FollowerList() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Fronted_API_URL = process.env.REACT_APP_API_URL; // Frontend API
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate(); // Move inside the component to avoid dependency issue

  useEffect(() => {
    const fetchFollowers = async () => {
      const userId = localStorage.getItem('userId');
      const bearerToken = localStorage.getItem('token');

      try {
        const response = await fetch(`${Fronted_API_URL}/user/${userId}/followers`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 401) {
            // Unauthorized, remove the token and navigate to login
            localStorage.removeItem('token');
            navigate('/user-login');
          } else {
            throw new Error(errorData.msg || 'Failed to fetch followers users');
          }
        }

        const data = await response.json();
        setFollowers(data.followers || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [Fronted_API_URL, navigate]); // Include dependencies

  const handleShowJob = async (applicantId) => {
    setIsModalOpen(true); // Open the modal
    const bearerToken = localStorage.getItem('token');

    try {
      const response = await fetch(`${Fronted_API_URL}/job/user/${applicantId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Unauthorized, remove the token and navigate to login
          localStorage.removeItem('token');
          navigate('/user-login');
        } else {
          throw new Error('Failed to fetch profile data');
        }

      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
      toast.error(error.message);
    }
  }

  const handleViewDetails = (jobId) => {
    navigate(`/appliedjobdetails/${jobId}`);
  };

  const handleViewUserProfile = (userId) => {
    navigate(`/checkuserprofile/${userId}`);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-white via-gray-200 to-bg-blue-100">
        <SidebarNavigation />

        <div className="flex flex-col items-center justify-center w-full p-6 mx-auto bg-gradient-to-b from-lightBlue-200 to-white">
          {loading ? (
            <Loader />
          ) : error ? (
            <p className="text-red-400">❌ Error: {error}</p>
          ) : followers.length === 0 ? (
            <p className="text-xl text-center text-black">😔 You have no follower.</p>
          ) : (
            <div>
              {/* Followers List */}
              <div className="flex flex-col items-center justify-center gap-6">
                {followers.map((user) => (
                  <motion.div
                    key={user._id}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 text-black transition-all border border-white shadow-lg rounded-xl bg-white/30 hover:shadow-2xl hover:bg-white/50"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        className="w-20 h-20 border-4 border-gray-500 rounded-full"
                        src={
                          user.profilePhoto ||
                          "https://via.placeholder.com/150"
                        }
                        alt={user.firstName}
                      />
                      <h3 className="mt-4 text-lg font-semibold">
                        {user.firstName} {user.lastName} ✨
                      </h3>
                      <p className="text-black-600">📧 {user.email}</p>
                    </div>
                    <div className="mt-4 space-x-2">
                    <button
                          onClick={() => handleViewUserProfile(user._id)}
                          className="px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded hover:bg-yellow-500"
                        >
                         👤 View Profile
                        </button>
                        <button
                          onClick={() => handleViewDetails(user._id)}
                          className="px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded hover:bg-yellow-500"
                        >
                         💼 Applied Job
                        </button>
                      <button
                        className="px-4 py-2 mt-3 text-sm font-medium text-black bg-yellow-400 rounded hover:bg-yellow-500"
                        onClick={() => handleShowJob(user._id)}
                      >
                        🛠️ View Jobs
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

             {/* Modal */}
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80"
                >
                  <div className="relative w-full max-w-3xl overflow-hidden text-gray-800 border border-gray-400 rounded-lg shadow-lg bg-white/90 backdrop-blur-lg">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute text-gray-500 top-4 right-4 hover:text-gray-800"
                    >
                      <FaTimes className="w-6 h-6" />
                    </button>
                    <div className="p-6 max-h-[80vh] overflow-y-auto">
                      <h2 className="mb-4 text-xl font-bold text-center">🚀 Hosted Jobs</h2>
                      {jobs.length > 0 ? (
                        <div className="mt-4 space-y-4">
                          {jobs.map((job) => (
                            <motion.div
                              key={job._id}
                              whileHover={{ scale: 1.02 }}
                              className="flex items-center p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg"
                            >
                              <BiBriefcase className="w-10 h-10 text-yellow-400" />
                              <div className="ml-4">
                                <h3 className="text-lg font-semibold">{job.jobRole}</h3>
                                <p className="text-gray-600">🏢 {job.companyName}</p>
                                <p className="text-gray-500">
                                  <BiMap className="inline-block mr-2" />📍 {job.location}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center">No jobs available 😔</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
      <ToastContainer /> {/* Added ToastContainer */}
    </>
  );
}
