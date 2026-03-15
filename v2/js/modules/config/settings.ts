/**
 * Settings Module
 * Application settings for RustDesk Web
 */

import { ScalingMode, VideoQuality } from '../client/state-manager';
import { KeyboardMode } from '../protobuf/messages';

export interface AppSettings {
  // Connection settings
  autoReconnect: boolean;
  reconnectAttempts: number;
  reconnectDelay: number;
  
  // Video settings
  videoQuality: VideoQuality;
  scaling: ScalingMode;
  preferHwDecode: boolean;
  
  // Input settings
  keyboardMode: KeyboardMode;
  viewOnly: boolean;
  swapLeftRightMouse: boolean;
  reverseScrollDirection: boolean;
  
  // UI settings
  showToolbar: boolean;
  showStatusBar: boolean;
  showRemoteCursor: boolean;
  theme: 'light' | 'dark' | 'auto';
  
  // Advanced settings
  customServer: string;
  proxy: string;
  enableLog: boolean;
}

const DEFAULT_SETTINGS: AppSettings = {
  // Connection settings
  autoReconnect: true,
  reconnectAttempts: 5,
  reconnectDelay: 3000,
  
  // Video settings
  videoQuality: VideoQuality.Good,
  scaling: ScalingMode.Fit,
  preferHwDecode: true,
  
  // Input settings
  keyboardMode: KeyboardMode.Map,
  viewOnly: false,
  swapLeftRightMouse: false,
  reverseScrollDirection: false,
  
  // UI settings
  showToolbar: true,
  showStatusBar: true,
  showRemoteCursor: true,
  theme: 'auto',
  
  // Advanced settings
  customServer: '',
  proxy: '',
  enableLog: false,
};

export class Settings {
  private settings: AppSettings;
  private storageKey = 'rustdesk-settings';

  constructor() {
    this.settings = this.load();
  }

  private load(): AppSettings {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load settings:', e);
    }
    return { ...DEFAULT_SETTINGS };
  }

  private save(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  get<K extends keyof AppSettings>(key: K): AppSettings[K] {
    return this.settings[key];
  }

  set<K extends keyof AppSettings>(key: K, value: AppSettings[K]): void {
    this.settings[key] = value;
    this.save();
  }

  getAll(): AppSettings {
    return { ...this.settings };
  }

  setAll(settings: Partial<AppSettings>): void {
    this.settings = { ...this.settings, ...settings };
    this.save();
  }

  reset(): void {
    this.settings = { ...DEFAULT_SETTINGS };
    this.save();
  }

  resetKey<K extends keyof AppSettings>(key: K): void {
    this.settings[key] = DEFAULT_SETTINGS[key];
    this.save();
  }
}

// Singleton instance
export const settings = new Settings();
