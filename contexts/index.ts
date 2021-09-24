import { useContext } from 'react'
import { StatusContext } from './provider'
import { StatusContextType } from './types'

export const useStatus = (): StatusContextType => {
  return useContext(StatusContext)
}
