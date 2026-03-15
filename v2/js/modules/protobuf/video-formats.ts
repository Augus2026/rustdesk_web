/**
 * Video Format Definitions
 * Extracted from RustDesk protobuf definitions
 */

export enum Chroma {
  I420 = 0,
  I444 = 1,
  UNRECOGNIZED = -1,
}

export function chromaFromJSON(object: any): Chroma {
  switch (object) {
    case 0:
    case 'I420':
      return Chroma.I420;
    case 1:
    case 'I444':
      return Chroma.I444;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Chroma.UNRECOGNIZED;
  }
}

export function chromaToJSON(object: Chroma): string {
  switch (object) {
    case Chroma.I420:
      return 'I420';
    case Chroma.I444:
      return 'I444';
    case Chroma.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface EncodedVideoFrame {
  data: Uint8Array;
  key: boolean;
  pts: number;
}

export interface EncodedVideoFrames {
  frames: EncodedVideoFrame[];
}

export interface RGB {
  compress: boolean;
}

export interface YUV {
  compress: boolean;
  stride: number;
}

export interface VideoFrame {
  vp9s?: EncodedVideoFrames;
  rgb?: RGB;
  yuv?: YUV;
  h264s?: EncodedVideoFrames;
  h265s?: EncodedVideoFrames;
  vp8s?: EncodedVideoFrames;
  av1s?: EncodedVideoFrames;
  display: number;
}
