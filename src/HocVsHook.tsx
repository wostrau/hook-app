import React, {ChangeEvent, useState} from 'react'
import './App.css'

type HocVsHookPropsType = {}

export const HocVsHook: React.FC<HocVsHookPropsType> = (props) => {
    const {} = props


    return (
        <div className="App" style={{padding: '10px'}}>
            <h1>HOC vs HOOK</h1>
            <Select values={['Minsk', 'Grodna', 'Brest', 'Magilew']}/>
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
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTextValue(e.currentTarget.value)

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

type SelectPropsType = {
    values: Array<string>
}

const Select: React.FC<SelectPropsType> = ({values}) => {
    return (
        <select>
            {values.map(v => <option value={'City'}>{v}</option>)}
        </select>
    )
}


