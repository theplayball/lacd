"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleDonateClick = () => {
    console.log('Donate button clicked!');
    // For now, redirect to subscribe page
    window.location.href = '/subscribe';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Support LACD
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Make a Donation
            </h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Amount</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {["$25", "$50", "$100", "$250", "$500", "$1000"].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-4 text-lg font-semibold rounded-lg border-2 transition-all ${
                      selectedAmount === amount
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              
              {/* Custom Amount */}
              <div className="mb-6">
                <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            

            {/* Donate Button */}
            <div className="text-center">
              <button 
                onClick={handleDonateClick}
                type="button"
                className="bg-[#A02012] hover:bg-[#84180F] text-white px-8 py-4 text-xl font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                DONATE NOW
              </button>
              
              {/* Alternative approach with Link */}
              <div className="mt-4">
                <Link 
                  href="/subscribe"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Or click here to Subscribe
                </Link>
              </div>
            </div>

           </div>
        </div>
      </main>
    </div>
  );
}
