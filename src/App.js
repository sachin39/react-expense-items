import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const products = [
    {
    title: "Car",
    price: 2000,
    date: new Date(2023, 3, 27)
  },
  {
    title: "TV",
    price: 500,
    date: new Date(2022, 12, 25)
  },
  {
    title: "Wooden Table",
    price: 200,
    date: new Date(2023, 2, 10)
  },
]

  return (
    <div className='expenses'>
      <ExpenseItem 
        title={products[0].title}
        price={products[0].price}
        date={products[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={products[1].title}
        price={products[1].price}
        date={products[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={products[2].title}
        price={products[2].price}
        date={products[2].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
