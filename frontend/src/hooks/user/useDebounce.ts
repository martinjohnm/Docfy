import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Set a timeout to update debounced value after the delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup the timeout if the value or delay changes before the timeout finishes
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Re-run when value or delay changes

    return debouncedValue;
}

export default useDebounce;
