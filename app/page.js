import Image from 'next/image'
import styles from './page.module.css'
import BudgetCalculator from './components/BudgetCalculator';
import Checklist from './components/Checklist';

export default function Home() {
  return (
    <div>
      <main class={styles.main}>
        <h1 class={styles.h1}>Hello budget calculator</h1>
        <div class={styles.layoutContainer}>
          <Checklist />
          <BudgetCalculator />
        </div>
      </main>
    </div>
  );
}
