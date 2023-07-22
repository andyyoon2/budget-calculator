import Image from 'next/image'
import styles from './page.module.css'
import BudgetCalculator from './components/BudgetCalculator';

export default function Home() {
  return (
    <div>
      <main class={styles.main}>
        <h1 class={styles.h1}>Hello budget calculator</h1>
        <BudgetCalculator />
      </main>
    </div>
  );
}
