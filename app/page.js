import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import DateSelector, { months } from './components/DateSelector';
import MonarchButton from './components/MonarchButton';
import Spending from './components/Spending';

export default function Home() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <div>
      <main class={styles.main}>
        <h1>Hello budget calculator</h1>
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
        </div>
        <div>
          <h2>Spending report for {months[month]} {year}</h2>
          <Spending />
        </div>
      </main>
    </div>
  );
}
