/**
 * Connection Module
 * Handles connection state and handshake for RustDesk
 */

export enum ConnectionState {
  Disconnected = 'disconnected',
  Connecting = 'connecting',
  Authenticating = 'authenticating',
  Connected = 'connected',
  Failed = 'failed',
}

export interface ConnectionOptions {
  serverId: string;
  peerId: string;
  password?: string;
  relayServer?: string;
}

export interface ConnectionCallbacks {
  onStateChange?: (state: ConnectionState) => void;
  onReady?: () => void;
  onError?: (error: Error) => void;
}

export class RustDeskConnection {
  private state: ConnectionState = ConnectionState.Disconnected;
  private options: ConnectionOptions;
  private callbacks: ConnectionCallbacks;

  constructor(options: ConnectionOptions, callbacks: ConnectionCallbacks = {}) {
    this.options = options;
    this.callbacks = callbacks;
  }

  getState(): ConnectionState {
    return this.state;
  }

  setState(state: ConnectionState): void {
    this.state = state;
    this.callbacks.onStateChange?.(state);
  }

  async connect(): Promise<void> {
    this.setState(ConnectionState.Connecting);
    try {
      // Connection logic here
      this.setState(ConnectionState.Authenticating);
      // Authentication logic here
      this.setState(ConnectionState.Connected);
      this.callbacks.onReady?.();
    } catch (error) {
      this.setState(ConnectionState.Failed);
      this.callbacks.onError?.(error as Error);
      throw error;
    }
  }

  disconnect(): void {
    this.setState(ConnectionState.Disconnected);
  }

  getServerId(): string {
    return this.options.serverId;
  }

  getPeerId(): string {
    return this.options.peerId;
  }
}
