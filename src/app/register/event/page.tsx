"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function EventRegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lacdChapter: '',
    paymentMethod: 'venmo',
    paymentConfirmation: '',
    hotelBooking: 'no',
    dietaryRestrictions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const lacdChapters = [
    'San Diego CA',
    'Los Angeles CA', 
    'San Francisco CA',
    'New England',
    'Tampa FL',
    'Jacksonville FL',
    'Michigan',
    'Ohio',
    'New York/New Jersey'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'event' })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      const result = await response.json();
      console.log('Event registration result:', result);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        lacdChapter: '',
        paymentMethod: 'venmo',
        paymentConfirmation: '',
        hotelBooking: 'no',
        dietaryRestrictions: ''
      });
      
    } catch (error) {
      console.error('Event registration error:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your registration. Please try again.');
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Event Registration Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for registering for the 2025 LACD Annual Convention. Your registration has been submitted successfully.
              Please complete your payment of $200 to confirm your spot.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-800 mb-4">Payment Instructions:</h3>
              
              {/* Venmo Payment */}
              <div className="mb-4 p-3 bg-white rounded-md">
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Venmo:</strong> @LACD-National
                </p>
                <a
                  href="https://venmo.com/u/LACD-National"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                >
                  Pay with Venmo
                </a>
              </div>
              
              {/* Zelle Payment */}
              <div className="p-3 bg-white rounded-md">
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Zelle:</strong> LEBANESE AMERICAN COMMISSION
                </p>
                <p className="text-blue-700 text-sm mb-3">
                  <strong>Email:</strong> m***2@gmail.com
                </p>
                <div className="text-center">
                  <img 
                    src="/zelle-qr-code.png" 
                    alt="Zelle QR Code" 
                    className="w-40 h-40 mx-auto mb-2 border border-gray-200 rounded"
                  />
                  <p className="text-xs text-gray-600">Scan QR code to pay with Zelle</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 mr-3"
              >
                Register Another Person
              </button>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Back to Main Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            2025 LACD Annual Convention
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Join us in Boston for the nationwide registration campaign for the 2026 Lebanese Parliamentary Elections
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Event Details</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="font-semibold text-gray-800">Date:</p>
                <p className="text-gray-600">October 10-12, 2025</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location:</p>
                <p className="text-gray-600">Boston, Massachusetts</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Registration Cost:</p>
                <p className="text-gray-600">$200 per person</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Hotel:</p>
                <p className="text-gray-600">Hilton Garden Inn Boston/Waltham</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* LACD Chapter */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">LACD Chapter</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LACD Chapter *
                </label>
                <select
                  name="lacdChapter"
                  value={formData.lacdChapter}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your LACD Chapter</option>
                  {lacdChapters.map((chapter) => (
                    <option key={chapter} value={chapter}>{chapter}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hotel Booking */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hotel Accommodations</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-blue-800 font-semibold mb-2">Hilton Garden Inn Boston/Waltham</p>
                <p className="text-blue-700 text-sm mb-2">450 Totten Pond Rd, Waltham, MA 02451</p>
                <p className="text-blue-700 text-sm mb-2">Rate: $239 + taxes per night (includes breakfast for 2)</p>
                <p className="text-blue-700 text-sm mb-3">Reservation Deadline: September 9th, 2025</p>
                
                {/* Hotel Booking Link */}
                <div className="bg-white rounded-md p-3 border border-blue-200">
                  <p className="text-blue-800 font-medium mb-2">Book Your Room:</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                  >
                    Book your Room for LAC October Event!
                  </a>
                  <p className="text-xs text-blue-600 mt-1">
                    Link will default to 10/10-10/12 dates
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you need hotel booking assistance? *
                </label>
                <select
                  name="hotelBooking"
                  value={formData.hotelBooking}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="no">No, I&apos;ll book separately</option>
                  <option value="yes">Yes, please provide booking link</option>
                </select>
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Special Requirements</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Please specify any dietary restrictions or allergies..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Information</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-semibold mb-2">Registration Cost: $200 per person</p>
                <p className="text-yellow-700 text-sm">
                  This includes all food, conference Gala, and activities for the weekend.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="venmo">Venmo (@LACD-National)</option>
                    <option value="zelle">Zelle</option>
                  </select>
                </div>

                {/* Payment Links and QR Codes */}
                <div className="bg-blue-50 rounded-lg p-4 space-y-4">
                  <h4 className="font-semibold text-blue-800">Quick Payment Options:</h4>
                  
                  {/* Venmo Payment */}
                  <div className="flex items-center justify-between p-3 bg-white rounded-md">
                    <div>
                      <p className="font-medium text-gray-800">Venmo Payment</p>
                      <p className="text-sm text-gray-600">@LACD-National</p>
                    </div>
                    <a
                      href="https://venmo.com/u/LACD-National"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                    >
                      Pay with Venmo
                    </a>
                  </div>

                  {/* Zelle Payment */}
                  <div className="flex items-center justify-between p-3 bg-white rounded-md">
                    <div>
                      <p className="font-medium text-gray-800">Zelle Payment</p>
                      <p className="text-sm text-gray-600">LEBANESE AMERICAN COMMISSION</p>
                      <p className="text-sm text-gray-600">m***2@gmail.com</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src="/zelle-qr-code.png" 
                        alt="Zelle QR Code" 
                        className="w-32 h-32 mx-auto mb-2 border border-gray-200 rounded"
                      />
                      <p className="text-xs text-gray-600">Scan to pay</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Confirmation Number/ID *
                  </label>
                  <input
                    type="text"
                    name="paymentConfirmation"
                    value={formData.paymentConfirmation}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your payment confirmation number or transaction ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    After making your payment, please enter the confirmation number, transaction ID, or screenshot reference.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg"
            >
              {isSubmitting ? 'Submitting Registration...' : 'Submit Event Registration'}
            </button>
          </form>

          {/* Back to Main Registration */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Main Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
