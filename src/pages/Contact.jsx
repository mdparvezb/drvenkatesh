import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import WhatsappBtn from "../components/WhatsappBtn";

function Contact() {
  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-10 ">
        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <FiMapPin className="text-indigo-600 mt-1 mr-3" size={30} />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-gray-600">
                  Interventional Radiology OPD <br />
                  Apollo Hospital
                  <br />
                  Parsik Hill Rd, off Uran Road, opp. Nerul Wonders Park, Sector
                  23, CBD Belapur, Navi Mumbai, Maharashtra 400614
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FiPhone
                className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                size={20}
              />
              <div>
                <h3 className="font-medium">Phone Number</h3>
                <p className="text-gray-600">
                  <a href="tel:9441234567" className="hover:text-indigo-600">
                    +91-9441234567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FiMail
                className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                size={20}
              />
              <div>
                <h3 className="font-medium">Email Address</h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:drvenk.rdaiims@gmail.com"
                    className="hover:text-indigo-600"
                  >
                    drjohndoe@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FiClock
                className="text-indigo-600 mt-1 mr-3 flex-shrink-0"
                size={20}
              />
              <div>
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <WhatsappBtn />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="w-[100%] bg-white px-4 md:px-10 py-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-black text-center pb-4">
          Our Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.978270496762!2d73.02652707387342!3d19.020679153709516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3903a3c9297%3A0xb858a25d34856005!2sApollo%20Hospital%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1748963694104!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
