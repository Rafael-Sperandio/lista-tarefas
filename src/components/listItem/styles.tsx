import styled from 'styled-components';

type ContainerProps = {
    feito: boolean;
}
//({feito}: ContainerProps)=>
/*
jeito antigo usando uma arrow fuction ( ()=> () )
export const Container = styled.div(({ feito } : ContainerProps)=> (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radious: 10px;
    margin-bottom: 10px;
    align-items: center;
    
    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    label{
        collor: #ccc;
    }
    `
));
*/
 //text-decoration: ${feito ? 'line-through' :'initial'

 // : ContainerProps}>`
export const Container = styled.div<{ feito  : boolean}>` 
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radious: 10px;
    margin-bottom: 10px;
    align-items: center;
    
    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    label{
        collor: #ccc;
        //text-decoration: line-through;
        text-decoration: ${ContainerProps => ContainerProps.feito ? 'line-through' :'initial'} 
    };
     
    `;

