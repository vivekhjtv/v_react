import React from 'react';

function InputField({getValue}) {
  
  return (
    <div>
      <input type="text" placeholder="Enter name" onKeyDown={getValue} />
    </div>
  );
}

export default InputField;
