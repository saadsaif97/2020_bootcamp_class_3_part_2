import { useState } from 'react'
import { Conditional } from './components/conditional/Conditional'
import { Header } from './components/header/Header'

export default function App() {
  let horizontalPositions = ['flex-start', 'center', 'flex-end']
  let verticalPositions = ['flex-start', 'center', 'flex-end']

  let [isLit, setLit] = useState(false)

  let [horizontal, setHorizontal] = useState(horizontalPositions[0])
  let [vertical, setVertical] = useState(verticalPositions[0])

  let [roomTemp, setRoomTemp] = useState(72)

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
        height: '100%',
        width: '100vw',
        ...wrapperStyles,
      }}
    >
      <div className='container'>
        <Header />
        <hr />
        <button className='btn' onClick={() => setRoomTemp(++roomTemp)}>
          ↑ Increase Room Temperature
        </button>
        <button className='btn' onClick={() => setRoomTemp(--roomTemp)}>
          ↓ Decrease Room Temperature
        </button>
        <h3 style={{ margin: '20px 0' }}>
          Room Temperature: <strong>{roomTemp}</strong>
        </h3>

        <hr />

        <button
          className='btn'
          onClick={() => setLit(true)}
          disabled={isLit ? true : false}
        >
          ON
        </button>
        <button
          className='btn'
          onClick={() => setLit(false)}
          disabled={!isLit ? true : false}
        >
          OFF
        </button>

        <hr />

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
