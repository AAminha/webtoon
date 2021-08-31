import React, { Component, useEffect } from "react";
import Slider from "react-slick";
//import webtoon_banner from "../../public/dummy/webtoon_banner.json"

export default class Slider2 extends Component  {
    state = {
        display_banner : []
    };

    getBanner() {
        this.setState(() => {
            return ( this.state.display_banner = this.props.banner.filter((element) => element.display === 1))
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {this.state.display_banner.map((banner) => (
                        <img src={banner.bg_img} />))
                    }
                 </Slider>
                 <h2>끝</h2>
            </div>
        );
    }
}