/**
 * RustDesk Client Module
 * Main client class for RustDesk Web
 */

import { RustDeskWebSocket, WebSocketOptions } from '../network/websocket';
import { RustDeskConnection, ConnectionState, ConnectionOptions } from '../network/connection';
import { VideoProcessor, VideoProcessorOptions } from '../video/video-processor';
import { CanvasRenderer, CanvasRendererOptions } from '../video/canvas-renderer';
import { KeyboardInput, KeyboardCallbacks } from '../input/keyboard';
import { InputMapper } from '../input/input-mapper';

export interface RustDeskClientOptions {
  canvas: HTMLCanvasElement;
  serverUrl: string;
  peerId: string;
  password?: string;
}

export interface RustDeskClientCallbacks {
  onConnected?: () => void;
  onDisconnected?: () => void;
  onError?: (error: Error) => void;
  onStateChange?: (state: ConnectionState) => void;
  onVideoStats?: (stats: any) => void;
}

export class RustDeskClient {
  private options: RustDeskClientOptions;
  private callbacks: RustDeskClientCallbacks;
  
  private ws: RustDeskWebSocket | null = null;
  private connection: RustDeskConnection | null = null;
  private videoProcessor: VideoProcessor | null = null;
  private renderer: CanvasRenderer | null = null;
  private keyboard: KeyboardInput | null = null;
  private inputMapper: InputMapper | null = null;

  constructor(options: RustDeskClientOptions, callbacks: RustDeskClientCallbacks = {}) {
    this.options = options;
    this.callbacks = callbacks;
  }

  async connect(): Promise<void> {
    // Initialize renderer
    this.renderer = new CanvasRenderer({
      canvas: this.options.canvas,
    });

    // Initialize video processor
    this.videoProcessor = new VideoProcessor({
      canvas: this.options.canvas,
      onStats: this.callbacks.onVideoStats,
    });

    // Initialize input mapper
    this.inputMapper = new InputMapper({
      canvasWidth: this.options.canvas.width,
      canvasHeight: this.options.canvas.height,
    });

    // Initialize keyboard input
    const keyboardCallbacks: KeyboardCallbacks = {
      onKeyEvent: (event) => {
        if (this.inputMapper && this.ws) {
          const data = this.inputMapper.mapKeyboardEvent(event);
          this.ws.send(data);
        }
      },
    };
    this.keyboard = new KeyboardInput(keyboardCallbacks);

    // Initialize WebSocket
    const wsOptions: WebSocketOptions = {
      url: this.options.serverUrl,
      onOpen: () => {
        this.callbacks.onStateChange?.(ConnectionState.Connected);
        this.callbacks.onConnected?.();
        this.keyboard?.enable();
      },
      onClose: () => {
        this.callbacks.onDisconnected?.();
        this.keyboard?.disable();
      },
      onError: (error) => {
        this.callbacks.onError?.(new Error('WebSocket error'));
      },
      onMessage: (data) => {
        this.handleMessage(data);
      },
    };
    this.ws = new RustDeskWebSocket(wsOptions);
    this.ws.connect();

    // Initialize connection
    const connOptions: ConnectionOptions = {
      serverId: this.options.serverUrl,
      peerId: this.options.peerId,
      password: this.options.password,
    };
    this.connection = new RustDeskConnection(connOptions, {
      onStateChange: this.callbacks.onStateChange,
    });
    await this.connection.connect();
  }

  private handleMessage(data: ArrayBuffer | string): void {
    if (data instanceof ArrayBuffer) {
      // Handle binary message (video frame, etc.)
      this.handleBinaryMessage(data);
    } else {
      // Handle text message (JSON)
      this.handleTextMessage(data);
    }
  }

  private handleBinaryMessage(data: ArrayBuffer): void {
    // Parse and process video frame
    // This is a placeholder - actual implementation would parse protobuf
  }

  private handleTextMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      // Handle text message
    } catch (e) {
      console.error('Failed to parse text message:', e);
    }
  }

  disconnect(): void {
    this.keyboard?.disable();
    this.videoProcessor?.destroy();
    this.ws?.disconnect();
    this.connection?.disconnect();
    this.callbacks.onDisconnected?.();
  }

  getState(): ConnectionState {
    return this.connection?.getState() ?? ConnectionState.Disconnected;
  }
}
