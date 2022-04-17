import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default ({
  set,
  date,
}: {
  date: Date;
  set: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  return <DatePicker date={date} onDateChange={set} mode={'time'} />;
};
