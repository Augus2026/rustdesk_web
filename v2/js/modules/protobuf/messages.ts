/**
 * Message Types Definitions
 * Extracted from RustDesk protobuf definitions
 */

export enum KeyboardMode {
  Legacy = 0,
  Map = 1,
  Translate = 2,
  Auto = 3,
  UNRECOGNIZED = -1,
}

export function keyboardModeFromJSON(object: any): KeyboardMode {
  switch (object) {
    case 0:
    case 'Legacy':
      return KeyboardMode.Legacy;
    case 1:
    case 'Map':
      return KeyboardMode.Map;
    case 2:
    case 'Translate':
      return KeyboardMode.Translate;
    case 3:
    case 'Auto':
      return KeyboardMode.Auto;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return KeyboardMode.UNRECOGNIZED;
  }
}

export function keyboardModeToJSON(object: KeyboardMode): string {
  switch (object) {
    case KeyboardMode.Legacy:
      return 'Legacy';
    case KeyboardMode.Map:
      return 'Map';
    case KeyboardMode.Translate:
      return 'Translate';
    case KeyboardMode.Auto:
      return 'Auto';
    case KeyboardMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum KeyCode {
  Unknown = 0,
  Alt = 1,
  Backspace = 2,
  CapsLock = 3,
  Control = 4,
  Delete = 5,
  DownArrow = 6,
  End = 7,
  Escape = 8,
  F1 = 9,
  F10 = 10,
  F11 = 11,
  F12 = 12,
  F2 = 13,
  F3 = 14,
  F4 = 15,
  F5 = 16,
  F6 = 17,
  F7 = 18,
  F8 = 19,
  F9 = 20,
  Home = 21,
  LeftArrow = 22,
  Meta = 23,
  Option = 24,
  PageDown = 25,
  PageUp = 26,
  Return = 27,
  RightArrow = 28,
  Shift = 29,
  Space = 30,
  Tab = 31,
  UpArrow = 32,
  Numpad0 = 33,
  Numpad1 = 34,
  Numpad2 = 35,
  Numpad3 = 36,
  Numpad4 = 37,
  Numpad5 = 38,
  Numpad6 = 39,
  Numpad7 = 40,
  Numpad8 = 41,
  Numpad9 = 42,
  Cancel = 43,
}

export function keyCodeFromJSON(object: any): KeyCode {
  switch (object) {
    case 0:
    case 'Unknown':
      return KeyCode.Unknown;
    case 1:
    case 'Alt':
      return KeyCode.Alt;
    case 2:
    case 'Backspace':
      return KeyCode.Backspace;
    case 3:
    case 'CapsLock':
      return KeyCode.CapsLock;
    case 4:
    case 'Control':
      return KeyCode.Control;
    case 5:
    case 'Delete':
      return KeyCode.Delete;
    case 6:
    case 'DownArrow':
      return KeyCode.DownArrow;
    case 7:
    case 'End':
      return KeyCode.End;
    case 8:
    case 'Escape':
      return KeyCode.Escape;
    case 9:
    case 'F1':
      return KeyCode.F1;
    case 10:
    case 'F10':
      return KeyCode.F10;
    case 11:
    case 'F11':
      return KeyCode.F11;
    case 12:
    case 'F12':
      return KeyCode.F12;
    case 13:
    case 'F2':
      return KeyCode.F2;
    case 14:
    case 'F3':
      return KeyCode.F3;
    case 15:
    case 'F4':
      return KeyCode.F4;
    case 16:
    case 'F5':
      return KeyCode.F5;
    case 17:
    case 'F6':
      return KeyCode.F6;
    case 18:
    case 'F7':
      return KeyCode.F7;
    case 19:
    case 'F8':
      return KeyCode.F8;
    case 20:
    case 'F9':
      return KeyCode.F9;
    case 21:
    case 'Home':
      return KeyCode.Home;
    case 22:
    case 'LeftArrow':
      return KeyCode.LeftArrow;
    case 23:
    case 'Meta':
      return KeyCode.Meta;
    case 24:
    case 'Option':
      return KeyCode.Option;
    case 25:
    case 'PageDown':
      return KeyCode.PageDown;
    case 26:
    case 'PageUp':
      return KeyCode.PageUp;
    case 27:
    case 'Return':
      return KeyCode.Return;
    case 28:
    case 'RightArrow':
      return KeyCode.RightArrow;
    case 29:
    case 'Shift':
      return KeyCode.Shift;
    case 30:
    case 'Space':
      return KeyCode.Space;
    case 31:
    case 'Tab':
      return KeyCode.Tab;
    case 32:
    case 'UpArrow':
      return KeyCode.UpArrow;
    case 33:
    case 'Numpad0':
      return KeyCode.Numpad0;
    case 34:
    case 'Numpad1':
      return KeyCode.Numpad1;
    case 35:
    case 'Numpad2':
      return KeyCode.Numpad2;
    case 36:
    case 'Numpad3':
      return KeyCode.Numpad3;
    case 37:
    case 'Numpad4':
      return KeyCode.Numpad4;
    case 38:
    case 'Numpad5':
      return KeyCode.Numpad5;
    case 39:
    case 'Numpad6':
      return KeyCode.Numpad6;
    case 40:
    case 'Numpad7':
      return KeyCode.Numpad7;
    case 41:
    case 'Numpad8':
      return KeyCode.Numpad8;
    case 42:
    case 'Numpad9':
      return KeyCode.Numpad9;
    case 43:
    case 'Cancel':
      return KeyCode.Cancel;
    default:
      return KeyCode.Unknown;
  }
}

export interface KeyEvent {
  down: boolean;
  press: boolean;
  unicodeInfo?: UnicodeInfo;
  modifiers: number[];
  key: number;
}

export interface UnicodeInfo {
  unicode: number;
  seq: number;
}

export interface MouseEvent {
  mask: number;
  x: number;
  y: number;
}

export interface ClipboardEvent {
  compress: boolean;
  content: Uint8Array;
}
