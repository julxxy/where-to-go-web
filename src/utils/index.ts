/**
 * Helper function library
 */

// Format CNY money amount
export const formatMoneyCNY = (amount?: string | number | bigint): string => {
  if (!amount) amount = '0.00'
  const formater = new Intl.NumberFormat('zh-Hans-CN', {
    style: 'currency',
    currency: 'CNY',
  })

  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : Number(amount)
  return isNaN(numericAmount) ? 'Invalid amount' : formater.format(numericAmount)
}

// Format number to string with comma
export const formatNumberWithComma = (num?: number | string): string => {
  if (!num) return '0'
  const numericNum = typeof num === 'string' ? parseFloat(num) : num
  return isNaN(numericNum) ? 'Invalid number' : numericNum.toLocaleString()
}
