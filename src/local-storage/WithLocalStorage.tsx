import React, {ChangeEvent, useCallback, useState} from 'react'



export const withLocalStorage = (storageKey: string) => {
    return (WrappedComponent: React.ComponentType<any>) => {
        return function WithLocalStorage(props: any) {
            const {initialValue, ...restProps} = props

            const [storageValue, setStorageValue] = useState(() => {
                const item = window.localStorage.getItem(storageKey)
                if (item !== null) {
                    return JSON.parse(item) as string | number
                } else return ''
            })

            const saveStorage = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
                const newValue = e.target.value
                setStorageValue(newValue)
                window.localStorage.setItem(storageKey, JSON.stringify(newValue))
            }, [storageKey])

            return <WrappedComponent {...(restProps as any)} storageValue={storageValue} saveStorage={saveStorage}/>
        }
    }
}