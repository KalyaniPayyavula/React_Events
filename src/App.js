import React, {useState} from 'react'
import List from './components/List'
import './App.css'

function App() {
  const ItemsList = [{name: "Water melon", calories: "10"},
                     {name: "Candy", calories: "100"},
                     {name: "Ice cream", calories: "80"},
                     {name: "Plum", calories: "30"},
                     {name: "Sprouts", calories: "40"}]

  const [list, setList] = useState(ItemsList);

const removeJunk = (e) => {
 const filteredList = ItemsList.filter((v) => v.calories > 50)
 setList(filteredList)
}

const addAll = (e) => {
 setList(ItemsList)
 }

 const removeIndividualItem = (e) => {
 const newList = list.filter(v => v.name !== e.target.name)
 setList(newList)
 }

  return (
    <div className="App">
  
    {
      list.map((v,i) => {
        return <List name={v.name} onClick={removeIndividualItem} calories={v.calories} key={`${i}${v.name}${v.calories}`}></List>
      })
    }
 
 <button onClick={removeJunk} className = "button-style">Remove Junk Food</button>
 <button onClick={addAll} className = "button-style">Display All Items</button>
    </div>
  );
}

export default App;