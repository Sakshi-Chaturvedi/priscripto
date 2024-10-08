import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mx:md-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------ left side ---------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            omnis, repellendus modi voluptas sunt et?
          </p>
        </div>

        {/* ---------- Center ------------ */}
        <div>
            <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* -------- Right Side -------------- */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>487547864546</li>
                <li>sakshi3012002@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* CopyRight Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">copyright @priscripto - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
