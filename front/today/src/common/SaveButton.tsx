import React from 'react';
import { Button, Platform } from 'react-native';
import RNFS from 'react-native-fs'; // 파일 시스템 접근을 위한 라이브러리

export type SaveButtonProps = {
  onPress?: (data?: any) => void;
  viewShotRef: React.RefObject<any>;
};

function SaveButton({ onPress, viewShotRef }: SaveButtonProps) {
  const captureAndSavePhoto = async () => {
    if (Platform.OS === 'android') {
      try {
        const uri: string = await viewShotRef.current.capture();
        const fileName: string = `screenshot_${Date.now()}.jpg`;
        const destPath: string = `${RNFS.PicturesDirectoryPath}/${fileName}`;

        // 이미지 파일을 PicturesDirectoryPath로 이동
        await RNFS.moveFile(uri, destPath);

        console.log('이미지 이동', destPath);
        if (onPress) onPress(destPath);
      } catch (error) {
        console.error('이미지 저장 실패', error);
      }
    } else {
      console.log('이미지 저장 성공');
      if (onPress) onPress();
    }
  };
  return <Button title="Save Diary" onPress={captureAndSavePhoto} />;
}

export default SaveButton;
