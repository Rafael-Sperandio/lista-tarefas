import { type } from "@testing-library/user-event/dist/type";
import * as C from "./styles";
import {Item} from "../../types/item";
import { useState } from "react";
type Props ={
    item: Item
    //onChange: (id: number, done: boolean) => void
    onChange: (i: Item) => void
}
export const ListItem = ({item,onChange }: Props) =>{
    const [ehAsinalado,setEhAsinalado] = useState(item.feito)
    
    return(
    <C.Container feito={ehAsinalado} >
        <input 
        type="checkbox" 
        checked={ehAsinalado}
        //onChange={e=>()}
        //onChange={e=> {onchange(item)}}
        //
        onChange={e=> {setEhAsinalado(e.target.checked);
        item.feito=e.target.checked;
        onChange(item);
       // onChange(item.id,e.target.checked);
        }}
        />
        {//codigo normal
        <label>{item.name}</label>
        }
        {//teste para ver se o valor de feito muda
        //<label>{item.name} - {item.feito.toString()} </label>
        }
    </C.Container>
    
    
    );
    /*
    {
      id: item.id;
      name: nomeTarefa,
      feito:false
    }
    */
}