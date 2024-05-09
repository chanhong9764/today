import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PopulationPyramid } from 'react-native-gifted-charts';
import { PyramidItem } from '../../types/Pyramid';
import { AnalysisData } from '../../types/datatype';

type PyramidProps = {
  analysisData: AnalysisData;
};

const Pyramid = ({ analysisData }: PyramidProps) => {
  const pyramidData: PyramidItem[] = [
    {
      left: analysisData.i, // I의 데이터
      right: analysisData.e, // E의 데이터
      leftBarColor: 'rgba(254, 139, 139, 0.5)',
      rightBarColor: 'rgba(254, 139, 139, 0.3)',
      leftBarLabel: 'I', // I의 라벨
      rightBarLabel: 'E', // E의 라벨
      leftBarLabelShift: -13,
    },
    {
      left: analysisData.s, // S의 데이터
      right: analysisData.n, // N의 데이터
      leftBarColor: 'rgba(254, 139, 139, 0.3)',
      rightBarColor: 'rgba(254, 139, 139, 0.5)',
      leftBarLabel: 'S', // S의 라벨
      rightBarLabel: 'N', // N의 라벨
      leftBarLabelShift: -13,
    },
    {
      left: analysisData.t, // T의 데이터
      right: analysisData.f, // F의 데이터
      leftBarColor: 'rgba(254, 139, 139, 0.5)',
      rightBarColor: 'rgba(254, 139, 139, 0.3)',
      leftBarLabel: 'T', // T의 라벨
      rightBarLabel: 'F', // F의 라벨
      leftBarLabelShift: -13,
    },
    {
      left: analysisData.j, // J의 데이터
      right: analysisData.p, // P의 데이터
      leftBarColor: 'rgba(254, 139, 139, 0.3)',
      rightBarColor: 'rgba(254, 139, 139, 0.5)',
      leftBarLabel: 'J', // J의 라벨
      rightBarLabel: 'P', // P의 라벨
      leftBarLabelShift: -13,
    },
  ];

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
