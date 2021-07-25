import React from 'react';

export default function Task({item, state2}) {
  function deleteTaskById(id) {
    console.log(state2);
  }
  function changeDoing() {
    console.log('j');
  }
  return (
    <label className="b-contain">
      <span className="btn-x" onClick={() => deleteTaskById(item.id)}>
        <i className="fas fa-times"></i>
      </span>
      <span className={item.doing ? 'name-checked' : 'name'}>{item.name}</span>
      <div onClick={() => changeDoing(item.id)} className={item.doing ? 'btn-v-checked' : 'btn-v'}>
        <i className="fas fa-check"></i>
      </div>
    </label>
  );
}
