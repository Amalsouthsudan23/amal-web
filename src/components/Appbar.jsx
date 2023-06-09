import { useState } from 'react'
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContextProvider'
import logoImage from '../assets/images/logo.png'
import { signOut } from "firebase/auth"
import { auth } from '../config'


export default function Appbar() {

    const { setOpenModal, profile, setProfile } = useGlobalContext();
    const [profileDropdwon, setProfileDropdwon] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);


    const logOut = () => {
        signOut(auth).then(res => {
            setProfile(null)
        }).catch(err => console.log(err))
    }
    const guestButtons = (
        <div className="">
            <button 
                className="px-6 lg:py-2 py-1 border rounded"
                onClick={() => setOpenModal('login')}
            >
                Login
            </button>
        </div>
    )
    
    
    const authButtons = (
        <div className="flex items-center ml-6">
            <span className="cursor-pointer text-2xl lg:ml-8 ml-4">
                <FiBell className="" />
            </span>
            <div className="flex items-center relative cursor-pointer ml-6" onClick={() => setProfileDropdwon(!profileDropdwon)}>
                {profile ? <>
                    {profile.avatar ? 
                        <img src={profile.avatar} alt='' className="lg:h-[35px] h-[30px] w-[30px] lg:w-[35px] rounded-full" /> :
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU' alt='' className="lg:h-[35px] h-[30px] w-[30px] lg:w-[35px] rounded-full" /> }
                    <span className="lg:flex items-center hidden ml-1">
                        {profile.name.split(' ')[0]}
                        <FiChevronDown className={`text-xl ml-1 duration-200 ${profileDropdwon ? 'rotate-[180deg]':''}`} />
                    </span>
                    {profileDropdwon && 
                        <div className="bg-gray-200 text-gray-600 rounded absolute right-0 top-full py-2">
                            <NavLink className="flex items-center hover:bg-orange hover:text-white cursor-pointer px-6 py-2" to='/accout'>
                                <FaUser className="text-sm mr-2" />
                                Profile
                            </NavLink>
                            <div className="flex items-center hover:bg-orange hover:text-white cursor-pointer px-6 py-2" onClick={logOut}>
                                <FaUser className="text-sm mr-2" />
                                Logout
                            </div>
                        </div>
                    }
                </> :
                <div className="flex items-center justify-center lg:h-[35px] h-[30px] w-[30px] border border-white lg:w-[35px] rounded-full">
                    <FaUser className="text-2xl" />
                </div>
                }
            </div> 
        </div>
        // <div className="flex items-center ml-6">
        //     <span className="text-2xl lg:ml-8 ml-4">
        //         <FiBell className="" />
        //     </span>
        //     {profile ? 
        //         <span className="flex items-center lg:ml-8 ml-4">
        //             <img src={profile.avatar} alt='' className="lg:h-[35px] h-[30px] w-[30px] lg:w-[35px] rounded-full" /> 
        //             <span className="lg:block hidden ml-2">{profile.name}</span>
        //         </span> :
        //         <FaUser className="text-2xl lg:ml-8 ml-4" />
        //     }
        // </div>
    )

  return (
    <div className="flex items-center bg-orange text-white justify-between sticky left-0 right-0 top-0 z-40 shadow-lg text-whit">
        <div className="flex items-center bg-black rounded-r-full border-r-2 shadow-lg border-white overflow-hidden lg:pr-12 pr-4 lg:py-3 py-3 lg:pl-[4%] pl-2">
            <div className="lg:hidden text-white text-xl block mr-5" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <img className="lg:h-[3.5rem] h-[2.2rem]" src={logoImage} alt='' />
        </div>
        <div className={`
            lg:static fixed inset-0 lg:bg-transparent bg-opacity-75 bg-amber-300
            duration-300 eas-in-out lg:translate-x-0 translate-x-[-100%] ${isOpen ? 'translate-x-0':''} `
        }>
            <ul className="lg:flex h-full lg:bg-transparent bg-white lg:text-white text-gray-600">
                <div className="lg:hidden bg-orange flex items-center justify-between mb-2">
                    <div className=" bg-black rounded-r-full border-r-2 shadow-lg border-white overflow-hidden lg:pr-12 pr-4 py-3 lg:pl-[4%] pl-2">
                        <img className="h-[2.2rem]" src={logoImage} alt='' />
                    </div>
                    <div className=" text-white text-xl block mr-5" onClick={() => setIsOpen(!isOpen)}>
                        <FaTimes />
                    </div>
                </div>
                {links.map(link => (
                    <li className='flex px-4 font-bold'>
                        {!link.subLinks ? 
                            <NavLink className='block py-2' to={link.path}  onClick={() => setIsOpen(false)}>{link.text}</NavLink> : 
                            <div 
                                className="cursor-pointer relative flex items-center" 
                                onMouseEnter={() => setOpenDropdown(!openDropdown)}
                                onMouseLeave={() => setOpenDropdown(!openDropdown)}
                                onClick={() => setOpenDropdown(!openDropdown)}
                            >
                                {link.text}
                                <FiChevronDown className={`ml-2 duration-200 ${openDropdown ? 'rotate-[180deg]' : ''}`} />
                                {openDropdown &&
                                    <div className="absolute left-0 top-full w-[240px] bg-white text-gray-600 border rounded py-2">
                                        {link.subLinks.map(sublink => (
                                            <div>
                                            <NavLink className='hover:bg-orange hover:text-white hover:bg-opacity-75 block px-6 py-3' to={sublink.path}  onClick={() => setIsOpen(false)}>{sublink.text}</NavLink>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
        <div className="lg:pr-[4%] pr-2">
            { profile ? authButtons : guestButtons }
        </div>
    </div>
  )
}


const subLinks = [
    {text:'Donate', path:'/donate'},
    {text:'Volunteer', path:'/volunteer'},
]


const links = [
    {text:'Home', path:'/'},
    {text:'How to help', path:'/get-involved', subLinks:subLinks},
    {text:'Conact us', path:'/how-we-use-donations'},
    {text:'Camps', path:'/idp-camps'},
    {text:'Our Impact', path:'/causes'},
    {text:'About us', path:'/about-us'},
    {text:'Blog', path:'/blog'},
    // {text:'Camps', subLinks:[
    //     { text:'Juba IDP 1', path:'/services' },
    //     { text:'Bentiu IDP 2', path:'/services' },
    //     { text:'Malakal POC Camp', path:'/services' },
    //     { text:'Mangala Camp', path:'/services' },
    //     { text:'Naivasha Camp', path:'/services' },
    // ], path:'/other'},
]
