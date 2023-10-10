import {useState, KeyboardEvent} from 'react';
import * as C from "./styles";
import { keyboard } from '@testing-library/user-event/dist/keyboard';

type Props={
    onEnter:(nomeTarefa: string)=> void 
}
export const AddArea = ({onEnter} : Props) => {
   
    const [inputText,setInputtext]=useState('');
    const keyUp = (e: KeyboardEvent) => {
        if(e.code ==="Enter" && inputText !==''){
            onEnter(inputText);
            setInputtext('');
        }

    }
    return <C.Container>
        <div className="image">➕</div>
        <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e=> setInputtext(e.target.value)}
        onKeyUp={keyUp}/>
    </C.Container>
};