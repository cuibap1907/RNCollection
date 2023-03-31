import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import {
  ScrollView,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  Image,
  TouchableOpacity,
  ImageStyle,
} from "react-native"
import { ImagePickerResponse } from "react-native-image-picker"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { selectPhoto, getFilePath } from "../utils/helpers"
import RNFS from "react-native-fs"
import { forEach, isEmpty, map } from "lodash"
import { ImageOptionPopup } from "./ImageOptionPopup"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}
const MAX_PHOTO = 10

export const CheckCameraScreen: FC<LoginScreenProps> = observer(function CheckCameraScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [photos, setPhotos] = useState<any>([])
  const [showImageOpt, setShowImageOpt] = useState(false)

  const {
    authenticationStore: {
      authEmail,
      authPassword,
      setAuthEmail,
      setAuthPassword,
      setAuthToken,
      validationErrors,
    },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credientials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
  }, [])

  const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

  function takeImage() {
    setShowImageOpt(true)
  }

  let imgList = [...photos]
  const onHideOption = () => {
    setShowImageOpt(false)
  }

  const onlyTakePhoto = () => {
    onHideOption()
    setTimeout(() => {
      pickPhoto(true)
    }, 100)
  }

  const onlyTakeImageLibrary = () => {
    onHideOption()
    setTimeout(() => {
      pickPhoto()
    }, 100)
  }

  const pickPhoto = (useCamera = false) => {
    selectPhoto(
      async (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log("User cancelled photo picker")
        } else if (response.errorCode) {
          console.log("ImagePicker Error: ", response.errorMessage)
        } else {
          forEach(response.assets, (asset) => {
            const resImg = asset
            const getFilename = resImg.uri.split("/")
            const imgName = getFilename[getFilename.length - 1]

            const dest = getFilePath(resImg.fileName || imgName)
            RNFS.moveFile(resImg.uri, dest)
              .then(() => {
                console.log("RNFS: Path: ", dest)
                const image = {
                  name: resImg.fileName || imgName,
                  type: resImg.type,
                  uri: getFilePath(resImg.fileName || imgName),
                }
                const newImages = [...photos, image]
                if (imgList.length >= MAX_PHOTO) return
                imgList = [...imgList, image]
                setPhotos(imgList)
              })
              .catch((err) => {})
          })
        }
      },
      useCamera,
      MAX_PHOTO - photos.length,
    )
  }

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Button
        testID="login-button"
        tx="loginScreen.tapToSignIn"
        style={$tapButton}
        preset="reversed"
        onPress={takeImage}
      />
      <ScrollView contentContainerStyle={$STATUSVIEW}>
        {photos.map((img, index) => (
          <View key={index} style={$PHOTO_CONTAINER}>
            <Image
              style={$PHOTO}
              source={{
                uri: img.uri || img,
              }}
            />
          </View>
        ))}
      </ScrollView>
      {showImageOpt && (
        <ImageOptionPopup
          isVisible={showImageOpt}
          cameraTitle="Chụp ảnh mới"
          libraryTitle="Load ảnh từ thư viện"
          onCamera={onlyTakePhoto}
          onLibrary={onlyTakeImageLibrary}
        />
      )}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $signIn: TextStyle = {
  marginBottom: spacing.small,
}

const $STATUSVIEW: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  flex: 1,
  marginTop: 16,
}

const $PHOTO_CONTAINER: ImageStyle = {
  width: "26%",
  aspectRatio: 1,
  marginHorizontal: 6,
}
const $PHOTO: ImageStyle = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: colors.border,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

// @demo remove-file
