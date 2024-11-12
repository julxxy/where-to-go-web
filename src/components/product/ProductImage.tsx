import { Image, Typography } from 'antd'
import { isDebugEnable, log } from '@/common/Logger.ts'

interface PropsType {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: number | string
  title: string
}

export default function ProductImage({ id, size, imageSrc, price, title }: PropsType) {
  if (isDebugEnable) log.info(id, size, imageSrc, price, title)
  return (
    <>
      {size == 'large' ? (
        <Image src={imageSrc} height={240} width={415} style={{ borderRadius: 'var(--border-radius-default)' }} />
      ) : (
        <Image src={imageSrc} height={100} width={205} style={{ borderRadius: 'var(--border-radius-default)' }} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </>
  )
}
