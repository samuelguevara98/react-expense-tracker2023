import { currencyFormatter } from "../utils";
import React from "react";

export default function BudgetCard({ name, amount, max, gray }) {
  const progressBarColor = getProgressBarVariant(amount, max);

  const classNames = [];
  if (amount > max) {
    classNames.push("bg-red-300");
  } else if (gray) {
    classNames.push("bg-white");
  }

  return (
    <div
      id='card'
      className={classNames.join(" ")}>
      <div
        id='title'
        className={`'block border border-gray-300 rounded-md shadow-md p-4 ${progressBarColor}'`}>
        <div className='flex justify-between'>
          <div className='text-2xl m-2 font-bold uppercase'>{name}</div>
          <div className='text-xl m-2'>
            {currencyFormatter.format(amount)} /{" "}
            <span className='opacity-75 text-sm'>
              {currencyFormatter.format(max)}
            </span>
          </div>
        </div>
        <div className='items-center '>
          <div className='relative mx-5 my-10'>
            <div class='mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs'>
              <div
                id='progressBar'
                className={`h-5 bg-blackrounded-full ${progressBarColor} transition-all duration-500 ease-out`}
                style={{ width: `${(amount / max) * 100}%` }}
                min={0}
                max={max}
                now={amount}></div>
            </div>
          </div>
          <div className=''>
            <div
              id=''
              className='grid grid-cols-2 gap-4 m-2 '>
              <button className='bg-white  shadow-md hover:bg-slate-100 text-black font-bold py-2 px-4 rounded-lg m-2'>
                Add Expense
              </button>
              <button className='bg-white  shadow-md hover:bg-slate-100 text-black font-bold py-2 px-4 rounded-lg m-2'>
                View Expense
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.0) return "bg-sky-300";
  if (ratio < 0.5) return "bg-sky-300";
  if (ratio < 0.75) return "bg-yellow-400";
  return "bg-red-800";
}
