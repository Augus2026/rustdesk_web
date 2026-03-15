/**
 * Input Mapper Module
 * Maps input events to RustDesk protocol messages
 */

import { KeyEvent, MouseEvent, ClipboardEvent } from '../protobuf/messages';
import { KeyboardMode } from '../protobuf/messages';

export interface InputMapperOptions {
  keyboardMode?: KeyboardMode;
  displayWidth?: number;
  displayHeight?: number;
  canvasWidth?: number;
  canvasHeight?: number;
}

export class InputMapper {
  private keyboardMode: KeyboardMode;
  private displayWidth: number;
  private displayHeight: number;
  private canvasWidth: number;
  private canvasHeight: number;
  private scaleX = 1;
  private scaleY = 1;

  constructor(options: InputMapperOptions = {}) {
    this.keyboardMode = options.keyboardMode ?? KeyboardMode.Legacy;
    this.displayWidth = options.displayWidth ?? 1920;
    this.displayHeight = options.displayHeight ?? 1080;
    this.canvasWidth = options.canvasWidth ?? this.displayWidth;
    this.canvasHeight = options.canvasHeight ?? this.displayHeight;
    this.updateScale();
  }

  private updateScale(): void {
    this.scaleX = this.displayWidth / this.canvasWidth;
    this.scaleY = this.displayHeight / this.canvasHeight;
  }

  setDisplaySize(width: number, height: number): void {
    this.displayWidth = width;
    this.displayHeight = height;
    this.updateScale();
  }

  setCanvasSize(width: number, height: number): void {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.updateScale();
  }

  mapKeyboardEvent(event: KeyEvent): Uint8Array {
    // Serialize keyboard event to protobuf
    // Returns encoded bytes ready to send
    const buffer = new ArrayBuffer(64);
    const view = new DataView(buffer);
    
    view.setUint8(0, event.down ? 1 : 0);
    view.setUint8(1, event.press ? 1 : 0);
    view.setUint16(2, event.key, true);
    
    return new Uint8Array(buffer, 0, 4);
  }

  mapMouseEvent(event: MouseEvent): Uint8Array {
    // Scale coordinates to display coordinates
    const scaledX = Math.floor(event.x * this.scaleX);
    const scaledY = Math.floor(event.y * this.scaleY);

    // Serialize mouse event to protobuf
    const buffer = new ArrayBuffer(64);
    const view = new DataView(buffer);
    
    view.setUint8(0, event.mask);
    view.setInt16(1, scaledX, true);
    view.setInt16(3, scaledY, true);
    
    return new Uint8Array(buffer, 0, 5);
  }

  mapClipboardEvent(event: ClipboardEvent): Uint8Array {
    // Serialize clipboard event to protobuf
    const header = new ArrayBuffer(4);
    const view = new DataView(header);
    view.setUint8(0, event.compress ? 1 : 0);
    view.setUint16(1, event.content.length, true);
    
    const result = new Uint8Array(header.byteLength + event.content.length);
    result.set(new Uint8Array(header), 0);
    result.set(event.content, 4);
    
    return result;
  }

  setKeyboardMode(mode: KeyboardMode): void {
    this.keyboardMode = mode;
  }

  getKeyboardMode(): KeyboardMode {
    return this.keyboardMode;
  }
}
