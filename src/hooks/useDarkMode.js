import  useLocalStorage  from './useLocalStorage'

const useDarkMode = (initialValue) => {
    const[value, setValue] = useLocalStorage(initialValue)
    return[value, setValue]
}

export default useDarkMode