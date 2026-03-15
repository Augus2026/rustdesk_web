/**
 * State Manager Module
 * Manages application state for RustDesk Web
 */

import { ConnectionState } from '../network/connection';

export interface AppState {
  connection: ConnectionState;
  peerId: string | null;
  serverId: string | null;
  displayInfo: DisplayInfo[];
  keyboardLocked: boolean;
  mouseLocked: boolean;
  viewOnly: boolean;
  scaling: ScalingMode;
  quality: VideoQuality;
  fps: number;
  latency: number;
}

export interface DisplayInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  online: boolean;
}

export enum ScalingMode {
  Original = 'original',
  Fit = 'fit',
  Fill = 'fill',
}

export enum VideoQuality {
  Best = 0,
  Better = 1,
  Good = 2,
  Medium = 3,
  Low = 4,
  BestSpeed = 5,
}

export type StateChangeCallback = (state: AppState) => void;

export class StateManager {
  private state: AppState;
  private listeners: Set<StateChangeCallback> = new Set();

  constructor(initialState?: Partial<AppState>) {
    this.state = {
      connection: ConnectionState.Disconnected,
      peerId: null,
      serverId: null,
      displayInfo: [],
      keyboardLocked: false,
      mouseLocked: false,
      viewOnly: false,
      scaling: ScalingMode.Fit,
      quality: VideoQuality.Good,
      fps: 0,
      latency: 0,
      ...initialState,
    };
  }

  getState(): AppState {
    return { ...this.state };
  }

  setState(partial: Partial<AppState>): void {
    this.state = { ...this.state, ...partial };
    this.notifyListeners();
  }

  subscribe(callback: StateChangeCallback): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners(): void {
    const state = this.getState();
    this.listeners.forEach(callback => callback(state));
  }

  // Convenience methods
  setConnection(connection: ConnectionState): void {
    this.setState({ connection });
  }

  setDisplays(displays: DisplayInfo[]): void {
    this.setState({ displayInfo: displays });
  }

  setViewOnly(viewOnly: boolean): void {
    this.setState({ viewOnly, keyboardLocked: viewOnly, mouseLocked: viewOnly });
  }

  setScaling(scaling: ScalingMode): void {
    this.setState({ scaling });
  }

  setQuality(quality: VideoQuality): void {
    this.setState({ quality });
  }

  updateStats(fps: number, latency: number): void {
    this.setState({ fps, latency });
  }
}
