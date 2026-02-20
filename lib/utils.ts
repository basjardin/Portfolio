import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to get the correct asset path with basePath
 * This is needed for GitHub Pages deployment where basePath is set
 */
export function assetPath(path: string): string {
  // Construct correct path accounting for basePath on GitHub Pages
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/Portfolio' : '';
  // Ensure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // Avoid double-prefixing if the path already contains the basePath
  if (isProd && normalizedPath.startsWith(basePath)) {
    return normalizedPath;
  }
  return `${basePath}${normalizedPath}`;
}


