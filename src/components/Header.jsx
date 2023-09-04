import React from "react";

const Header = () => {
  return <header>
    <div id='Budget' className='bg-black p-4 flex justify-evenly items-center '>
        <h1 className='text-white text-2xl font-semibold'>Budget</h1>
        <div>
          <button className='bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-5'>
            Add Budget
          </button>
          <button className='bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Add Expenses
          </button>
        </div>
      </div>
  </header>;
};

export default Header;
