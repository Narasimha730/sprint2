import './Homepage.css';

import { HomeCategories } from '../../components/categories/categories.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';
import Image from '../../components/Images/Image';



export function HomePageComponent() {
    return (
        <div className="mt-1">

            <div>
                <HomeSliderComponent></HomeSliderComponent>
            </div>
            <div className='mt-2'>
                <HomeCategories></HomeCategories>
            </div>
            <br></br>
            <div className='mt-6'>
                <Image></Image>
            </div>
        </div>
    )
}