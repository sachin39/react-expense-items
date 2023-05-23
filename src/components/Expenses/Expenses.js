import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChainHandler = (selectedFilter) => {
    setFilterYear(selectedFilter);
  };
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filterYear}
            onChangeFilter={filterChainHandler}
          />
          <ExpensesList items={filteredItems} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
