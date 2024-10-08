import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null); // To track selected date
  const [selectedTime, setSelectedTime] = useState(null); // To track selected time slot

  const fetchDocInfo = async () => {
    if (doctors) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo);
    }
  };

  const getAvailableSlots = async () => {
    let allSlots = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push({
        day: daysOfWeek[currentDate.getDay()],
        date: currentDate.getDate(),
        timeSlots: timeSlots,
      });
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  const handleDateClick = (index) => {
    setSelectedDateIndex(index);
    setSelectedTime(null); // Reset selected time when changing dates
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    docInfo && (
      <div className="max-w-5xl mx-auto p-4">
        {/* --------- Doctors Details ------------- */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-lg shadow-lg p-6">
          <div className="flex-shrink-0">
            <img
              className="w-48 h-48 rounded-lg object-cover"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-2 text-3xl font-semibold text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="py-1 px-3 border text-xs rounded-full bg-gray-100">
                {docInfo.experience} years experience
              </span>
            </div>

            {/* ------- Doctor About --------- */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-lg font-semibold text-gray-900">
                About <img className="w-4" src={assets.info_icon} alt="info" />
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-600 font-medium mt-4">
              Appointment Fees:{" "}
              <span className="text-xl font-semibold text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* --------- Booking Slots --------- */}
        <div className="mt-8">
          <p className="text-xl font-semibold text-gray-700 mb-4">Booking Slots</p>
          {/* Dates in a horizontal scrollable flex container */}
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {docSlots.length > 0 &&
              docSlots.map((daySlot, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-28 bg-white p-4 shadow-md rounded-lg cursor-pointer text-center ${
                    selectedDateIndex === index
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleDateClick(index)}
                >
                  <p className="text-lg font-semibold text-gray-800">
                    {daySlot.day}
                  </p>
                  <p className="text-gray-600">{daySlot.date}</p>
                </div>
              ))}
          </div>

          {/* Show time slots for the selected date */}
          {selectedDateIndex !== null && (
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Available Slots for {docSlots[selectedDateIndex].day},{" "}
                {docSlots[selectedDateIndex].date}
              </p>
              <div className="flex flex-wrap gap-3">
                {docSlots[selectedDateIndex].timeSlots.map((slot, index) => (
                  <span
                    key={index}
                    onClick={() => handleTimeClick(slot.time)}
                    className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                      selectedTime === slot.time
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {slot.time}
                  </span>
                ))}
              </div>

              {/* Book My Appointment button */}
              {selectedTime && (
                <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Book My Appointment at {selectedTime}
                </button>
              )}
            </div>
          )}
        </div>

        {/* ------ Related Doctors Section --------- */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
