import React from "react";
//* import Header from './components/Header'; items will be copied & pasted to component folder

function App() {
  return (
    <div>
      <div className='bg-black p-4 flex justify-evenly items-center '>
        <h1 className='text-white text-2xl font-semibold'>Budget</h1>
        <div>
          <button className='bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-5'>
            Add Earnings
          </button>
          <button className='bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Add Expenses
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
