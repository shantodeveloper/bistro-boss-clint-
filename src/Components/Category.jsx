import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitel from '../Shared/SectionTitel';

const Category = ({ subHeading, heading }) => {
  return (
    <section>
      {/* <SectionTitel
        subHeading={'From 11.00am to 10.00pm'}
        heading={'Order Online'}
      ></SectionTitel> */}
      <SectionTitel
        subHeading={'From 11.00am to 10.00pm'}
        heading={'Order Online'}
      ></SectionTitel>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl -mt-16 text-white uppercase text-center">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl -m-16 text-white uppercase text-center">
            Burger
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl -mt-16 text-white uppercase text-center">
            burger
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl text-white text-center uppercase -mt-16">
            Desurt
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={slide5} alt="" />
          <h2 className="text-3xl text-white -m-16 uppercase text-center">
            Cake
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
