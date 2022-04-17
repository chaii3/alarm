import {Alarm} from '../types/alarm-types';
import TrackPlayer, {Capability} from 'react-native-track-player';

export default class AlarmRunner {
  private _active = false;

  private readonly _setup: Promise<void>;

  public constructor() {
    TrackPlayer.updateOptions({
      // Media controls capabilities
      capabilities: [Capability.Play, Capability.Pause],

      compactCapabilities: [Capability.Play, Capability.Pause],
    }).then(() => TrackPlayer.setupPlayer());

    console.log('check');
  }

  public async run(alarm?: Alarm) {
    var track = {
      url: 'http://example.com/avaritia.mp3', // Load media from the network
      title: 'Avaritia',
      artist: 'deadmau5',
      album: 'while(1<2)',
      genre: 'Progressive House, Electro House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'http://example.com/cover.png', // Load artwork from the network
      duration: 402, // Duration in seconds
    };

    try {
      // await TrackPlayer.add([track]);
    } catch (e) {
      console.log(e);
    }

    console.log('check');

    // await TrackPlayer.play();

    this._active = true;
  }

  public async stop() {
    this._active = false;
  }

  public get isActive() {
    return this._active;
  }
}
