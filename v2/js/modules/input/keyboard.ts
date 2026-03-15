/**
 * Keyboard Input Module
 * Handles keyboard event capture and translation for RustDesk
 */

import { KeyCode, KeyEvent, keyCodeFromJSON } from '../protobuf/messages';

// Browser key code to RustDesk KeyCode mapping
const KEY_MAP: Record<string, KeyCode> = {
  'AltLeft': KeyCode.Alt,
  'AltRight': KeyCode.Alt,
  'Backspace': KeyCode.Backspace,
  'CapsLock': KeyCode.CapsLock,
  'ControlLeft': KeyCode.Control,
  'ControlRight': KeyCode.Control,
  'Delete': KeyCode.Delete,
  'ArrowDown': KeyCode.DownArrow,
  'End': KeyCode.End,
  'Escape': KeyCode.Escape,
  'F1': KeyCode.F1,
  'F2': KeyCode.F2,
  'F3': KeyCode.F3,
  'F4': KeyCode.F4,
  'F5': KeyCode.F5,
  'F6': KeyCode.F6,
  'F7': KeyCode.F7,
  'F8': KeyCode.F8,
  'F9': KeyCode.F9,
  'F10': KeyCode.F10,
  'F11': KeyCode.F11,
  'F12': KeyCode.F12,
  'Home': KeyCode.Home,
  'ArrowLeft': KeyCode.LeftArrow,
  'MetaLeft': KeyCode.Meta,
  'MetaRight': KeyCode.Meta,
  'PageDown': KeyCode.PageDown,
  'PageUp': KeyCode.PageUp,
  'Enter': KeyCode.Return,
  'NumpadEnter': KeyCode.Return,
  'ArrowRight': KeyCode.RightArrow,
  'ShiftLeft': KeyCode.Shift,
  'ShiftRight': KeyCode.Shift,
  'Space': KeyCode.Space,
  'Tab': KeyCode.Tab,
  'ArrowUp': KeyCode.UpArrow,
  'Numpad0': KeyCode.Numpad0,
  'Numpad1': KeyCode.Numpad1,
  'Numpad2': KeyCode.Numpad2,
  'Numpad3': KeyCode.Numpad3,
  'Numpad4': KeyCode.Numpad4,
  'Numpad5': KeyCode.Numpad5,
  'Numpad6': KeyCode.Numpad6,
  'Numpad7': KeyCode.Numpad7,
  'Numpad8': KeyCode.Numpad8,
  'Numpad9': KeyCode.Numpad9,
};

export interface KeyboardCallbacks {
  onKeyEvent?: (event: KeyEvent) => void;
}

export class KeyboardInput {
  private callbacks: KeyboardCallbacks;
  private enabled = false;
  private modifiers: Set<KeyCode> = new Set();

  constructor(callbacks: KeyboardCallbacks = {}) {
    this.callbacks = callbacks;
  }

  enable(): void {
    if (this.enabled) return;
    this.enabled = true;
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  disable(): void {
    if (!this.enabled) return;
    this.enabled = false;
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  private handleKeyDown = (e: KeyboardEvent): void => {
    e.preventDefault();
    const key = this.mapKey(e.code);
    this.updateModifiers(key, true);

    const keyEvent: KeyEvent = {
      down: true,
      press: true,
      modifiers: Array.from(this.modifiers),
      key: key,
    };

    this.callbacks.onKeyEvent?.(keyEvent);
  };

  private handleKeyUp = (e: KeyboardEvent): void => {
    e.preventDefault();
    const key = this.mapKey(e.code);
    this.updateModifiers(key, false);

    const keyEvent: KeyEvent = {
      down: false,
      press: false,
      modifiers: Array.from(this.modifiers),
      key: key,
    };

    this.callbacks.onKeyEvent?.(keyEvent);
  };

  private mapKey(code: string): KeyCode {
    return KEY_MAP[code] ?? KeyCode.Unknown;
  }

  private updateModifiers(key: KeyCode, pressed: boolean): void {
    if (key === KeyCode.Control || 
        key === KeyCode.Shift || 
        key === KeyCode.Alt || 
        key === KeyCode.Meta) {
      if (pressed) {
        this.modifiers.add(key);
      } else {
        this.modifiers.delete(key);
      }
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}
