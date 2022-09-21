import TodoItems from "./TodoItems";

const TodoBody = ()=>{
  return (
    <section>
      <ul>
        <TodoItems num={1} />
        <TodoItems num={2} />
        <TodoItems num={3} />
        <TodoItems num={4} />
        <TodoItems num={5} />
        <TodoItems num={6} />
        <TodoItems num={7} />
        <TodoItems num={8} />
        <TodoItems num={9} />
        <TodoItems num={10} />
      </ul>
    </section>
  );
};

export default TodoBody;