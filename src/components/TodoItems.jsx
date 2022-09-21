const TodoItems = (props)=>{
  return (
    <li>
      <h2 className="tit">오늘은 리액트를 공부 할 거예요.({props.num})</h2>
      <label className="sr-only" htmlFor="done">완료</label>
      <input type="checkbox" id="done" className="done" />
      <button className="del">삭제</button>
    </li>
  );
};

export default TodoItems;