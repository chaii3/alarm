import React, {useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import AlarmStorage from '../helpers/AlarmStorage';
import {Screen} from '../types/navigation-types';

const AlarmsList: Screen<'Home'> = ({navigation}) => {
  const storage = AlarmStorage.getInstance();

  const [list, changeState] = useState(storage.list);

  async function navigateCreate() {
    navigation.navigate('Create');
  }

  async function load() {
    await storage.loadList();

    changeState(storage.list);
  }

  return (
    <ScrollView>
      <Text> {JSON.stringify(list)} </Text>
      <Button title={'ADD'} onPress={navigateCreate} />
      <Button title={'Fetch'} onPress={load} />
    </ScrollView>
  );
};

export default AlarmsList;
