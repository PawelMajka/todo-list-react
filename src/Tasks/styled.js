import styled, {css} from "styled-components"

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px;
`;

export const Item = styled.li`
   display: grid; 
   grid-template-columns: auto 1fr auto;
   grid-gap: 20px;
   align-items: center;
   padding: 10px;
   border-bottom: 1px solid #ddd;

   ${({hidden}) =>  hidden && css`
        display: none   
   `}
`;

export const Content = styled.span`
    ${({done}) =>  done && css`
        text-decoration: line-through;
    `}   
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    color: white;
    transition: background 0.3s;

   ${({toogleDone}) =>  toogleDone && css`
        background-color: hsl(120, 100%, 25%); 
        
        &:hover {
            background-color: hsl(120, 100%, 35%);
        }

        &:active {
            background-color: hsl(120, 100%, 45%); 
            border: 1px solid black;
        }
   `}

   ${({remove}) =>  remove && css`
        background-color: hsl(0, 100%, 40%); 

        &:hover {
            background-color: hsl(0, 100%, 50%);
        }

        &:active {
            background-color: hsl(0, 100%, 70%);
            border: 1px solid black;
        }
   `}
`;