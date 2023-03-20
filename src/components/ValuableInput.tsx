import React, {ChangeEvent} from 'react'
import {withLocalStorage} from '../local-storage/WithLocalStorage'

type InputPropsType = {
    storageValue: string;
    saveStorage: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ValuableInput = (props: InputPropsType) => {
    return (
        <div>
            <input
                value={props.storageValue}
                onChange={props.saveStorage}
                {...props}/>
        </div>
    )
}

export const ValuableInputWithLocalStorage = withLocalStorage('input')(ValuableInput)