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
          <Slider {...settings}>
                <div>
                  <div className="looks-slider-item">
                    <a href={`https://myshowb2b.com/30-look-settembre`}>
                      <img alt="Look Settembre" src={`https://myshowb2b.com//get-image.php?id=30`} className="img-responsive" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="looks-slider-item">
                    <a href={`https://myshowb2b.com/30-look-settembre`}>
                      <img alt="Look Settembre" src={`https://myshowb2b.com//get-image.php?id=30`} className="img-responsive" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="looks-slider-item">
                    <a href={`https://myshowb2b.com/30-look-settembre`}>
                      <img alt="Look Settembre" src={`https://myshowb2b.com//get-image.php?id=30`} className="img-responsive" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="looks-slider-item">
                    <a href={`https://myshowb2b.com/30-look-settembre`}>
                      <img alt="Look Settembre" src={`https://myshowb2b.com//get-image.php?id=30`} className="img-responsive" />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="looks-slider-item">
                    <a href={`https://myshowb2b.com/30-look-settembre`}>
                      <img alt="Look Settembre" src={`https://myshowb2b.com//get-image.php?id=30`} className="img-responsive" />
                    </a>
                  </div>
                </div>
          </Slider>
      </div>
    );
  }
}
export default PostSlider;
