import SearchForm from '../SearchForm/SearchForm';
import './home-slider.component.css';


export function HomeSliderComponent() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='./images/homeimage.avif' className='d-block image' alt='...' />
                    </div>
                </div>
            </div>

        </div>
    )
}