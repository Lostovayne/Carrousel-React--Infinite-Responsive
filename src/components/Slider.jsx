import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const ArregloImagenes = [img1, img2, img3, img4, img5, img6];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

// www.npmjs.com/package/react-multi-carousel

export const Slider = () => {
    return (
        <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            //activar flechas o quitarlas
            arrows={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            centerMode={true}
            rewind={true}
            rewindWithAnimation={true}
            focusOnSelect={true}
            className="max-w-6xl mx-auto mt-44 max-h-74 flex cursor-pointer"
        >
            {ArregloImagenes.map((imagen, index) => (
                <div key={index} className="mx-2 w-full h-full">
                    <img src={imagen} className=" w-full h-full px-2 object-center object-fill" />
                </div>
            ))}
        </Carousel>
    );
};
