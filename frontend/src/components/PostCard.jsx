import React from "react";

function PostCard({ postCardData }) {
  return (
    <div className="bg-white p-4 mb-3 w-full md:max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          className="w-12 h-12 md:w-16 md:h-16 rounded-full"
          src={postCardData.dpImg}
          alt="Profile"
        />
        <div className="flex-1">
          <h3 className="font-bold text-base md:text-lg">
            {postCardData.userName}
          </h3>
          <p className="text-sm md:text-base text-gray-500">
            {postCardData.roleRole} at {postCardData.companyName}
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            {postCardData.location}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm md:text-base">
          {postCardData.postDescription}
        </p>
        {postCardData.postImg && (
          <img
            src={postCardData.postImg}
            alt="Post"
            className="w-full mt-4 rounded-lg"
          />
        )}
      </div>

      {/* Apply Button */}
      <div className="flex justify-end mb-2">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-1 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Apply
        </button>
      </div>

      {/* Actions */}
      <div className="border-t pt-2 flex justify-between items-center text-gray-500 text-xs md:text-sm">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 4.248c-3.148 0-5.72 2.017-6.775 4.763h2.193l-2.978 3.722L1.544 9h2.271C4.725 5.683 8.108 3 12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10c-2.484 0-4.786-.874-6.57-2.332l1.425-1.409C8.608 20.167 10.243 21 12 21c3.313 0 6-2.687 6-6s-2.687-6-6-6c-.355 0-.704.028-1.047.083L13.293 9h-4.794l-2.186 2.186c.234.51.368 1.082.368 1.686 0 2.485 2.016 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-2.485-2.015-4.5-4.5-4.5z" />
          </svg>
          <span>Like</span>
        </button>
        {/* <button className="flex items-center space-x-1 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.1 18.3c-2.1-1.3-5-2.3-8.1-2.3s-6 .9-8.1 2.3c-.3.2-.7.3-1 .3-.7 0-1.3-.5-1.3-1.3V9c0-.7.6-1.3 1.3-1.3.4 0 .7.1 1 .3 2.1 1.3 5 2.3 8.1 2.3s6-.9 8.1-2.3c.3-.2.7-.3 1-.3.7 0 1.3.5 1.3 1.3v8c0 .8-.6 1.3-1.3 1.3-.4 0-.7-.1-1-.3zm-6.4-4.8c-1.8 0-3.3 1.5-3.3 3.3 0 1.9 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z"/></svg>
                    <span>Comment</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8H5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zm-6 12H6v-2h5v2zm0-4H6v-2h5v2zm0-4H6v-2h5v2zm6 8h-4v-6h4v6zM5 5h14V4c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1z"/></svg>
                    <span>Share</span>
                </button> */}
      </div>
    </div>
  );
}

export default PostCard;
