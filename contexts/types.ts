export enum STATUS {
  SUCCESS,
  ERROR,
  CUSTOM,
}

export type StatusScreen = 'screen_one' | 'screen_two' | undefined

export type StatusContextType = {
  status: STATUS | false
  statusScreen: StatusScreen | undefined
  setStatus(status: STATUS | false): void
  setStatusScreen(statusScreen: StatusScreen | undefined): void
  clearState(): void
  statusOptions: any
}
