import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PopulationPyramid } from 'react-native-gifted-charts';
import { PyramidItem } from '../../types/Pyramid';

const pyramidData: PyramidItem[] = [
  {
    left: 20, // I의 데이터
    right: 25, // E의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.5)',
    rightBarColor: 'rgba(254, 139, 139, 0.3)',
    leftBarLabel: 'I', // I의 라벨
    rightBarLabel: 'E', // E의 라벨
  },
  {
    left: 15, // S의 데이터
    right: 30, // N의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.3)',
    rightBarColor: 'rgba(254, 139, 139, 0.5)',
    leftBarLabel: 'S', // S의 라벨
    rightBarLabel: 'N', // N의 라벨
  },
  {
    left: 10, // T의 데이터
    right: 35, // F의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.5)',
    rightBarColor: 'rgba(254, 139, 139, 0.3)',
    leftBarLabel: 'T', // T의 라벨
    rightBarLabel: 'F', // F의 라벨
  },
  {
    left: 5, // J의 데이터
    right: 40, // P의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.3)',
    rightBarColor: 'rgba(254, 139, 139, 0.5)',
    leftBarLabel: 'J', // J의 라벨
    rightBarLabel: 'P', // P의 라벨
  },
];

const Pyramid = () => {
  return (
    <View style={styles.container}>
      <PopulationPyramid data={pyramidData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pyramid;
