import React, {ChangeEvent} from 'react'
import {withLocalStorage} from '../local-storage/WithLocalStorage'


type ValuesSelector = {
    values: Array<string>
    storageValue: string;
    saveStorage: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ValuesSelector: React.FC<ValuesSelector> = ({values, storageValue, saveStorage}) => {

    return (
        <select
            value={storageValue}
            onChange={saveStorage}
        >
            {values.map((v, i) => <option key={i} value={v}>{v}</option>)}
        </select>
    )
}

export const ValuesSelectorWithLocalStorage = withLocalStorage('selector')(ValuesSelector)