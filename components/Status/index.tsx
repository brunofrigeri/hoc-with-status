import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { STATUS } from '../../contexts/types'

interface StatusProps {
  title?: string
  description?: string
  clearState(): void
  status: STATUS | false
}

const Status = ({ title, description, status, clearState }: StatusProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    setVisible(status !== false)
  }, [status])

  return (
    <Modal isVisible={visible} style={{ margin: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 100,
          marginHorizontal: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 30, color: 'green' }}>{title}</Text>
        <Text>{description}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
          }}
          onPress={clearState}
        >
          <Text>Close modal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default Status
