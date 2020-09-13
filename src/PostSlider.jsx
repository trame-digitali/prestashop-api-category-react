import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PostSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        {this.props.looks ? (
          <Slider {...settings}>
            {this.props.looks.map( (look, index) => (
                <div>
                  <div className="looks-slider-item">
                    <a href={`/${look.id}-${look.link_rewrite}`}>
                      <img alt={look.name} src={`/get-image.php?id=${look.id}`} className="img-responsive" />
                    </a>
                  </div>
                </div>
            ))}
          </Slider>
        ):(
          <div></div>
        )}
      </div>
    );
  }
}
export default PostSlider;
