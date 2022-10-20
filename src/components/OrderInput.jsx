import React from 'react';
import { useState } from 'react';
import '../styles/components/OrderInput.scss'

const OrderInput = ({label, type, required, name, numInputs}) => {
  const [firstInputValue, setFirstInputValue] = useState('')
  const isRif = name.toLowerCase() === 'rif'
  
  const handleNextInput = ({target}) => {
    setFirstInputValue(target.value)
    if(numInputs === 1) return

    const inputId = `${name}-input2`
    const nextInput = document.querySelector(`#${inputId}`)
    const nextInValue = isRif ? 1 : 4
    if(target.value.length >= nextInValue) { 
      setFirstInputValue(target.value.substring(0, nextInValue))    
      nextInput.focus()
    }
  }

  const renderOneInput = (placeholder = '') => (
    <input 
      placeholder={placeholder}
      type={type} 
      id={`${name}-input`} 
      required={required} 
      onChange={handleNextInput}
      value={firstInputValue}
    />
  )

  const renderTwoInputs = isRif => (
    <div className='two-input-wrapper'>
      {renderOneInput(isRif ? 'J' : '0414')}
      <input 
        type={type} 
        id={`${name}-input2`} 
        required={required} 
      />
    </div>
  )

  return (
    <div className='OrderInput'>
      <label htmlFor={`${name}-input`}>
        {label}
        <sup>{required ? '*' : '(opcional)'}</sup>
      </label>

      {numInputs === 1 ? renderOneInput() : renderTwoInputs(isRif)}
    </div>
  );
}
 
export default OrderInput;