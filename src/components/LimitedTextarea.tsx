import React from 'react'
import {useLocalStorage} from '../local-storage/UseLocalStorage'

type TextareaPropsType = {
    limit: number
    placeholder: string
}

export const LimitedTextarea: React.FC<TextareaPropsType> = ({limit, placeholder}) => {
    const [localValue, setLocalValue] = useLocalStorage('YO', 'textarea')

    return (
        <div style={{position: 'relative', width: '300px', height: '100px'}}>
            <textarea
                style={{position: 'absolute', height: '100px'}}
                maxLength={limit}
                placeholder={placeholder}
                value={localValue}
                onChange={setLocalValue}
            />
            <span
                style={{position: 'absolute', right: '3px', bottom: '3px'}}
            >{limit - localValue.length}</span>
        </div>
    )
}