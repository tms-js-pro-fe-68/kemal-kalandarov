import { createContext, useContext } from 'react'

const Context = createContext()

export const useHomePageContext = () => useContext(Context)

export default function HomePageContextProvider({ children, context }) {
  return <Context.Provider value={context}>{children}</Context.Provider>
}
