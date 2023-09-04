import { currencyFormatter } from "../utils";
import React from "react";

export default function BudgetCard({ name, amount, max }) {
  return (
    <div>
      <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))", gap:"1rem", alignItems:"flex-start"}}>
      <div className='border border-gray-300 rounded-md shadow-md p-4'>
        <div className='flex justify-between'>
          <div className='text-2xl'>{name}</div>
          <div className='text-xl'>
            {currencyFormatter.format(amount)} /{" "}
            <span className='opacity-75 text-sm'>
              {currencyFormatter.format(max)}
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
