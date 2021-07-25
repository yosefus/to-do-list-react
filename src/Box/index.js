import Title from './Title';
import Form from './Form';
import TaskList from '../components/TaskList';
import {useState} from 'react';

export default function Box() {
  const [mainList, setList] = useState([
    {name: 'do my makeup', doing: false, id: 1},
    {name: 'do my beard', doing: true, id: 2},
  ]);

  function onSub(values) {
    values.doing = false;
    values.id = Math.floor(1000 + Math.random() * 9000);
    setList([...mainList, values]);
  }

  return (
    <div className="to-do-box">
      <Title />
      <Form fn={onSub} />
      <TaskList state1={setList} list={mainList.filter((item) => !item.doing)} id="toDo" />
      <h2>did it</h2>
      <TaskList list={mainList.filter((item) => item.doing)} id="doAlready" />
    </div>
  );
}
