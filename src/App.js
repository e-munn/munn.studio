import { useState, useEffect } from 'react'
import './App.css'
import '@aws-amplify/ui-react/styles.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './main/home/home'
import { Head } from './main/head/head'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Auth, Hub } from 'aws-amplify'
import { AnimatePresence } from 'framer-motion'
import theme from './theme'

return (
  <>
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <CssBaseline />
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Head user={user} />}>
            <Route index element={<Home user={user} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  </>
)

export default App
