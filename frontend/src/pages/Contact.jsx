import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-4xl font-extrabold text-gray-900">
          CONTACT <span className="text-indigo-600 font-semibold">US</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
          <img 
            className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" 
            src={assets.contact_image} 
            alt="Contact Us" 
          />
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 md:w-1/2 lg:w-2/3 text-gray-700">
          <p className="text-2xl font-semibold">Our OFFICE</p>
          <p className="text-lg">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-lg">
            Tel: (415) 555‑0132 <br /> 
            Email: <a href="mailto:greatstackdev@gmail.com" className="text-indigo-600 hover:underline">greatstackdev@gmail.com</a>
          </p>
          <p className="text-2xl font-semibold">Careers at PRESCRIPTO</p>
          <p className="text-lg">
            Learn more about our teams and job openings.
          </p>

          {/* Explore Jobs Button */}
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
