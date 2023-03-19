import React, {ChangeEvent} from 'react'
import {withLocalStorage} from '../hoc/WithStorage'


type SelectPropsType = {
    values: Array<string>
    storageValue: string;
    saveStorage: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ValuesSelector: React.FC<SelectPropsType> = ({values, storageValue, saveStorage}) => {

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