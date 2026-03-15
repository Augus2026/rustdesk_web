/**
 * RustDesk Web Client Modules
 * Modular TypeScript definitions for RustDesk Web
 * 
 * This module provides a clean, modular structure for the RustDesk web client,
 * extracted and reorganized from the original bundled code.
 * 
 * @module rustdesk-web
 */

// Protobuf definitions
export * from './protobuf/video-formats';
export * from './protobuf/messages';

// Network modules
export * from './network/websocket';
export * from './network/connection';

// Client modules
export * from './client/rustdesk-client';
export * from './client/state-manager';

// Video modules
export * from './video/yuv-decoder';
export * from './video/video-processor';
export * from './video/canvas-renderer';

// Input modules
export * from './input/keyboard';
export * from './input/input-mapper';

// UI modules
export * from './ui/components';
export * from './ui/interface';

// Utility modules
export { debounce as debounceFn, throttle } from './utils/helpers';
export { debounce as debounceDecorator, throttle as throttleDecorator } from './utils/decorators';

// Configuration modules
export * from './config/settings';
export * from './config/storage';

// Re-export commonly used types
export { Chroma } from './protobuf/video-formats';
export { KeyCode, KeyboardMode, KeyEvent, MouseEvent, ClipboardEvent } from './protobuf/messages';
export { ConnectionState } from './network/connection';
export { RustDeskClient } from './client/rustdesk-client';
export { StateManager, ScalingMode, VideoQuality } from './client/state-manager';
export { RustDeskWebSocket } from './network/websocket';
export { VideoProcessor } from './video/video-processor';
export { KeyboardInput } from './input/keyboard';
export { settings } from './config/settings';
export { storage, connectionHistory } from './config/storage';
