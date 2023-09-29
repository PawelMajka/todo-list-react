//import "./style.css";
import {List, Item, Content, Button} from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => ( 
      <Item    
        key={task.id}
        hidden={task.done && hideDone}
        //className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
      >
        <Button 
          toogleDone
          //className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}  
        </Content>
        <Button 
          remove
          onClick={() => removeTask(task.id)}
          //className="tasks__button tasks__button--remuve"
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
