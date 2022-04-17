export declare interface Alarm {
  id: number;
  targetHour: number;
  targetMin: number;
  radioId: number | null;
}

export declare interface NotInitedAlarm extends Omit<Alarm, 'id'> {}
