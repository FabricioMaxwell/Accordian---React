import { useState } from 'react'
import './App.css'
import data from "./data"


function App() {
 const [selected, setSelected] = useState(null);
 const [enableMultiSelected, setEnableMultiSelected] = useState(false);
 const [multiple, setMultiple] = useState([]);

 function handleSingleSelection(getCurrentId) {
  setSelected(getCurrentId === selected ? null : getCurrentId);
 }

 function handMultiSelection(getCurrentId) {
  let cpyMultiple = [...multiple];
  const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

  if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
  else cpyMultiple.splice(findIndexOfCurrentId, 1);

  setMultiple(cpyMultiple);
 }

 console.log(selected)

  return (
    <>
      <div className='acc-wrapper'>
        <button onClick={() => setEnableMultiSelected(!enableMultiSelected)}>Ativar seleção múltipla</button>

        <div className='accordian'>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className='item'>
                <div className='title' onClick={enableMultiSelected ? () => handMultiSelection(dataItem.id): () => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelected
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              </div>))):(
              <div>No data found!</div>
              )}
        </div>
      </div>
    </>
  )
}

export default App
