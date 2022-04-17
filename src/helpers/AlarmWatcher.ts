import BackgroundTimer from 'react-native-background-timer';
import AlarmRunner from './AlarmRunner';
import AlarmStorage from './AlarmStorage';

export default class AlarmWatcher {
  private _intervalId?: number;

  private _storage = AlarmStorage.getInstance();
  private _runner = new AlarmRunner();

  private intervalTime = 60000;

  public watch() {
    this._intervalId = BackgroundTimer.setInterval(
      this._handler,
      this.intervalTime,
    );
  }

  public stopWatch() {
    if (!this._intervalId) {
      return;
    }

    BackgroundTimer.clearInterval(this._intervalId);
  }

  private async _handler() {
    await this._storage.loadList();

    const list = this._storage.list;

    if (!list.length) {
      this.stopWatch();

      return;
    }

    const now = new Date();

    const hours = now.getHours();
    const mins = now.getMinutes();

    const targetAlarm = list.find(
      alarm => alarm.targetMin === mins && alarm.targetHour === hours,
    );

    if (!targetAlarm) {
      return;
    }

    this._runner.run(targetAlarm);
  }

  private isAlarmStorageEmpty() {}
}
