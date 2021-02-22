import { Dimensions } from "react-native"
import * as SecureStore from 'expo-secure-store'

const viewPort = (originalWidth, originalHeight) => {
  const { width } = Dimensions.get('window');
  const percentage = ((width*100)/414)/100;
  const newWidth = originalWidth*percentage;
  const newHeight = (originalHeight/originalWidth)*newWidth;
  return { width: newWidth, height: newHeight };
}

const textViewPort = (fontSize) => {
  const { width } = Dimensions.get('window');
  const percentage = ((width*100)/414)/100;
  return fontSize*percentage;
}


const authHeader = async () => {
  const currentUser = JSON.parse(await SecureStore.getItemAsync('userInfo'))

  if (currentUser && currentUser.token) {
    return { 
      Authorization: `Bearer ${currentUser.token}`
    }
  } else {
    return {}
  }
}

export {
  authHeader,
  viewPort,
  textViewPort
}
