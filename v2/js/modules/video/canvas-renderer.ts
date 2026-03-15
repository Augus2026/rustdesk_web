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
  private offscreenCanvas: HTMLCanvasElement | null = null;
  private offscreenCtx: CanvasRenderingContext2D | null = null;

  constructor(options: CanvasRendererOptions) {
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d', {
      preserveDrawingBuffer: options.preserveDrawingBuffer ?? true,
      alpha: options.alpha ?? false,
    })!;

    if (typeof OffscreenCanvas !== 'undefined') {
      this.offscreenCanvas = new OffscreenCanvas(
        this.canvas.width,
        this.canvas.height
      );
      this.offscreenCtx = this.offscreenCanvas.getContext('2d');
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
    if (this.offscreenCtx) {
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
