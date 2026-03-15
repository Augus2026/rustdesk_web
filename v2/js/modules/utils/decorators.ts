/**
 * Decorators Module
 * TypeScript decorators for RustDesk Web
 */

/**
 * Log method calls
 */
export function log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[${propertyKey}] Called with:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`[${propertyKey}] Returned:`, result);
    return result;
  };

  return descriptor;
}

/**
 * Measure execution time
 */
export function measure(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`[${propertyKey}] Execution time: ${(end - start).toFixed(2)}ms`);
    return result;
  };

  return descriptor;
}

/**
 * Memoize method results
 */
export function memoize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const cache = new Map<string, any>();

  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = originalMethod.apply(this, args);
    cache.set(key, result);
    return result;
  };

  return descriptor;
}

/**
 * Debounce method calls
 */
export function debounce(delay: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    descriptor.value = function (...args: any[]) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        originalMethod.apply(this, args);
        timeoutId = null;
      }, delay);
    };

    return descriptor;
  };
}

/**
 * Throttle method calls
 */
export function throttle(limit: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
    let inThrottle = false;

    descriptor.value = function (...args: any[]) {
      if (!inThrottle) {
        originalMethod.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };

    return descriptor;
  };
}

/**
 * Mark method as deprecated
 */
export function deprecated(message: string = '') {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.warn(
        `[DEPRECATED] ${propertyKey} is deprecated.${message ? ' ' + message : ''}`
      );
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
