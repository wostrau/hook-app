import React, {ChangeEvent, useCallback, useState} from 'react'


type LocalStorageProps = {
    initialValue: string | number
}

export const withLocalStorage = (storageKey: string) => (
    WrappedComponent: React.ComponentType<T>
) {
    return function WithLocalStorage(props: LocalStorageProps & any) {
        const {initialValue, storageKey, ...restProps} = props

        const [storageValue, setStorageValue] = useState(() => {
            const item = window.localStorage.getItem(storageKey)
            if (item !== null) {
                return JSON.parse(item) as string | number
            }
            if (typeof initialValue === 'string') {
                return ''
            }
            if (typeof initialValue === 'number') {
                return 0
            }
            return ''
        })

        const saveStorage = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
            const newValue = e.target.value
            setStorageValue(newValue)
            window.localStorage.setItem(storageKey, JSON.stringify(newValue))
        }, [storageKey])

        return <WrappedComponent {...(restProps as T)} storageValue={storageValue} saveStorage={saveStorage}/>
    }
}