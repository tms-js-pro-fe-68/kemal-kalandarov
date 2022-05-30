// import { useEffect, useState } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
// import PizzasPage from './pages/PizzasPage'
import PizzaPage from './pages/PizzasPage/PizzaPage'
import theme from './theme'
import AppContextProvider from './components/AppContext'
import store from './store'
import ReduxTestPage from './pages/ReduxTestPage'
import HomePageRedux from './pages/HomePageRedux'

const PizzasPage = lazy(() => import('./pages/PizzasPage'))

export function setRandomColour() {
  const r = Math.floor(Math.random() * 11)
  const g = Math.floor(Math.random() * 11)
  const b = Math.floor(Math.random() * 11)

  const rHex = r.toString(16)
  const gHex = g.toString(16)
  const bHex = b.toString(16)
  return `#${rHex}${gHex}${bHex}`
}

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   staleTime: Infinity,
    // },
  },
})

export default function App() {
  // const [customTheme, setCustomTheme] = useState(theme)
  // useEffect(() => {
  //   setInterval(() => {
  //     setCustomTheme(prevTheme => ({
  //       ...prevTheme,
  //       palette: {
  //         ...prevTheme.palette,
  //         primary: {
  //           ...prevTheme.palette.primary,
  //           main: setRandomColour(),
  //         },
  //         secondary: {
  //           main: setRandomColour(),
  //         },
  //       },
  //     }))
  //   }, 100)
  // }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <AppContextProvider>
            <QueryClientProvider client={queryClient}>
              <Router>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/pizzas/:id" element={<PizzaPage />} />
                  <Route path="/pizzas" element={<PizzasPage />} />
                  <Route path="/redux-test" element={<ReduxTestPage />} />
                  <Route path="/redux-home-page" element={<HomePageRedux />} />
                  {/* <Route path="/:id" element={<PizzaPage />} /> */}
                  <Route path="/" element={<HomePage />} exact />
                </Routes>
              </Router>
            </QueryClientProvider>
          </AppContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  )
}
