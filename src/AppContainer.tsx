import React, {useState} from 'react'
import './App.css'
import {App} from './App'


export const AppContainer = () => {
    const [age, setAge] = useState<number | null>(18)
    const incrementAge = (age: number) => setAge(age + 1)

    const [coords, setCoords] = useState<{x: number, y: number}>({x: 50, y: 50})
    const changeCoords = (x: number, y: number) => setCoords({x, y})
    const styledCoords = {
        left: coords.x + 'px',
        top: coords.y + 'px'
    }

    return (
        <App
            age={age}
            incrementAge={incrementAge}
            changeCoords={changeCoords}
            styledCoords={styledCoords}
        />
    )
}


