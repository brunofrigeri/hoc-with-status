import React, { useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Status from '../components/Status'
import { useStatus } from '../contexts'
import { STATUS } from '../contexts/types'
import withStatus from '../hoc/withStatus'

function Welcome() {
  const { status, statusScreen, setStatus, setStatusScreen } = useStatus()

  const onPressFirstScreen = () => {
    setStatus(STATUS.SUCCESS)
    setStatusScreen('screen_one')
  }

  const onPressSecondScreen = () => {
    setStatus(STATUS.SUCCESS)
    setStatusScreen('screen_two')
  }

  const onPress = () => {
    setStatus(STATUS.CUSTOM)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>alo</Text>
      <TouchableOpacity onPress={onPressFirstScreen}>
        <Text>ABRIR MODAL 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 100 }}
        onPress={onPressSecondScreen}
      >
        <Text>ABRIR MODAL 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 100 }} onPress={onPress}>
        <Text>ABRIR MODAL CUSTOM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default withStatus(Status)(Welcome)
