import { useState } from 'react';

const categories = [
  { id: '135597909102374783', label: 'Gas' },
  { id: '135912618631442218', label: 'Auto Insurance' },
  { id: '135915254674959713', label: 'Auto Registration' },
  { id: '135597909102374784', label: 'Auto Maintenance' },
  { id: '135597909111811979', label: 'Groceries' },
  { id: '135597909112860556', label: 'Restaurants' },
  { id: '135597909113909134', label: 'Travel & Vacation' },
  { id: '135597909114957711', label: 'Entertainment & Recreation' },
  { id: '135597909118103443', label: 'Shopping' },
  { id: '135597909120200597', label: 'Home Goods' },
  { id: '135901692975984527', label: 'Laundry' },
];

// Manually set end dates for months instead of adding a whole lib
const endDates = {
  '01': '31',
  '02': '28',
  '03': '31',
  '04': '30',
  '05': '31',
  '06': '30',
  '07': '31',
  '08': '31',
  '09': '30',
  '10': '31',
  '11': '30',
  '12': '31',
};

/** Maps our internal state to a direct link to Monarch with query-string */
export default function MonarchButton({ month, year }) {
  const baseUrl = 'https://app.monarchmoney.com/transactions';
  let href = `${baseUrl}?`;

  // Date - ISO string
  const monthIso = month < 9 ? `0${month + 1}` : month + 1;
  const startDate = `${year}-${monthIso}-01`;
  const endDate = `${year}-${monthIso}-${endDates[monthIso]}`;
  href += `startDate=${startDate}&endDate=${endDate}`;

  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer noopener">
        Open in Monarch
      </a>
      <pre>{href}</pre>
    </div>
  );
}
