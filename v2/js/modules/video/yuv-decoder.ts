/**
 * YUV Decoder Module
 * Handles YUV to RGB conversion for video playback
 */

import { Chroma } from '../protobuf/video-formats';

export interface YUVFrame {
  y: Uint8Array;
  u: Uint8Array;
  v: Uint8Array;
  width: number;
  height: number;
  chroma: Chroma;
  stride?: number;
}

export class YUVDecoder {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  init(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  decode(frame: YUVFrame): ImageData | null {
    const { y, u, v, width, height, chroma } = frame;

    if (!this.ctx) {
      return null;
    }

    const imageData = this.ctx.createImageData(width, height);
    const data = imageData.data;

    const uvWidth = chroma === Chroma.I444 ? width : Math.floor(width / 2);
    const uvHeight = chroma === Chroma.I444 ? height : Math.floor(height / 2);

    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const yIndex = j * width + i;
        const uvIndex = chroma === Chroma.I444 
          ? yIndex 
          : Math.floor(j / 2) * uvWidth + Math.floor(i / 2);

        const yValue = y[yIndex];
        const uValue = u[uvIndex] - 128;
        const vValue = v[uvIndex] - 128;

        const r = Math.max(0, Math.min(255, yValue + 1.402 * vValue));
        const g = Math.max(0, Math.min(255, yValue - 0.344 * uValue - 0.714 * vValue));
        const b = Math.max(0, Math.min(255, yValue + 1.772 * uValue));

        const pixelIndex = yIndex * 4;
        data[pixelIndex] = r;
        data[pixelIndex + 1] = g;
        data[pixelIndex + 2] = b;
        data[pixelIndex + 3] = 255;
      }
    }

    return imageData;
  }

  render(imageData: ImageData): void {
    if (this.ctx && this.canvas) {
      this.ctx.putImageData(imageData, 0, 0);
    }
  }

  destroy(): void {
    this.canvas = null;
    this.ctx = null;
  }
}
