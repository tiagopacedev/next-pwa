import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function detectDevice() {
  const ua = navigator.userAgent
  const platform = navigator.platform

  // OS detection
  let os = 'Unknown'
  if (/Windows/.test(platform)) os = 'Windows'
  else if (/Mac/.test(platform)) os = 'macOS'
  else if (/Linux/.test(platform)) os = 'Linux'
  else if (/Android/.test(ua)) os = 'Android'
  else if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS'

  // Browser detection
  let browser = 'Unknown'
  if (/Chrome/.test(ua) && !/Edge|OPR/.test(ua)) browser = 'Chrome'
  else if (/Firefox/.test(ua)) browser = 'Firefox'
  else if (/Safari/.test(ua) && !/Chrome/.test(ua)) browser = 'Safari'
  else if (/Edge/.test(ua)) browser = 'Edge'
  else if (/OPR|Opera/.test(ua)) browser = 'Opera'

  // Device type
  const isMobile = /Mobi|Android/i.test(ua)
  const isTablet = /Tablet|iPad/i.test(ua)
  const deviceType = isTablet ? 'Tablet' : isMobile ? 'Mobile' : 'Desktop'

  return { os, browser, deviceType }
}
