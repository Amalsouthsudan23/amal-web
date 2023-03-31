import { Link } from "react-router-dom";
import Header from "./Header";
import HowtoHelpSection from "./HowtoHelpSection";
import OurImpactSection from "./OurImpactSection";

export default function Homepage() {
  return (
    <div>
        <Header />
        <div className="lg:px-[13%] px-4 lg:py-[4rem] py-[2rem] text-centerh">
            <h2 className="lg:text-5xl text-2xl lg:mb-8 mb-2">With your support, we put dignity at the heart of everything we do.</h2>
            <p className="lg:text-2xl mb-8">
                Dignity in a humanitarian context is more about how aid is given, rather than what is given. Our Dignity Centre model allows members to choose not just what they need, but also what they want. It offers a safe, comfortable space where people feel a sense of their own agency. By providing emotional support as well as material help, our impact goes far beyond the number of food and hygiene items we supply—contributing to long-term resilience and adaptation, and helping refugees to rebuild their lives.
                {/* Acknowledging our shared humanity is a powerful act. With your help, we offer displaced person material support and priceless solidarity. */}
            </p>
            <Link className="px-5 py-3 rounded bg-orange text-white" to='/donate'>Donate now!</Link>
        </div>
        <HowtoHelpSection />
        <OurImpactSection />
        {/* DONER MONEY IMPACT SECTION */}
        <div className="lg:px-[12%] px-4 lg:py-[4rem] py-[2rem]">
            <h2 className="lg:text-4xl text-2xl text-center lg:mb-8 mb-5">YOUR SUPPORT IMPACT</h2>
            <div className="lg:grid grid-cols-3 gap-6">
                {data.map(d => (
                    <div className='shadow-md p-8 bg-gray-200 rounded lg:mb-0 mb-6'>
                        <h3 className="lg:text-3xl text-xl mb-3">{d.title}</h3>
                        <p className="mb-5">{d.text}</p>
                        <Link className="px-3 py-2 bg-orange text-white rounded" to='/donate'>Donate now!</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}


const data = [
    {
        title:'Immediate Response',
        text:'Your donation enables us to react quickly to changing circumstances. We can go where we are needed and set up what is needed – fast. Unlike larger NGOs, we can make quick decisions and implement big changes. '
    },
    {
        title:'Essentials & Solidarity',
        text:'Your donation enables us to react quickly to changing circumstances. We can go where we are needed and set up what is needed – fast. Unlike larger NGOs, we can make quick decisions and implement big changes. '
    },
    {
        title:'Building Community',
        text:'Your donation enables us to react quickly to changing circumstances. We can go where we are needed and set up what is needed – fast. Unlike larger NGOs, we can make quick decisions and implement big changes. '
    },
]