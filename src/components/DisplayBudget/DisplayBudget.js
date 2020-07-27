import React from "react";
import styled from "styled-components";
import { toCurrency } from "../../utils";

const DisplayHeading = styled.h1`
  ${(p) =>
    p.hasStarted ? "font-size: 60px;" : "color: gray; font-size: 36px;"}
  text-align: center;
  line-height: 1;
  margin-bottom: 40px;
`;

const DisplayBudget = ({ budgetItems }) => {
  const total = budgetItems.reduce((a, c) => a + c.cost, 0);
  const hasStarted = budgetItems.length;
  return (
    <DisplayHeading hasStarted={hasStarted}>
      {hasStarted
        ? ` $${toCurrency(total)}`
        : "Let's see how financially irresponsible you are."}
    </DisplayHeading>
  );
};

export default DisplayBudget;
