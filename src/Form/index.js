import React, { useState, useRef } from "react"; 
import {StyledForm, Input, Button} from "./styled"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputref = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputref.current.focus();
    };

   return (
    <StyledForm onSubmit={onFormSubmit}>
        <Input
            ref={inputref}
            value={newTaskContent}  
            placeholder="Co jest do zrobienia?" 
            onChange={({target}) => setNewTaskContent(target.value)}
        />
        <Button>Dodaj zadanie</Button>
    </StyledForm>
)
};

export default Form;
