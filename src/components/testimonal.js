import { testimonials } from "./array_list";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './testimonal.css'

export const Testimonial = () => {
  return (
    <div className="testimonial">
        <div className="title">Testimonial</div>
        <div className="sub_title">Explore what our user say about us</div>
        <div className="testimonial_container">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial_card">
              <div className="testimonial_image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="testimonial_info">
                <h3 className="testimonial_name">{item.name}</h3>
                <h5 className="testimonial_location">{item.location}</h5>
                <p className="testimonial_text">{item.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  )

}