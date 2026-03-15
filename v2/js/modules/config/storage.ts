/**
 * Storage Module
 * Persistent storage utilities for RustDesk Web
 */

export interface StorageData {
  [key: string]: any;
}

export class Storage {
  private prefix: string;
  private storage: globalThis.Storage;

  constructor(prefix: string = 'rustdesk', useSession: boolean = false) {
    this.prefix = prefix;
    this.storage = useSession ? sessionStorage : localStorage;
  }

  private getKey(key: string): string {
    return `${this.prefix}:${key}`;
  }

  get<T = any>(key: string, defaultValue?: T): T | null {
    try {
      const stored = this.storage.getItem(this.getKey(key));
      if (stored === null) {
        return defaultValue ?? null;
      }
      return JSON.parse(stored) as T;
    } catch (e) {
      console.error(`Failed to get storage key "${key}":`, e);
      return defaultValue ?? null;
    }
  }

  set<T>(key: string, value: T): boolean {
    try {
      this.storage.setItem(this.getKey(key), JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Failed to set storage key "${key}":`, e);
      return false;
    }
  }

  remove(key: string): boolean {
    try {
      this.storage.removeItem(this.getKey(key));
      return true;
    } catch (e) {
      console.error(`Failed to remove storage key "${key}":`, e);
      return false;
    }
  }

  clear(): void {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key?.startsWith(this.prefix + ':')) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => {
      this.storage.removeItem(key);
    });
  }

  getAll(): StorageData {
    const data: StorageData = {};
    
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key?.startsWith(this.prefix + ':')) {
        const shortKey = key.substring(this.prefix.length + 1);
        const value = this.get(shortKey);
        if (value !== null) {
          data[shortKey] = value;
        }
      }
    }

    return data;
  }

  has(key: string): boolean {
    return this.storage.getItem(this.getKey(key)) !== null;
  }

  keys(): string[] {
    const keys: string[] = [];
    const prefix = this.prefix + ':';
    
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      if (key?.startsWith(prefix)) {
        keys.push(key.substring(prefix.length));
      }
    }

    return keys;
  }

  size(): number {
    return this.keys().length;
  }
}

// Connection history storage
export class ConnectionHistory {
  private storage: Storage;
  private maxItems: number;

  constructor(maxItems: number = 20) {
    this.storage = new Storage('rustdesk-history');
    this.maxItems = maxItems;
  }

  add(peerId: string, password?: string): void {
    const history = this.getAll();
    
    // Remove existing entry if present
    const existingIndex = history.findIndex((item) => item.peerId === peerId);
    if (existingIndex !== -1) {
      history.splice(existingIndex, 1);
    }

    // Add new entry at the beginning
    history.unshift({
      peerId,
      password,
      lastConnected: Date.now(),
    });

    // Trim to max items
    if (history.length > this.maxItems) {
      history.pop();
    }

    this.storage.set('list', history);
  }

  remove(peerId: string): void {
    const history = this.getAll();
    const index = history.findIndex((item) => item.peerId === peerId);
    if (index !== -1) {
      history.splice(index, 1);
      this.storage.set('list', history);
    }
  }

  getAll(): Array<{ peerId: string; password?: string; lastConnected: number }> {
    return this.storage.get('list', []);
  }

  clear(): void {
    this.storage.clear();
  }
}

// Default instances
export const storage = new Storage();
export const connectionHistory = new ConnectionHistory();
