import React from 'react'
import './App.css'

type AppPropsType = {
    age: null | number
    incrementAge: (arg: number) => void
    changeCoords: (x: number, y: number) => void
    styledCoords: { left: string, top: string }
}

export const App: React.FC<AppPropsType> = (props) => {
    const {age = 0, incrementAge, styledCoords, changeCoords} = props

    const buttonHandler = () => {
        if (age) incrementAge(age)
    }
    const areaHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        changeCoords(e.clientX, e.clientY)
    }

    return (
        <div className="App" style={{padding: '10px'}}>
            coords:
            <div
                className={'area'}
                onClick={areaHandler}
            >
                <div
                    className={'point'}
                    style={styledCoords}
                ></div>
            </div>
            age: {age}
            <button
                onClick={buttonHandler}
            >+
            </button>
        </div>
    )
}
