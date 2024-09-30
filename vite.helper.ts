import {loadEnv} from 'vite'

/**
 * Vite config helper functions
 */
export function isBase64(str: string) {
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    if (!base64Regex.test(str)) {
        return false
    }
    try {
        atob(str)
        return true
    } catch {
        return false
    }
}

export function encodeBase64(str: string, recursiveCount = 1, currentCount = 0) {
    if (currentCount >= recursiveCount) {
        return str
    }
    const utf8Bytes = new TextEncoder().encode(str)
    const base64String = btoa(String.fromCharCode(...utf8Bytes))
    return encodeBase64(base64String, recursiveCount, currentCount + 1)
}

export function decodeBase64(encodedStr: string) {
    let decode = encodedStr
    if (isBase64(decode)) {
        decode = utf8Decode(decode)
        decode = atob(decode)
        return decodeBase64(decode)
    } else {
        return decode
    }
}

export function utf8Decode(utf8String: string) {
    const bytes = new Uint8Array(utf8String.split('').map(char => char.charCodeAt(0)))
    return new TextDecoder().decode(bytes)
}

/**
 * This function is used to convert a string or boolean value to boolean.
 */
export function isTrue(value: unknown): boolean {
    if (typeof value === 'boolean') {
        return value
    }
    if (typeof value === 'string') {
        const lowerValue = value.toLowerCase()
        return (
            lowerValue === 'true' ||
            lowerValue === '1' ||
            lowerValue === 'on' ||
            lowerValue === 'yes'
        )
    }
    return false
}

/**
 * APIs
 */
export const APIs = (mode: string) => {
    const env = loadEnv(mode, process.cwd(), '')
    const isDebugEnable = isTrue(env.VITE_IS_DEBUG_ENABLE)
    const apiUrls = [{key: 'apiUrl', url: env.VITE_API_URL}]
    let encodeByBase64 = false
    apiUrls.forEach(api => {
        if (isBase64(api.url)) {
            encodeByBase64 = true
            api.url = decodeBase64(api.url)
        }
    })

    if (isDebugEnable && encodeByBase64) {
        // eslint-disable-next-line no-console
        console.log(`Parsed APIs: ${apiUrls.map(api => api.url).join(', ')}\n`)
    }

    return {
        isDebugEnable,
        hosts: Object.fromEntries(apiUrls.map(api => [api.key, api.url]))
    }
}
