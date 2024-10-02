import { loadEnv } from 'vite'

/**
 * Vite config helper functions
 */
export const base64Utils = {
  defaultRecursiveCount: 15,
  isBase64(str: string): boolean {
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    if (!base64Regex.test(str)) return false
    try {
      atob(str)
      return true
    } catch {
      return false
    }
  },

  encodeBase64(str: string, recursiveCount = 1, currentCount = 0): string {
    if (currentCount >= recursiveCount) return str
    const utf8Bytes = new TextEncoder().encode(str)
    const base64String = btoa(String.fromCharCode(...utf8Bytes))
    return this.encodeBase64(base64String, recursiveCount, currentCount + 1)
  },

  decodeBase64(encodedStr: string, recursiveCount = 1, currentCount = 0): string {
    if (currentCount >= recursiveCount) return encodedStr

    if (this.isBase64(encodedStr)) {
      try {
        const decoded = atob(encodedStr)
        const utf8Decoded = this.utf8Decode(decoded)
        return this.decodeBase64(utf8Decoded, recursiveCount, currentCount + 1)
      } catch {
        return encodedStr
      }
    } else {
      return encodedStr
    }
  },

  utf8Decode(utf8String: string): string {
    const bytes = new Uint8Array([...utf8String].map(char => char.charCodeAt(0)))
    return new TextDecoder().decode(bytes)
  },
}

export const booleanUtils = {
  isTrue(value: unknown): boolean {
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') {
      const lowerValue = value.toLowerCase()
      return ['true', '1', 'on', 'yes'].includes(lowerValue)
    }
    return false
  },
}

/**
 * APIs 配置
 */
export const APIs = (mode: string) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDebugEnable = booleanUtils.isTrue(env.VITE_IS_DEBUG_ENABLE)

  const apiUrls = [{ key: 'apiUrl', url: env.VITE_API_URL }]
  let encodeByBase64 = false

  apiUrls.forEach(api => {
    if (base64Utils.isBase64(api.url)) {
      encodeByBase64 = true
      api.url = base64Utils.decodeBase64(api.url, 20)
    }
  })

  if (isDebugEnable && encodeByBase64) {
    // eslint-disable-next-line no-console
    console.log(`Parsed APIs: ${apiUrls.map(api => api.url).join(', ')}\n`)
  }

  return {
    isDebugEnable,
    hosts: Object.fromEntries(apiUrls.map(api => [api.key, api.url])),
  }
}
