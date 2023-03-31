import { Link } from "react-router-dom";
import { getInvolveData } from "../../assets/data";
import image from '../../assets/images/team2.jpg'


export default function HowtoHelpSection() {
  return (
    <div className="bg-amber-100 lg:px-[12%] px-4 lg:py-[5rem] py-[2rem]">
        <div className="lg:px-[19%] lg:text-center mb-8">
            <h2 className="lg:text-5xl text-3xl font-semibold lg:mb-4 mb-2">HOW TO HELP?</h2>
            <p className="text-2xl">
                Acknowledging our shared humanity is a powerful act. With your help, we offer displaced person material support and priceless solidarity.
            </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-6">
            {getInvolveData.map(about => (
                <div className='shadow-md rounded bg-white  mb-6'>
                    <img className='lg:h-[210px] w-full' src={image} alt='' />
                    <div className="p-3">
                        <h2 className="text-2xl">{about.title}</h2>
                        <p className="text-base">{about.text}</p>
                        <Link className="inline-block mt-6 text-white px-3 py-2 bg-orange rounded" to={about.path}>{about.btn}</Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
