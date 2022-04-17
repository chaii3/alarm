import {Notifications} from 'react-native-notifications';
import AlarmForm from '../components/AlarmForm';
import AlarmStorage from '../helpers/AlarmStorage';
import {NotInitedAlarm} from '../types/alarm-types';
import {Screen} from '../types/navigation-types';
import React from 'react';

const CreateAlarm: Screen<'Create'> = ({navigation}) => {
  const storage = AlarmStorage.getInstance();

  async function create(alarm: NotInitedAlarm) {
    await storage.set(alarm);

    navigation.navigate('Home');
  }

  return <AlarmForm alarm={{}} onCreate={create} />;
};

export default CreateAlarm;
