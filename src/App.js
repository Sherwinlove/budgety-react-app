import React, { useState } from "react";
import InputBar from "./components/InputBar/InputBar";
import DisplayBudget from "./components/DisplayBudget/DisplayBudget";
import BudgetList from "./components/BudgetList/BudgetList";
import styled from "styled-components";
import { toNumbers } from "./utils";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  > div {
    margin-bottom: 16px;
  }
  * {
    box-sizing: border-box;
  }
`;

const BudgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  > div {
    &:first-child {
      margin-right: 30px;
    }
    width: 28vw;
    border-top: 1px solid gray;
    padding-top: 12px;
  }
`;

function App() {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [budgetItems, setBudgetItems] = useState([]);

  const resetInputs = () => {
    setDescriptionInput("");
    setAmountInput("");
  };

  const addBudgetItem = (type) => {
    const numberAmount = toNumbers(amountInput);
    const newBudgetItem = {
      type, // 'income' || 'expense
      cost: +numberAmount * (type === "income" ? 1 : -1),
      description: descriptionInput,
    };
    setBudgetItems([...budgetItems, newBudgetItem]);
    resetInputs();
  };

  const incomeList = budgetItems.filter(
    (budgetItem) => budgetItem.type === "income"
  );
  const expenseList = budgetItems.filter(
    (budgetItem) => budgetItem.type === "expense"
  );
  return (
    <AppContainer>
      <DisplayBudget budgetItems={budgetItems} />
      <InputBar
        descriptionInput={descriptionInput}
        setDescriptionInput={setDescriptionInput}
        amountInput={amountInput}
        setAmountInput={setAmountInput}
        addBudgetItem={addBudgetItem}
      />
      <BudgetsContainer>
        <BudgetList budgetItems={incomeList} />
        <BudgetList budgetItems={expenseList} />
      </BudgetsContainer>
    </AppContainer>
  );
}

export default App;
