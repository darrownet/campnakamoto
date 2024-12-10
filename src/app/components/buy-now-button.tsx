import React from "react";

const BuyNow = () => {
  return (
      <div className="text-center">
        <button
            className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transform transition-all duration-300 ease-in-out">
          <a target="_blank" href="https://massadoptionbtc.ticketspice.com/camp-nakamoto" rel="noopener noreferrer">
            Buy Tickets
          </a>
        </button>
      </div>
  );
}

export default BuyNow;
