import React from 'react'
import StatusProvider from './contexts/provider'
import Welcome from './pages/Welcome'

export default function App() {
  return (
    <StatusProvider>
      <Welcome />
    </StatusProvider>
  )
}
