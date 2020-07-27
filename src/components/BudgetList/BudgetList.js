import React from "react";
import { toCurrency } from "../../utils";

const BudgetList = ({ budgetItems }) => {
  return (
    <div>
      {budgetItems.map((budgetItem) => (
        <div>
          <li>
            {budgetItem.description} {" $"}
            {toCurrency(budgetItem.cost)}
          </li>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
