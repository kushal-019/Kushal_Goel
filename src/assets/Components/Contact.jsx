import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 md:p-20 text-white">
      <div className="min-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-5">
              <i className="fas fa-phone-alt text-cyan-400 text-2xl"></i>
              <div>
                <h4 className="text-lg font-bold">Phone</h4>
                <p className="text-base">(+91) 7056059847</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <i className="fas fa-envelope text-cyan-400 text-2xl"></i>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <a
                  href="mailto:kgoel8451@gmail.com"
                  className="text-base hover:text-cyan-500"
                >
                  kgoel8451@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <i className="fas fa-map-marker-alt text-cyan-400 text-2xl"></i>
              <div>
                <h4 className="text-lg font-bold">Address</h4>
                <p className="text-base">Sector 18, Panipat, Haryana (132103)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Send Us a Message Form */}
        <div className="bg-neutral-800/80 p-6 md:p-8 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide">
            Send Us a Message
          </h3>
          <form
            action="https://formsubmit.co/kgoel8451@gmail.com"
            method="POST"
            className="space-y-5"
          >
            {/* Honeypot for spam protection */}
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
            />
            {/* User Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-neutral-700 border border-neutral-600 rounded text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-neutral-700 border border-neutral-600 rounded text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-4 bg-neutral-700 border border-neutral-600 rounded text-white"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-purple-500 text-white font-bold text-lg rounded hover:bg-purple-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
