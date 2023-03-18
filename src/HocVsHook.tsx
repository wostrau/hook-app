import React from 'react'
import './App.css'

type HocVsHookPropsType = {}

export const HocVsHook: React.FC<HocVsHookPropsType> = (props) => {
    const {} = props


    return (
        <div className="App" style={{padding: '10px'}}>
            <h1>HOC vs HOOK</h1>
            <Select values={['Minsk', 'Grodna', 'Brest', 'Magilew']}/>
            <TextareaWithLimit limit={100} placeholder={'Comment'}/>
        </div>
    )
}

const TextareaWithLimit: React.FC<{ limit: number, placeholder: string }> = ({limit, ...props}) => {

    return (
        <div style={{position: 'relative'}}>
            <textarea
                style={{position: 'absolute'}}
                {...props}
                name="TextareaWithLimit"
                cols={20}
                rows={5}
            />
            <span>{limit}</span>
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


