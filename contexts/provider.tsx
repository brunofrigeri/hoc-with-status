import React, { createContext, useEffect, useState } from 'react'
import { STATUS, StatusContextType, StatusScreen } from './types'

export const StatusContext = createContext<StatusContextType>(
  {} as StatusContextType
)

export default function StatusProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [status, setStatus] = useState<STATUS | false>(false)
  const [statusScreen, setStatusScreen] = useState<StatusScreen | undefined>(
    undefined
  )

  const [statusOptions, setStatusOptions] = useState<any>(undefined)

  const clearState = () => {
    setStatus(false)
    setStatusScreen(undefined)
    setStatusOptions(undefined)
  }

  const getStatusScreenProps = () => {
    if (statusScreen) {
      switch (statusScreen) {
        case 'screen_one':
          return {
            title: 'É A TELA UM',
            description: 'Essa é a descrição da tela UM',
          }
        case 'screen_two':
          return {
            title: 'É A TELA DOIS',
            description: 'Essa é a descrição da tela DOIS',
          }

        default:
          break
      }
    }
  }

  useEffect(() => {
    setStatusOptions(getStatusScreenProps())
  }, [status, statusScreen])

  return (
    <StatusContext.Provider
      value={{
        status,
        statusScreen,
        setStatus,
        setStatusScreen,
        statusOptions,
        clearState,
      }}
    >
      {children}
    </StatusContext.Provider>
  )
}
