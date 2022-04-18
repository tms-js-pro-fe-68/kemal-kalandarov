import { useEffect, createContext, useContext, useState, useMemo } from 'react'
import api from '../api'

const Context = createContext()

export const useAppContext = () => useContext(Context)

export default function AppContextProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  const [cart, setCart] = useState({})

  useEffect(() => {
    if (!sessionStorage.token) return

    api.setup(sessionStorage.token)
    setIsInitialized(true)
  }, [])

  const value = useMemo(
    () => ({ isInitialized, setIsInitialized, cart, setCart }),
    [isInitialized, setIsInitialized, cart, setCart],
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}
