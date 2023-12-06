import React from 'react';
import style from '../components/DisplayList.module.css';
function DisplayList({ inputVal }) {
  return (
    <div>
      <h1 className={style.inputDisplay}>{inputVal}</h1>
    </div>
  );
}

export default DisplayList;
