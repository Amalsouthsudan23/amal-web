// import { Link } from "react-router-dom";
// import { getInvolveData } from "../../assets/data";
import image from '../../assets/images/team.jpg'

export default function OurImpactSection() {
  return (
    <div className="lg:flex lg:px-[10%] px-4 lg:py-[5rem] py-[2rem]">
        <div className="flex-1">
            <img className='lg:h-[400px] h-[200px] w-full rounded' src={image} alt='' />
        </div>
        <div className="flex-1 lg:ml-10">
            <h2 className="lg:text-4xl text-2xl text-cente lg:mb-4 mb-2">With your support, we put dignity at the heart of everything we do.</h2>
            <p>
                Dignity in a humanitarian context is more about how aid is given, rather than what is given. Our Dignity Centre model allows members to choose not just what they need, but also what they want. It offers a safe, comfortable space where people feel a sense of their own agency. By providing emotional support as well as material help, our impact goes far beyond the number of food and hygiene items we supply—contributing to long-term resilience and adaptation, and helping refugees to rebuild their lives.
            </p>
            <button className="px-4 py-2 bg-orange text-white">See more...</button>
        </div>
    </div>
  )
}
