import React from 'react'
import '../App.css'
import {LimitedTextareaWithLocalStorage} from './LimitedTextarea'
import {ValuesSelectorWithLocalStorage} from './SelectPropsType'


export const HocVsHook = () => {
    const cities = ['Minsk', 'Grodna', 'Brest', 'Magilew']
    const limit = 100



    return (
        <div className="App" style={{padding: '10px'}}>
            <h1>HOC vs HOOK</h1>
            <ValuesSelectorWithLocalStorage
                initialValue={'Minsk'}
                values={cities}
            />
            <LimitedTextareaWithLocalStorage
                initialValue={'YO'}
                limit={limit}
                placeholder={'Type something here...'}
            />
        </div>
    )
}
