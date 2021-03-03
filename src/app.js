import { useState } from 'react'
import { Conditional } from './components/conditional/Conditional'

export default function App() {
  let horizontalPositions = ['flex-start', 'center', 'flex-end']
  let verticalPositions = ['flex-start', 'center', 'flex-end']

  let [isLit, setLit] = useState(false)

  let [horizontal, setHorizontal] = useState(horizontalPositions[0])
  let [vertical, setVertical] = useState(verticalPositions[0])

  const moveRight = () => {
    let currentPosition = horizontalPositions.indexOf(horizontal)
    let newPosition
    currentPosition === 2
      ? (newPosition = 0)
      : (newPosition = ++currentPosition)
    setHorizontal(horizontalPositions[newPosition])
  }

  const moveDown = () => {
    let currentPosition = verticalPositions.indexOf(vertical)
    let newPosition
    currentPosition === 2
      ? (newPosition = 0)
      : (newPosition = ++currentPosition)
    setVertical(verticalPositions[newPosition])
  }

  const wrapperStyles = isLit
    ? { backgroundColor: 'white', color: 'black' }
    : { backgroundColor: 'black', color: 'white' }

  return (
    <div
      style={{
        paddingTop: '50px',
        height: '100vh',
        width: '100vw',
        ...wrapperStyles,
      }}
    >
      <div className='container'>
        <button className='btn' onClick={() => setLit(!isLit)}>
          Lights {isLit ? 'OFF' : ' ON'}
        </button>
        <h1 style={{ margin: '20px 0' }}>Use the buttons to move image</h1>
        <button className='btn' onClick={moveDown}>
          ↓
        </button>
        <button className='btn' onClick={moveRight}>
          →
        </button>
        <Conditional
          sunnyWeather={true}
          horizontalPlace={horizontal}
          verticalPlace={vertical}
        />
      </div>
    </div>
  )
}
