import { BudgetItem, categories } from "../App.interfaces";

interface TableFilterProps {
  expenses: BudgetItem[];
  onSelectCategory: (category: string) => void;
}

const TableFilter = ({ expenses, onSelectCategory }: TableFilterProps) => {
  if (expenses.length === 0) {
    return null;
  }
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default TableFilter;
