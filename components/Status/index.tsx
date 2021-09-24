import React, { useEffect, useState } from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'
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
    console.log(status)
    setVisible(status !== false)
  }, [status])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      }}
    >
      <Modal visible={visible} style={{}}>
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
            <Text>Fechar modal</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
      </View> */}
      </Modal>
    </View>
  )
}

export default Status
