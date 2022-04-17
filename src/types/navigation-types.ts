import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

export declare interface ScreenList extends Record<string, object | undefined> {
  Home: undefined;
  Create: undefined;
}

declare type ScreensNames = keyof ScreenList;

export declare type Screen<V extends ScreensNames> = React.FC<
  NativeStackScreenProps<ScreenList, V>
>;
