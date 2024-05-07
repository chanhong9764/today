import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PopulationPyramid } from 'react-native-gifted-charts';
import { PyramidItem } from '../../types/Pyramid';

const pyramidData: PyramidItem[] = [
  {
    left: 8, // I의 데이터
    right: 10, // E의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.5)',
    rightBarColor: 'rgba(254, 139, 139, 0.3)',
    leftBarLabel: 'I', // I의 라벨
    rightBarLabel: 'E', // E의 라벨
    leftBarLabelShift: -13,
  },
  {
    left: 12, // S의 데이터
    right: 14, // N의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.3)',
    rightBarColor: 'rgba(254, 139, 139, 0.5)',
    leftBarLabel: 'S', // S의 라벨
    rightBarLabel: 'N', // N의 라벨
    leftBarLabelShift: -13,
  },
  {
    left: 10, // T의 데이터
    right: 15, // F의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.5)',
    rightBarColor: 'rgba(254, 139, 139, 0.3)',
    leftBarLabel: 'T', // T의 라벨
    rightBarLabel: 'F', // F의 라벨
    leftBarLabelShift: -13,
  },
  {
    left: 5, // J의 데이터
    right: 10, // P의 데이터
    leftBarColor: 'rgba(254, 139, 139, 0.3)',
    rightBarColor: 'rgba(254, 139, 139, 0.5)',
    leftBarLabel: 'J', // J의 라벨
    rightBarLabel: 'P', // P의 라벨
    leftBarLabelShift: -13,
  },
];

const screenWidth = Dimensions.get('window').width;

const Pyramid = () => {
  return (
    <View style={styles.container}>
      <PopulationPyramid
        data={pyramidData}
        showVerticalLines={false}
        width={Dimensions.get('window').width - 40}
        yAxisLabelWidth={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default Pyramid;
