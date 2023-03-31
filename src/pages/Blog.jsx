import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import image from '../assets/images/ben-white-83tkHLPgg2Q-unsplash.jpg'
import { SignupForm } from "./forms/Signup";

export default function Blog() {
  return (
    <div className='lg:px-[8%] lg:pt-8 pt-5 lg:flex'>
      <div className="flex-1">
        <h1 className="lg:text-3xl text-xl">Listen to refugees issues</h1>
        <div className="lg:grid grid-cols-2 gap-5 mt-6">
          {posts.map(post => (
            <div className='border bg-gray-100 shadow-sm mb-8 lg:p-3 p-2'>
              {post.image && <img  className='lg:h-[300px] h-[200px]' src={image} alt='' />}
              <div className="py-3">
                <h4 className="text-2xl font-bold mb-2">{post.title}</h4>
                <p className="">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[30%] bg-amber-100 p-4 lg:ml-8">
        <div className="flex justify-evenly text-white mb-6 mt-4">
          <span className="bg-gray-500 text-3xl p-2">
            <FaTwitter />
          </span>
          <span className="bg-gray-500 text-3xl p-2">
            <FaLinkedinIn />
          </span>
          <span className="bg-gray-500 text-3xl p-2">
            <FaInstagram />
          </span>
          <span className="bg-gray-500 text-3xl p-2">
            <FaYoutube />
          </span>
          <span className="bg-gray-500 text-3xl p-2">
            <FaFacebook />
          </span>
        </div>
        <button className="w-full px-6 py-3 bg-orange text-white mb-5">Donate</button>
        <button className="w-full px-6 py-3 bg-orange text-white mb-5">Volunteer</button>
        <button className="w-full px-6 py-3 bg-orange text-white mb-5">Funrais</button>
        <h3 className="text-4xl font-semibold my-4">
          Sign Up For Our News & Latest Opportunities
        </h3>
        <div className="bg-gray-50 shadow-md rounded mt-6 p-5">
          <p className="">
            We would really love to share our news, and the impact of what we do with your support. Please sign up here to learn more:
          </p>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}


const posts = [
  {
    user:'Moses buay',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg',
  },
  {
    user:'Kon Akech',
    country:'Uganda',
    title:'Luck of school for refugee children',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg',
  },
  {
    user:'Moses buay',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg',
  },
  {
    user:'Suzan James',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/siddhant-soni-CvqCzwVOhCM-unsplash.jpg',
  },
]