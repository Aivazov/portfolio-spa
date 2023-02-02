import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20">
      <h1 className="py-4 text-4xl font-bold text-center text-[#1a243c]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/b6eb4c30-4aae-4130-a5e2-cfba62b93401"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="tel"
              name="number"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            name="message"
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-gray-100 mt-4 p-4 w-full bg-[#1a243c] rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
