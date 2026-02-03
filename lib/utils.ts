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
  // For GitHub Pages, we need to include the repository name in the path
  const basePath = '/Portfolio';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}


