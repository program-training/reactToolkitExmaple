import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector } from './redux/hooks'
import { useDispatch } from 'react-redux'
import { increment } from './redux/counterSlice'
import ShowCounterValue from './ShowCounterValue';
import DecrementCounter from './DecrementCounter'
function App() {
  const dispatch = useDispatch()
  //const count = useAppSelector(state => state.counter.value)
  const handleClick = () => {
     dispatch(increment())
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
         <ShowCounterValue />
        </button>
        <p>
          <DecrementCounter />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
