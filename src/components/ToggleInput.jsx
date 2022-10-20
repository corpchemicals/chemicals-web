import React from 'react';
import '../styles/components/ToggleInput.scss';

const ToggleInput = ({label, toggleState, setToggleState}) => {
  const id = `toggle-input-${label}`

  const handleToggleState = ({target}) => { 
    const isChecked = target.checked 
    setToggleState(isChecked)
  }

  return (
    <div className='ToggleInput'>
      <div className={`ToggleInput__styled-checkbox ${toggleState ? 'checked' : ''}`}>
        <input type="checkbox" id={id} onChange={handleToggleState} checked={toggleState}/>
        <span className='circle'></span>
      </div>
      <label htmlFor={id} className={toggleState ? 'checked' : ''}>{label}</label>
    </div>
  );
}
 
export default ToggleInput;