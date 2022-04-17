import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alarm} from '../types/alarm-types';

export default class AlarmStorage {
  private readonly LIST_KEY = 'list';

  private _alarms: Alarm[] = [];

  private static _instance: AlarmStorage;

  private constructor() {}

  public static getInstance() {
    if (!AlarmStorage._instance) {
      AlarmStorage._instance = new AlarmStorage();
    }

    return AlarmStorage._instance;
  }

  public async loadList() {
    const fetched = await AsyncStorage.getItem(this.LIST_KEY);

    const data = fetched ? JSON.parse(fetched) : [];

    this._alarms = Array.isArray(data) ? data : [];
  }

  public get list() {
    return this._alarms;
  }

  public async set(alarm: Omit<Alarm, 'id'>) {
    const newAlarm: Alarm = {...alarm, id: this.createId()};

    const stringData = JSON.stringify([...this._alarms, newAlarm]);

    await AsyncStorage.setItem(this.LIST_KEY, stringData);

    await this.loadList();
  }

  private createId() {
    const lastId = this.list[this.list.length - 1]?.id;

    return lastId ? lastId + 1 : 1;
  }
}
