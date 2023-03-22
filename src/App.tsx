import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Category from "./Category";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState([
    {
      id: 1,
      description: "cc",
      amount: 43,
      category: "Grocery",
    },
    {
      id: 2,
      description: "M",
      amount: 45,
      category: "entertainment",
    },
    {
      id: 3,
      description: "Mdf",
      amount: 45,
      category: "Grocery",
    },
    {
      id: 4,
      description: "Mild",
      amount: 45,
      category: "Grocery",
    },
  ]);
  const isVisible = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;
  return (
    <>
      <div className="mb-4">
        <Form
          onSubmit={(data) =>
            setExpense([...expense, { ...data, id: data.amount + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <Filter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expense={isVisible}
        onDelete={(id) => {
          setExpense(expense.filter((e) => e.id !== id));
        }}
      />
    </>
  );
}

export default App;
