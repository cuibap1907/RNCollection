//   EXAMPLE
//   =======
//
// const [isVisible,setIsVisible] = useState(false)
//
// <ConfirmPopup
//   isVisible={isVisible}
//   title={"Title here"}
//   message={"Message here"}
// />

import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Modal from "react-native-modal"
import { colors, spacing } from "../theme"
import { isRTL, translate, TxKeyPath } from "../i18n"
import { Button, Text } from "../components"

interface ImageOptionPopupProps {
  isVisible: boolean
  cameraTitle?: string
  cameraTitleTx?: TxKeyPath
  libraryTitle?: string
  libraryTitleTx?: TxKeyPath
  onCamera?: () => void
  onLibrary?: () => void
}

const MESSAGE: TextStyle = {
  marginTop: spacing.medium,
  fontSize: 16,
}
const TITLE: TextStyle = {
  fontWeight: "bold",
  fontSize: 16,
}
const BUTTON_CONTAINER: ViewStyle = {
  flexDirection: "column",
}
const CONFIRM_BUTTON: ViewStyle = {
  backgroundColor: colors.palette.blue,
}
const CONFIRM_BUTTON_TEXT: TextStyle = { color: colors.palette.white, fontSize: 14 }
const CLOSE_BUTTON_TEXT: TextStyle = { color: colors.palette.subtext, fontSize: 14 }
const CLOSE_BUTTON: ViewStyle = {
  backgroundColor: colors.palette.white,
  borderColor: colors.palette.subtext,
  borderWidth: 1,
  marginRight: spacing.large,
}
const CONTAINER: ViewStyle = {
  backgroundColor: colors.palette.white,
  borderRadius: 8,
  padding: spacing.medium,
}

export function ImageOptionPopup(props: ImageOptionPopupProps) {
  const {
    isVisible,
    cameraTitle,
    cameraTitleTx,
    libraryTitle,
    libraryTitleTx,
    onCamera,
    onLibrary,
  } = props

  return (
    <Modal isVisible={isVisible}>
      <View style={CONTAINER}>
        <View style={BUTTON_CONTAINER}>
          <Button
            style={CONFIRM_BUTTON}
            text={cameraTitle}
            textStyle={CONFIRM_BUTTON_TEXT}
            tx={cameraTitleTx}
            onPress={onCamera}
          />
          <View style={{ height: 16 }} />
          <Button
            style={CONFIRM_BUTTON}
            text={libraryTitle}
            textStyle={CONFIRM_BUTTON_TEXT}
            tx={libraryTitleTx}
            onPress={onLibrary}
          />
        </View>
      </View>
    </Modal>
  )
}
