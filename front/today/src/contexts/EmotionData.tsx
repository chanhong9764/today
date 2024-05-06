type EmotionDataProp = {
  feel: string;
  name: string;
  icon: string;
};

const EmotionData: EmotionDataProp[] = [
  {
    feel: 'happiness',
    name: '행복',
    icon: 'smiley',
  },
  {
    feel: 'surprise',
    name: '놀람',
    icon: 'smiley',
  },
  {
    feel: 'sadness',
    name: '슬픔',
    icon: 'smiley',
  },
  {
    feel: 'disgust',
    name: '짜증',
    icon: 'smiley',
  },
  {
    feel: 'fear',
    name: '불안',
    icon: 'smiley',
  },
  {
    feel: 'angry',
    name: '분노',
    icon: 'smiley',
  },
];

export { EmotionData, EmotionDataProp };
