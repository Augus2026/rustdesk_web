/**
 * Interface Module
 * Main interface controller for RustDesk Web
 */

import { Toolbar, StatusBar, ConnectionDialog } from './components';
import { StateManager, AppState, ScalingMode } from '../client/state-manager';
import { ConnectionState } from '../network/connection';

export interface InterfaceOptions {
  container: HTMLElement;
  canvas: HTMLCanvasElement;
  stateManager: StateManager;
  onConnect?: (peerId: string, password: string) => void;
  onDisconnect?: () => void;
}

export class Interface {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private stateManager: StateManager;
  
  private toolbar: Toolbar;
  private statusBar: StatusBar;
  private connectionDialog: ConnectionDialog;
  
  private onConnect?: (peerId: string, password: string) => void;
  private onDisconnect?: () => void;

  constructor(options: InterfaceOptions) {
    this.container = options.container;
    this.canvas = options.canvas;
    this.stateManager = options.stateManager;
    this.onConnect = options.onConnect;
    this.onDisconnect = options.onDisconnect;

    this.toolbar = new Toolbar();
    this.statusBar = new StatusBar();
    this.connectionDialog = new ConnectionDialog();

    this.setupToolbar();
    this.setupConnectionDialog();
    this.subscribeToState();

    this.mount();
  }

  private setupToolbar(): void {
    this.toolbar.addButton('disconnect', 'Disconnect', () => {
      this.onDisconnect?.();
    });
    this.toolbar.addButton('viewOnly', 'View Only', () => {
      const state = this.stateManager.getState();
      this.stateManager.setViewOnly(!state.viewOnly);
    });
    this.toolbar.addButton('scaling', 'Scaling', () => {
      const state = this.stateManager.getState();
      const modes = [ScalingMode.Original, ScalingMode.Fit, ScalingMode.Fill];
      const currentIndex = modes.indexOf(state.scaling);
      const nextIndex = (currentIndex + 1) % modes.length;
      this.stateManager.setScaling(modes[nextIndex]);
    });
    this.toolbar.addButton('fullscreen', 'Fullscreen', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        this.container.requestFullscreen();
      }
    });
  }

  private setupConnectionDialog(): void {
    this.connectionDialog.setOnConnect((peerId, password) => {
      this.connectionDialog.hide();
      this.onConnect?.(peerId, password);
    });
  }

  private subscribeToState(): void {
    this.stateManager.subscribe((state) => {
      this.updateUI(state);
    });
  }

  private updateUI(state: AppState): void {
    // Update status bar
    this.statusBar.update({
      status: state.connection,
      fps: state.fps,
      latency: state.latency,
    });

    // Update toolbar buttons
    this.toolbar.setEnabled('disconnect', state.connection === ConnectionState.Connected);
    this.toolbar.setEnabled('viewOnly', state.connection === ConnectionState.Connected);
    this.toolbar.setEnabled('scaling', state.connection === ConnectionState.Connected);

    // Show/hide connection dialog
    if (state.connection === ConnectionState.Disconnected) {
      this.connectionDialog.show();
    } else {
      this.connectionDialog.hide();
    }
  }

  private mount(): void {
    this.toolbar.mount(this.container);
    this.statusBar.mount(this.container);
    this.connectionDialog.mount(this.container);
    this.connectionDialog.show();
  }

  unmount(): void {
    this.toolbar.unmount();
    this.statusBar.unmount();
    this.connectionDialog.unmount();
  }
}
