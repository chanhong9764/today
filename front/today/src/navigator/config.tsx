import { PathConfigMap } from '@react-navigation/native';

export interface MainTabConfig {
  Diary: {
    path: string;
    screens: {
      SelectImage: string;
    };
  };
  Calendar: {
    path: string;
    screens: {
      SelectImage: string;
    };
  };
}

// PathConfigMap에 대한 수정된 타입 정의
export type ModifiedPathConfigMap = {
  MainTab: MainTabConfig;
  NotificationScreen: undefined;
};

const linkConfig = {
  config: PathConfigMap<ModifiedPathConfigMap>,
  screens: {
    MainTab: {
      screens: {
        Diary: {
          path: 'diary',
          screens: {
            SelectImage: 'selectimage',
          },
        },
        Calendar: {
          path: 'calendar',
          screens: {
            SelectImage: 'selectimage',
          },
        },
      },
    },
    NotificationScreen: 'notification',
  },
};
