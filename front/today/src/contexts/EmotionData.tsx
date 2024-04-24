type Data = {
  feel: string;
  name: string;
  icon: string;
};

const EmotionData: Data[] = [
  {
    feel: 'happy',
    name: '기쁨',
    icon: 'smiley',
  },
  {
    feel: 'surprise',
    name: '놀람',
    icon: 'smiley',
  },
  {
    feel: 'sad',
    name: '슬픔',
    icon: 'smiley',
  },
  {
    feel: 'depressed',
    name: '우울',
    icon: 'smiley',
  },
  {
    feel: 'exciting',
    name: '신남',
    icon: 'smiley',
  },
  {
    feel: 'angry',
    name: '화남',
    icon: 'smiley',
  },
];

export { Data, EmotionData };
