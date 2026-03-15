/**
 * Canvas Renderer Module
 * Handles canvas rendering for video output
 */

export interface CanvasRendererOptions {
  canvas: HTMLCanvasElement;
  preserveDrawingBuffer?: boolean;
  alpha?: boolean;
}

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private offscreenCanvas: OffscreenCanvas | null = null;
  private offscreenCtx: OffscreenCanvasRenderingContext2D | null = null;

  constructor(options: CanvasRendererOptions) {
    this.canvas = options.canvas;
    const context = this.canvas.getContext('2d', {
      preserveDrawingBuffer: options.preserveDrawingBuffer ?? true,
      alpha: options.alpha ?? false,
    }) as CanvasRenderingContext2D | null;

    if (!context) {
      throw new Error('Failed to get 2D context');
    }
    this.ctx = context;

    if (typeof OffscreenCanvas !== 'undefined') {
      this.offscreenCanvas = new OffscreenCanvas(
        this.canvas.width,
        this.canvas.height
      );
      const offscreenCtx = this.offscreenCanvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
      this.offscreenCtx = offscreenCtx || null;
    }
  }

  resize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;

    if (this.offscreenCanvas) {
      this.offscreenCanvas.width = width;
      this.offscreenCanvas.height = height;
    }
  }

  render(imageData: ImageData): void {
    if (this.offscreenCtx && this.offscreenCanvas) {
      this.offscreenCtx.putImageData(imageData, 0, 0);
      this.ctx.drawImage(this.offscreenCanvas, 0, 0);
    } else {
      this.ctx.putImageData(imageData, 0, 0);
    }
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getWidth(): number {
    return this.canvas.width;
  }

  getHeight(): number {
    return this.canvas.height;
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }
}
