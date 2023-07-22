'use client';

import { useState } from 'react';
import DateSelector, { months } from './DateSelector';
import MonarchButton from './MonarchButton';
import Spending from './Spending';

export default function BudgetCalculator() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <div>
      <DateSelector
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
      <MonarchButton
        year={year}
        month={month}
      />
      <h2>Spending report for {months[month]} {year}</h2>
      <Spending />
    </div>
  );
}
