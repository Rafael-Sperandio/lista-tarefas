import { useState } from "react";
import * as C from "./app.styles";
import {Item} from "./types/item";
import {ListItem} from "./components/listItem";
import {AddArea} from "./components/AddArea"
const App = () => {
  const [list, setList]=useState<Item[]>([
    {id: 1, name: "estudar", feito:false},
    {id: 2, name: "Comprar pão", feito:false},
  ]);
  const controlaTarefa = (nomeTarefa: string) =>{
    let auxList= [...list];
    auxList.push({
      id: list[list.length-1].id+1,
      name: nomeTarefa,
      feito:false
    });
    setList(auxList);
  }
    // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].feito = done;
      }
    }
    setList(newList);
  }

  const updateTarefa = (oldItem: Item) =>{
    let auxlist = list.map(item => {
      if(item.id===oldItem.id){
        return oldItem;
      }
      return item
    }); //[...list];
    setList(auxlist);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>
        Lista de tarefas  
        </C.Header>
       {/* area para add nova tarefa*/}
        <AddArea onEnter={controlaTarefa} />
 
        {/* lista de tarefas*/}
        {list.map((item,index)=>(
          <ListItem 
          key={index} 
          item={item}
          //onChange={handleTaskChange}
          onChange={updateTarefa}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
