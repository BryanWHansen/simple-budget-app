import Table from "./components/Table";
import { BudgetItem } from "./App.interfaces";
import Form from "./components/Form";
import { useState } from "react";
import TableFilter from "./components/TableFilter";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";

let items: BudgetItem[] = [];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [exspenses, setExspenses] = useState(items);
  const visibleExpenses = selectedCategory
    ? exspenses.filter((e) => e.category === selectedCategory)
    : exspenses;
  return (
    <>
      <div className="mb-3">
        <Accordion>
          <AccordionItem eventKey="0">
            <AccordionHeader>
              <b>Add an Exspense</b>
            </AccordionHeader>
            <AccordionBody>
              <Form
                onSubmit={(expense) =>
                  setExspenses([
                    ...exspenses,
                    { ...expense, id: exspenses.length + 1 },
                  ])
                }
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-3">
        <TableFilter
          expenses={exspenses}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <Table
          exspenses={visibleExpenses}
          onDelete={(id) => setExspenses(exspenses.filter((e) => e.id != id))}
        />
      </div>
    </>
  );
};

export default App;
