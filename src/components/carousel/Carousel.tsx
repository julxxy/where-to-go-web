import styles from '@/components/carousel/Carousel.module.css'
import { Carousel, Image } from 'antd'

export default function AppCarousel() {
  return (
    <Carousel className={styles.slider} autoplay>
      <Image src="/images/carousel_1.jpg" />
      <Image src="/images/carousel_2.jpg" />
      <Image src="/images/carousel_3.jpg" />
    </Carousel>
  )
}
