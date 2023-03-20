import React from 'react'
import '../App.css'
import {LimitedTextarea} from './LimitedTextarea'
import {ValuesSelectorWithLocalStorage} from './ValuesSelector'
import {ValuableInputWithLocalStorage} from './ValuableInput'


export const HocVsHook = () => {
    const cities = ['Minsk', 'Grodna', 'Brest', 'Magilew']
    const limit = 100

    return (
        <div className="App" style={{padding: '10px'}}>
            <h1>HOC vs HOOK</h1>
            <ValuesSelectorWithLocalStorage
                values={cities}
            />
            <LimitedTextarea
                limit={limit}
                placeholder={'Type something here...'}
            />
            <ValuableInputWithLocalStorage
                placeholder={'Type something here...'}
            />
        </div>
    )
}
