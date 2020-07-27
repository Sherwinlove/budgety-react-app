import React from "react";
import styled from "styled-components";
import { toNumbers, toCurrency } from "../../utils";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  input {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
  button {
    margin: 12px 8px;
  }
`;

const InputBar = ({
  descriptionInput,
  setDescriptionInput,
  amountInput,
  setAmountInput,
  addBudgetItem,
}) => {
  const _setAmountInput = (e) => {
    const nums = toCurrency(toNumbers(e.target.value));
    setAmountInput(nums);
  };
  const inputsAreNotFilled = !descriptionInput || !amountInput;

  const randomPlaceholder = React.useMemo(() => {
    const budgetItemExamples = [
      "Advertising Expenses",
      "Business Vehicle(s)",
      "Payroll",
      "Employee Benefits",
      "Meals & Entertainment Expenses",
      "Office Expenses",
      "Office Supplies",
      "Professional Services",
    ];
    const r = Math.floor(Math.random() * budgetItemExamples.length);
    return budgetItemExamples[r];
  }, []);

  return (
    <InputContainer>
      <input
        placeholder={`Ex. ${randomPlaceholder}`}
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      ></input>
      <input
        placeholder="Amount"
        value={amountInput}
        onChange={_setAmountInput}
      ></input>
      <div>
        <button
          disabled={inputsAreNotFilled}
          onClick={() => addBudgetItem("income")}
        >
          Add Income :)
        </button>
        <button
          disabled={inputsAreNotFilled}
          onClick={() => addBudgetItem("expense")}
        >
          Add Expense ):
        </button>
      </div>
    </InputContainer>
  );
};

export default InputBar;
