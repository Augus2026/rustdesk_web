/**
 * Video Processor Module
 * Handles video frame processing and decoding
 */

import { YUVDecoder, YUVFrame } from './yuv-decoder';
import { VideoFrame, Chroma } from '../protobuf/video-formats';

export interface VideoProcessorOptions {
  canvas: HTMLCanvasElement;
  onFrame?: (timestamp: number) => void;
  onStats?: (stats: VideoStats) => void;
}

export interface VideoStats {
  fps: number;
  frameCount: number;
  droppedFrames: number;
  latency: number;
}

export class VideoProcessor {
  private decoder: YUVDecoder;
  private canvas: HTMLCanvasElement;
  private onFrame?: (timestamp: number) => void;
  private onStats?: (stats: VideoStats) => void;
  
  private frameCount = 0;
  private droppedFrames = 0;
  private lastFrameTime = 0;
  private fps = 0;
  private frameTimestamps: number[] = [];

  constructor(options: VideoProcessorOptions) {
    this.canvas = options.canvas;
    this.onFrame = options.onFrame;
    this.onStats = options.onStats;
    this.decoder = new YUVDecoder();
    this.decoder.init(options.canvas);
  }

  processFrame(frame: VideoFrame): void {
    const now = performance.now();
    
    if (frame.yuv) {
      this.processYUVFrame(frame);
    } else if (frame.vp9s || frame.h264s || frame.h265s || frame.vp8s || frame.av1s) {
      this.processEncodedFrame(frame);
    } else if (frame.rgb) {
      this.processRGBFrame(frame);
    }

    this.frameCount++;
    this.updateStats(now);
    this.onFrame?.(now);
  }

  private processYUVFrame(frame: VideoFrame): void {
    // YUV frame processing logic
    const yuvFrame: YUVFrame = {
      y: new Uint8Array(0), // Will be filled from actual data
      u: new Uint8Array(0),
      v: new Uint8Array(0),
      width: this.canvas.width,
      height: this.canvas.height,
      chroma: Chroma.I420,
    };

    const imageData = this.decoder.decode(yuvFrame);
    if (imageData) {
      this.decoder.render(imageData);
    }
  }

  private processEncodedFrame(frame: VideoFrame): void {
    // Encoded frame processing (VP9, H264, etc.)
    // Requires WebCodecs API or external decoder
  }

  private processRGBFrame(frame: VideoFrame): void {
    // RGB frame processing logic
  }

  private updateStats(now: number): void {
    this.frameTimestamps.push(now);
    
    // Keep only last second of timestamps
    const oneSecondAgo = now - 1000;
    this.frameTimestamps = this.frameTimestamps.filter(t => t > oneSecondAgo);
    
    this.fps = this.frameTimestamps.length;

    if (this.onStats) {
      this.onStats({
        fps: this.fps,
        frameCount: this.frameCount,
        droppedFrames: this.droppedFrames,
        latency: now - this.lastFrameTime,
      });
    }

    this.lastFrameTime = now;
  }

  getStats(): VideoStats {
    return {
      fps: this.fps,
      frameCount: this.frameCount,
      droppedFrames: this.droppedFrames,
      latency: performance.now() - this.lastFrameTime,
    };
  }

  reset(): void {
    this.frameCount = 0;
    this.droppedFrames = 0;
    this.frameTimestamps = [];
  }

  destroy(): void {
    this.decoder.destroy();
  }
}
