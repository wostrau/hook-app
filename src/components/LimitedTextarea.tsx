import React, {ChangeEvent} from 'react'
import {withLocalStorage} from '../hoc/WithStorage'

type TextareaPropsType = {
    limit: number
    placeholder: string
    storageValue: string;
    saveStorage: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const LimitedTextarea: React.FC<TextareaPropsType> = ({limit, placeholder, storageValue, saveStorage}) => {

    return (
        <div style={{position: 'relative', width: '300px', height: '100px'}}>
            <textarea
                style={{position: 'absolute', height: '100px'}}
                maxLength={limit}
                placeholder={placeholder}
                value={storageValue}
                onChange={saveStorage}
            />
            <span
                style={{position: 'absolute', right: '3px', bottom: '3px'}}
            >{limit - storageValue.length}</span>
        </div>
    )
}

export const LimitedTextareaWithLocalStorage = withLocalStorage('textarea')(LimitedTextarea)