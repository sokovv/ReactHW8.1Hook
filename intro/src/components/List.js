export default function List(props) {
  const { todo, onClick} = props;
  return (
    <ul className="list-name">
      {todo.map((item) => (
        <li key={item.id} className="name" onClick={onClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
