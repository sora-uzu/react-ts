import Todo from '../models/todo'

type TodosProps = { items: Todo[] };


const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
