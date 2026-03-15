/**
 * WebSocket Client Module
 * Handles WebSocket connection for RustDesk
 */

export interface WebSocketOptions {
  url: string;
  reconnectAttempts?: number;
  reconnectDelay?: number;
  onOpen?: () => void;
  onClose?: () => void;
  onError?: (error: Event) => void;
  onMessage?: (data: ArrayBuffer | string) => void;
}

export class RustDeskWebSocket {
  private ws: WebSocket | null = null;
  private url: string;
  private reconnectAttempts: number;
  private reconnectDelay: number;
  private maxReconnectAttempts: number;
  private currentReconnectAttempts = 0;
  private isConnecting = false;
  private messageQueue: (ArrayBuffer | string)[] = [];

  private onOpen?: () => void;
  private onClose?: () => void;
  private onError?: (error: Event) => void;
  private onMessage?: (data: ArrayBuffer | string) => void;

  constructor(options: WebSocketOptions) {
    this.url = options.url;
    this.reconnectAttempts = options.reconnectAttempts ?? 5;
    this.reconnectDelay = options.reconnectDelay ?? 3000;
    this.maxReconnectAttempts = this.reconnectAttempts;
    this.onOpen = options.onOpen;
    this.onClose = options.onClose;
    this.onError = options.onError;
    this.onMessage = options.onMessage;
  }

  connect(): void {
    if (this.isConnecting || (this.ws && this.ws.readyState === WebSocket.OPEN)) {
      return;
    }

    this.isConnecting = true;

    try {
      this.ws = new WebSocket(this.url);
      this.ws.binaryType = 'arraybuffer';

      this.ws.onopen = () => {
        this.isConnecting = false;
        this.currentReconnectAttempts = 0;
        this.flushMessageQueue();
        this.onOpen?.();
      };

      this.ws.onmessage = (event) => {
        this.onMessage?.(event.data);
      };

      this.ws.onerror = (error) => {
        this.isConnecting = false;
        this.onError?.(error);
      };

      this.ws.onclose = () => {
        this.isConnecting = false;
        this.onClose?.();
        this.attemptReconnect();
      };
    } catch (error) {
      this.isConnecting = false;
      console.error('WebSocket connection error:', error);
    }
  }

  private attemptReconnect(): void {
    if (this.currentReconnectAttempts < this.maxReconnectAttempts) {
      this.currentReconnectAttempts++;
      setTimeout(() => this.connect(), this.reconnectDelay);
    }
  }

  private flushMessageQueue(): void {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message && this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(message);
      }
    }
  }

  send(data: ArrayBuffer | string | Uint8Array): boolean {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
      return true;
    } else {
      this.messageQueue.push(data as ArrayBuffer | string);
      return false;
    }
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.currentReconnectAttempts = this.maxReconnectAttempts;
  }
}
