import { BudgetItem } from "../App.interfaces";

interface TableProps {
  exspenses: BudgetItem[];
  onDelete: (id: number) => void;
}

const total = (exspenses: BudgetItem[]): number => {
  return exspenses.reduce((total, item) => {
    return total + item.amount;
  }, 0)
}

const Table = ({exspenses, onDelete}: TableProps) => {
  if (exspenses.length === 0) {
    return null;
  }
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {exspenses.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>{item.category}</td>
            <td><button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
          <tfoot>
            <tr>
              <td><b>Total</b></td>
              <td>${total(exspenses).toFixed(2)}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
      </table>
    </>
  );
};

export default Table;
