import React from "react";

const ExpenseList = ({ budgetItems }) => {
  return (
    <div>
      {budgetItems.map((budgetItem) => (
        <div>
          <li>
            {budgetItem.description} {" $"}
            {budgetItem.cost}
          </li>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
