import React, {useState} from 'react'
import './App.css'
import {App} from './App'


export const AppContainer = (props: any) => {
    const [age, setAge] = useState<number | null>(18)
    const incrementAge = (age: number) => setAge(age + 1)

    return (
        <App
            {...props}
            age={age}
            incrementAge={incrementAge}
        />
    )
}


