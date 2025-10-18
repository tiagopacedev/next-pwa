import { useState, useEffect } from 'react'
import { detectDevice as detect } from '@/lib/utils'

export function useDevice() {
  const [device, setDevice] = useState({ os: '', browser: '' })

  useEffect(() => {
    setDevice(detect())
  }, [])

  return device
}
