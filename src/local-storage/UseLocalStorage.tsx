import { ChangeEventHandler, useCallback, useState } from "react";

export const useLocalStorage = <T extends string | number>(
    initialValue: T,
    storageKey: string
): [T, ChangeEventHandler<HTMLTextAreaElement>] => {
    const [storageValue, setStorageValue] = useState(() => {
        const item = window.localStorage.getItem(storageKey);
        if (item !== null) {
            return JSON.parse(item) as T;
        }
        return initialValue;
    });

    const saveStorage = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
        (event) => {
            const newValue = event.target.value as T;
            setStorageValue(newValue);
            window.localStorage.setItem(storageKey, JSON.stringify(newValue));
        },
        [storageKey]
    );

    return [storageValue, saveStorage];
};
