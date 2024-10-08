import React, { useState } from "react";
import { assets } from "../assets/assets"; // Assuming assets are imported correctly

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "James Richard",
    image: assets.profile_pic, // Correct reference for the image
    email: "sakshi28092002@gmail.com",
    phone: "4875466553",
    address: {
      Line1: "57th cross road, London",
      Line2: "square road, London",
    },
    gender: "Male",
    dob: "2002-07-30",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center">
        {/* Displaying the profile image */}
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
        />
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="text-center text-2xl font-semibold border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <p className="text-2xl font-semibold">{userData.name}</p>
        )}
      </div>

      <hr className="my-4" />

      <div>
        <p className="text-lg font-bold text-blue-600 mb-4">Contact Information</p>
        <div className="space-y-4">
          {/* Name and detail flex layout */}
          <div className="flex justify-between">
            <p className="font-medium w-1/3">Email Id:</p>
            <div className="w-2/3">
              <p className="text-gray-700">{userData.email}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium w-1/3">Phone:</p>
            <div className="w-2/3">
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-700">{userData.phone}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium w-1/3">Address:</p>
            <div className="w-2/3">
              {isEdit ? (
                <>
                  <input
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, Line1: e.target.value },
                      }))
                    }
                    value={userData.address.Line1}
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                  />
                  <input
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, Line2: e.target.value },
                      }))
                    }
                    value={userData.address.Line2}
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </>
              ) : (
                <p className="text-gray-700">
                  {userData.address.Line1}
                  <br />
                  {userData.address.Line2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <p className="text-lg font-bold text-blue-600 mb-4">Basic Information</p>
        <div className="space-y-4">
          {/* Gender and detail flex layout */}
          <div className="flex justify-between">
            <p className="font-medium w-1/3">Gender:</p>
            <div className="w-2/3">
              {isEdit ? (
                <select
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  value={userData.gender}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-700">{userData.gender}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium w-1/3">Birthday:</p>
            <div className="w-2/3">
              {isEdit ? (
                <input
                  type="date"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  value={userData.dob}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p className="text-gray-700">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-green-500 text-white px-10 py-2 rounded hover:bg-green-600 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
