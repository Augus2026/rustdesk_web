/**
 * UI Components Module
 * Reusable UI components for RustDesk Web
 */

export interface Component {
  element: HTMLElement;
  mount(container: HTMLElement): void;
  unmount(): void;
  update(props?: any): void;
}

export class Toolbar implements Component {
  element: HTMLElement;
  private buttons: Map<string, HTMLButtonElement> = new Map();

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'rustdesk-toolbar';
  }

  addButton(id: string, label: string, onClick: () => void): void {
    const button = document.createElement('button');
    button.className = 'rustdesk-button';
    button.textContent = label;
    button.addEventListener('click', onClick);
    this.element.appendChild(button);
    this.buttons.set(id, button);
  }

  setEnabled(id: string, enabled: boolean): void {
    const button = this.buttons.get(id);
    if (button) {
      button.disabled = !enabled;
    }
  }

  mount(container: HTMLElement): void {
    container.appendChild(this.element);
  }

  unmount(): void {
    this.element.remove();
  }

  update(): void {}
}

export class StatusBar implements Component {
  element: HTMLElement;
  private statusText: HTMLSpanElement;
  private statsText: HTMLSpanElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'rustdesk-status-bar';

    this.statusText = document.createElement('span');
    this.statusText.className = 'status-text';

    this.statsText = document.createElement('span');
    this.statsText.className = 'stats-text';

    this.element.appendChild(this.statusText);
    this.element.appendChild(this.statsText);
  }

  setStatus(text: string): void {
    this.statusText.textContent = text;
  }

  setStats(fps: number, latency: number): void {
    this.statsText.textContent = `FPS: ${fps} | Latency: ${latency}ms`;
  }

  mount(container: HTMLElement): void {
    container.appendChild(this.element);
  }

  unmount(): void {
    this.element.remove();
  }

  update(props: { status?: string; fps?: number; latency?: number }): void {
    if (props.status) this.setStatus(props.status);
    if (props.fps !== undefined && props.latency !== undefined) {
      this.setStats(props.fps, props.latency);
    }
  }
}

export class ConnectionDialog implements Component {
  element: HTMLElement;
  private form: HTMLFormElement;
  private peerIdInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private connectButton: HTMLButtonElement;
  private onConnect?: (peerId: string, password: string) => void;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'rustdesk-dialog-overlay';

    const dialog = document.createElement('div');
    dialog.className = 'rustdesk-dialog';

    this.form = document.createElement('form');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.onConnect) {
        this.onConnect(this.peerIdInput.value, this.passwordInput.value);
      }
    });

    this.peerIdInput = document.createElement('input');
    this.peerIdInput.type = 'text';
    this.peerIdInput.placeholder = 'Peer ID';
    this.peerIdInput.required = true;

    this.passwordInput = document.createElement('input');
    this.passwordInput.type = 'password';
    this.passwordInput.placeholder = 'Password';

    this.connectButton = document.createElement('button');
    this.connectButton.type = 'submit';
    this.connectButton.textContent = 'Connect';

    this.form.appendChild(this.peerIdInput);
    this.form.appendChild(this.passwordInput);
    this.form.appendChild(this.connectButton);
    dialog.appendChild(this.form);
    this.element.appendChild(dialog);
  }

  setOnConnect(callback: (peerId: string, password: string) => void): void {
    this.onConnect = callback;
  }

  show(): void {
    this.element.style.display = 'flex';
  }

  hide(): void {
    this.element.style.display = 'none';
  }

  mount(container: HTMLElement): void {
    container.appendChild(this.element);
  }

  unmount(): void {
    this.element.remove();
  }

  update(): void {}
}
