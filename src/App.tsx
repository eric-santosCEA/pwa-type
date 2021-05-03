import { useState} from 'react'
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
      description?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "tony hawk",
      img: "https://images.pexels.com/photos/4734802/pexels-photo-4734802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      age: 36, 
      note: "",
      description: "skateboard"
    }
  ])
 

  return (
    <div className="App">
     <h1>People invited</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
