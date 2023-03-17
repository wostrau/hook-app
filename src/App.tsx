import React from 'react'

export const App: React.FC<AppPropsType> = ({age = 0, incrementAge}) => {
    const buttonHandler = () => incrementAge(age)

    return (
        <div className="App" style={{padding: '10px'}}>
            age: {age}
            <button
                onClick={buttonHandler}
            >+
            </button>
        </div>
    )
}
type AppPropsType = {
    age: number
    incrementAge: (arg: number) => void
}