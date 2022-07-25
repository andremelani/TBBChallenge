import styles from './styles.module.scss'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CardProducts } from '../CardProducts';
import { productsItems } from '../ProductsItems';


export const ListProducts = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
            },
          },
        ],
      };

    return(
        <Slider {...settings} className={styles.container}>
            {productsItems?.map(item => {
                return(
                    <CardProducts key={item.id} title={item.title} imgUrl={item.imgUrl} text={item.text} color={item.color} />
                )
            })}
        </Slider>
    )
}