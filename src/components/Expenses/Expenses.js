import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChainHandler = (selectedFilter) => {
    setFilterYear(selectedFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChainHandler}
        />

        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
