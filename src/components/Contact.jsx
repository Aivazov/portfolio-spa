import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto p-4 py-16 md:pl-20">
      <h1 className="py-4 text-4xl font-bold text-center text-[#1a243c]">
        Contact
      </h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input type="tel" name="number" required />
          </div>
        </div>
        <div>
          <label className="uppercase text-sm py-2">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label className="uppercase text-sm py-2">Subject</label>
          <input type="text" name="subject" required />
        </div>
        <div>
          <label className="uppercase text-sm py-2">Message</label>
          <textarea name="message" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
}
