import React from 'react';
import Task from './Task';

export default function TaskList({list, id, state1}) {
  return (
    <div id={id}>
      {list.map((item) => (
        <Task state2={state1} key={item.id} item={item} />
      ))}
    </div>
  );
}
