import { isTrue } from '@/common/booleanUtils.ts'

/**
 * App environment
 */
export const Environment = {
  prod: 'production',
  dev: 'development',
  local: 'developer_local',
  current: import.meta.env.MODE,
  isProduction: (): boolean => Environment.current === Environment.prod,
  isNotProduction: (): boolean => Environment.current !== Environment.prod,
  isLocal: (): boolean => Environment.current === Environment.local,
  isLocaleCN: isTrue(import.meta.env.VITE_IS_LOCALE_CN),
} as const

/**
 * User roles
 */
export enum UserRoles {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

/**
 * User status
 */
export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED',
}
