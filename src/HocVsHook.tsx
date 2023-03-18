import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'

type HocVsHookPropsType = {}

export const HocVsHook: React.FC<HocVsHookPropsType> = (props) => {
    const {} = props


    return (
        <div className="App" style={{padding: '10px'}}>
            <h1>HOC vs HOOK</h1>
            <Select values={['Minsk', 'Grodna', 'Brest', 'Magilew']} value={'Mordor'}/>
            <TextareaWithLimit
                limit={100}
                placeholder={'Comment'}
                value={'YO'}
            />
        </div>
    )
}

type TextareaPropsType = { limit: number, placeholder: string, value: string }
const TextareaWithLimit: React.FC<TextareaPropsType> = ({limit, value = '', ...props}) => {
    const [textValue, setTextValue] = useState<string>(value)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.currentTarget.value)
        localStorage.setItem('textareaValue', e.currentTarget.value)
    }

    useEffect(() => {
        const localStorageValue = localStorage.getItem('textareaValue')
        if (localStorageValue) setTextValue(localStorageValue)
    }, [])

    return (
        <div style={{position: 'relative', width: '300px', height: '100px'}}>
            <textarea
                style={{position: 'absolute', height: '100px'}}
                {...props}
                maxLength={limit}
                value={textValue}
                onChange={onChangeHandler}
            />
            <span
                style={{position: 'absolute', right: '3px', bottom: '3px'}}
            >{limit - textValue.length}</span>
        </div>
    )
}


type SelectPropsType = { values: Array<string>, value: string }
const Select: React.FC<SelectPropsType> = ({values, value = ''}) => {
    const [currentValue, setCurrentValue] = useState<string>(value)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentValue(e.currentTarget.value)
        localStorage.setItem('selectValue', e.currentTarget.value)
    }

    useEffect(() => {
        const localStorageValue = localStorage.getItem('selectValue')
        if (localStorageValue) setCurrentValue(localStorageValue)
    }, [])

    return (
        <select
            value={currentValue}
            onChange={onChangeHandler}
        >
            {values.map(v => <option value={currentValue}>{v}</option>)}
        </select>
    )
}


