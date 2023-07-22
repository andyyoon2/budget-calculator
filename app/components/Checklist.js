const CHECKLIST_ITEMS = [
  { id: 'verify-transactions', label: 'Verify transactions with credit card statements' },
  { id: 'check-shared-spending', label: 'Write down total shared spending for the month' },
  { id: 'check-card-balances', label: "See how much we paid from each person's credit card" },
  { id: 'subtract-individual', label: 'Subtract any amount that each person is paying on their own' },
  { id: 'check-reimbursements', label: "Check for any reimbursements that didn't go to the same payment card" },
  { id: 'check-unshared', label: "Check for any unshared categories where someone bought on the other's card" },
  { id: 'pay-sofi', label: 'Pay the shared amount from the SoFi account' },
  { id: 'pay-personal', label: 'Pay the rest of our bills from personal account' },
];

function Checkbox({ id, label }) {
  return (
    <div>
      <input id={`${id}-checkbox`} type='checkbox' />
      <label for={`${id}-checkbox`}>{label}</label>
    </div>
  );
}

export default function Checklist() {
  return (
    <div>
      {CHECKLIST_ITEMS.map(item => <Checkbox key={item.id} {...item} />)}
    </div>
  );
}
