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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      }}
    >
      <TouchableOpacity
        style={{ backgroundColor: 'white', padding: 16 }}
        onPress={onPressFirstScreen}
      >
        <Text>OPEN MODAL 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 100, backgroundColor: 'white', padding: 16 }}
        onPress={onPressSecondScreen}
      >
        <Text>OPEN MODAL 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 100 }} onPress={onPress}>
        <Text>OPEN MODAL CUSTOM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default withStatus(Status)(Welcome)
