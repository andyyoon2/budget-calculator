import { useState } from 'react';

function SpendingInput({ id, label, value, href, onChange }) {
  return (
    <div>
      <label for={id}>{label}</label>
      <input
        id={id}
        value={value}
        onInput={(e) => onChange(e.target.value)}
        type="number"
        step="0.01"
        min="0"
      />
      <a href={href} target="_blank">View in Monarch ➜</a>
    </div>
  );
}

export default function Spending() {
  const [total, setTotal] = useState(0);
  const [shared, setShared] = useState(0);
  const [insooCard, setInsooCard] = useState(0);
  const [jaeminCard, setJaeminCard] = useState(0);
  const [insooPersonal, setInsooPersonal] = useState(0);
  const [jaeminPersonal, setJaeminPersonal] = useState(0);

  // Calculations
  const sofiAmount = shared;

  return (
    <div>
      <SpendingInput
        id="spending-total"
        label="Total spending"
        value={total}
        onChange={setTotal}
        href={''}
      />
      <SpendingInput
        id="spending-shared"
        label="Shared spending"
        value={shared}
        onChange={setShared}
        href={''}
      />
      <SpendingInput
        id="spending-insoo-card"
        label="How much spent on 인수's card"
        value={insooCard}
        onChange={setInsooCard}
        href={''}
      />
      <SpendingInput
        id="spending-jaemin-card"
        label="How much spent on 재민's card"
        value={jaeminCard}
        onChange={setJaeminCard}
        href={''}
      />
      <SpendingInput
        id="spending-jaemin-personal"
        label="재민 personal spending from 인수 card"
        value={jaeminPersonal}
        onChange={setJaeminPersonal}
        href={''}
      />
      <SpendingInput
        id="spending-insoo-personal"
        label="인수 personal spending from 재민 card"
        value={insooPersonal}
        onChange={setInsooPersonal}
        href={''}
      />
      <div>
        Result: {sofiAmount}
      </div>
    </div>
  );
}
