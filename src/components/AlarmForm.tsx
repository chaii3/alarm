import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Alarm, NotInitedAlarm} from '../types/alarm-types';

const AlarmForm: React.FC<{
  alarm: Partial<Alarm>;
  onCreate: (a: NotInitedAlarm | Alarm) => Promise<void>;
}> = ({alarm, onCreate}) => {
  const ini = new Date();

  if (alarm.targetHour !== undefined && alarm.targetMin !== undefined) {
    ini.setMinutes(alarm.targetMin);
    ini.setHours(alarm.targetHour);
  }

  const [date, changeDate] = useState(ini);

  async function emitCreate() {
    await onCreate({
      targetHour: date.getHours(),
      targetMin: date.getMinutes(),
      radioId: 1,
    });
  }

  return (
    <View style={{flex: 1, alignContent: 'center'}}>
      <DatePicker date={date} onDateChange={changeDate} mode={'time'} />
      <Text>Должен быть выбор радио</Text>
      <Button onPress={() => emitCreate()} title={'Create'} />
    </View>
  );
};

export default AlarmForm;
