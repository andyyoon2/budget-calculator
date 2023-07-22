export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function DateSelector({ year, setYear, month, setMonth }) {
  const handleSelectYear = (event) => {
    setYear(event.target.value);
  }
  const handleSelectMonth = (event) => {
    setMonth(parseInt(event.target.value, 10));
  }

  return (
    <div>
      <label for="year-select">Choose year</label>
      <select name="year" id="year-select" onChange={handleSelectYear}>
        <option value="2023" selected={year === 2023}>2023</option>
        <option value="2022" selected={year === 2022}>2022</option>
      </select>
      <label for="month-select">Choose month</label>
      <select name="month" id="month-select" onChange={handleSelectMonth}>
        {months.map((monthName, i) => (
          <option key={i} value={i} selected={month === i}>{monthName}</option>
        ))}
      </select>
    </div>
  );
}
