import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    telephone: '',
    email: '',
    enquiry: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission (API call, etc.)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fdf8f3] flex flex-col items-center py-12 px-2">
      <div className="w-full flex flex-col items-center justify-center mb-8">
        <h5 className="text-sm font-semibold text-gray-500 mb-2 text-center">CONTACT US</h5>
        <h1 className="text-2xl md:text-2xl font-semibold text-gray-900 mb-4 text-center">Let's Work Together</h1>
        <p className="text-gray-700 max-w-xl mx-auto text-center">
          Contact us to discuss your project and see how we can help bring your ideas to life
        </p>
      </div>
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Contact Form */}
        <div className="flex-1 min-w-[320px]">
          
          <form onSubmit={handleSubmit} className="relative z-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="Email Address*"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="123 Main St, City, Country"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
                  placeholder="01234 567890"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Details</label>
              <textarea
                name="enquiry"
                value={form.enquiry}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-200"
                placeholder="Enter your enquiry here..."
                required
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <label className="text-xs text-gray-600">
                By ticking this box, you consent to ATS Packaging using the details provided to contact you, this information supplied will only be used for nature of your enquiry, then removed from our systems. We will not share this information with any partner companies or sell this data to 3rd parties.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg shadow mt-2 transition-colors disabled:opacity-60"
              disabled={!form.consent}
            >
              Submit
            </button>
            {submitted && (
              <div className="text-green-600 text-center font-semibold mt-2">Thank you for your enquiry!</div>
            )}
          </form>
        </div>
        {/* Map locations - two maps side by side on desktop, stacked on mobile */}
        <div className="flex-1 min-w-[320px] mt-10 md:mt-0 md:ml-4 flex flex-col gap-6 border border-gray-300 rounded-2xl p-4 bg-white">
          <div>
            <div className="font-semibold text-gray-700 mb-2 text-center">Folkestone Location</div>
            <iframe
              title="Highfield Industrial Estate, Folkestone"
              src="https://www.google.com/maps?q=Highfield+Industrial+Estate,+Bradley+Rd,+Folkestone+CT19+6DD,+UK&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-2 text-center">Maidstone Location</div>
            <iframe
              title="Advanced Tooling Systems (UK) Ltd, Maidstone"
              src="https://www.google.com/maps?q=Advanced+Tooling+Systems+(UK)+Ltd,+Parkwood+Industrial+Estate,+Coldred+Rd,+Maidstone+ME15+9XX,+United+Kingdom&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
