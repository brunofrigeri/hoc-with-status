import React from 'react'
import Status from '../components/Status'
import { useStatus } from '../contexts'
import { STATUS } from '../contexts/types'

const withStatus = (ModalComponent?: any) => (Component: any) => {
  return function WithStatus({ children }: any) {
    const { status, statusOptions, clearState } = useStatus()

    if (status !== false) {
      return !!ModalComponent && status === STATUS.CUSTOM ? (
        <ModalComponent status={status} clearState={clearState} />
      ) : (
        <Status {...statusOptions} status={status} clearState={clearState} />
      )
    }

    return <Component>{children}</Component>
  }
}
export default withStatus
