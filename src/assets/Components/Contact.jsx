import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
           
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">If you have any questions, feedback, or inquiries, feel free to reach out to us. We'd love to hear from you!</p>
              <div>
                <p className="font-semibold">Email:</p>
                <a href="mailto:bookstore@example.com" className="text-blue-500">ziamziam05@gmail.com</a>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Phone:</p>
                <a href="tel:+1234567890" className="text-blue-500">123-555-7777</a>
              </div>
            </div>
           
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold mb-1">Message:</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;