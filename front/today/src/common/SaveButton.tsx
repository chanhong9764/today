import * as FileSystem from 'expo-file-system';
import React from 'react';
import { Button } from 'react-native';

export type SaveButtonProps = {
  onPress?: (data?: any) => void;
  viewShotRef: React.RefObject<any>;
};

function SaveButton({ onPress, viewShotRef }: SaveButtonProps) {
  const captureAndSavePhoto = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const fileName = `screenshot_${Date.now()}.jpg`;
      const destPath = `${FileSystem.documentDirectory}${fileName}`;

      // 이미지 파일을 documentDirectory로 이동
      await FileSystem.moveAsync({
        from: uri,
        to: destPath,
      });

      console.log('이미지 저장', destPath);
      if (onPress) onPress(destPath);
    } catch (error) {
      console.error('이미지 저장 실패', error);
    }
  };

  return <Button title="Save Diary" onPress={captureAndSavePhoto} />;
}

export default SaveButton;
