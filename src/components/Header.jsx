import React from "react";

const Header = () => {
  return (
    <header>
      <div
        id='Budget'
        className='bg-black p-4 flex justify-evenly items-center '>
        <h1 className='text-white text-2xl font-semibold'>Dashboard</h1>
        <div>
          <button className='bg-white hover:bg-green-200 text-black font-bold py-2 px-4 rounded mx-4'>
            Add Budget
          </button>
          <button className='bg-white hover:bg-red-200 text-black font-bold py-2 px-4 rounded'>
            Add Expenses
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
