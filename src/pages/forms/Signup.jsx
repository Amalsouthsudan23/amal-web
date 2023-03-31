import { FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { auth } from "../../config";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField';
import { useState } from "react";


export default function Signup() {

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { setOpenModal } = useGlobalContext()
    
    // const initialValues = {
    //     name:'',
    //     email:'',
    //     password:'',
    //     repeate_password:'',
    // }

    // const validationSchema = Yup.object({
    //     name:Yup.string().required('please enter name!'),
    //     email:Yup.string().required('please enter email!'),
    //     password:Yup.string().required('please enter password!'),
    //     repeate_password:Yup.string().required('repeate enter password!'),
    // });

     // LOGIN USER WITH EMAIL AND PASSWORD
     const handleSubmit = async ({ email, password }) => {
        setIsLoading(true);
        try {
            createUserWithEmailAndPassword(auth, email, password).then(credentials => {
                console.log(credentials.user.uid)
            }, err => {
                setMessage(err?.code?.split('/')[1])
                console.dir(err?.code?.split('/')[1])
            })
        } catch (error) {
            setMessage(error)
            console.log(error)
        }finally{
            setIsLoading(false);
        }
    }
    
  return (
    <div className='lg:px-[35%] px-[5%] h-screen fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm pt-[2rem]'>
         <div className="w-full lg:p-6 p-3 bg-white relative">
            <div 
                className="p-2 rounded-full bg-white border border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-rose-500 absolute top-[-0.8rem] right-[-0.8rem] text-xl"
                onClick={() => setOpenModal(null)}
            >
                <FaTimes />
            </div>
            <div className="flex justify-center">
                <span className="lg:text-4xl text-2xl bg-rose-600 text-white rounded-full p-3 mb-1">
                    <FiUser className='' />
                </span>
            </div>
            <div className="my-4"> 
                <span className="block lg:text-2xl text-xl lg:font-semibold text-center mb-1">Sign up</span>
                {message && message}
            </div>
            <SignupForm handleSubmit={handleSubmit} isLoading={isLoading} />
            {/* <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        {fields.map(field => (
                            <div className='mb-4'>
                            <InputField 
                                name={field.name}
                                placeholder={field.placeholder}
                            />
                            </div>
                        ))}
                        <button type='submit' className='w-full px-3 py-2 bg-orange text-white'>
                            {isLoading ? 'Loading...' : 'Sign up'}
                        </button>
                    </Form>
                )}
            </Formik> */}
            <div className="flex justify-center mt-6" onClick={() => setOpenModal('login')}>
                Already have account 
                <span className="text-blue-800 ml-2">Login</span>
            </div>
        </div>
    </div>
  )
}


export const SignupForm = ({ handleSubmit, isLoading }) => {
    const initialValues = {
        name:'',
        email:'',
        password:'',
        repeate_password:'',
    }

    const validationSchema = Yup.object({
        name:Yup.string().required('please enter name!'),
        email:Yup.string().required('please enter email!'),
        password:Yup.string().required('please enter password!'),
        repeate_password:Yup.string().required('repeate enter password!'),
    });

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {() => (
            <Form>
                {fields.map(field => (
                    <div className='mb-4'>
                    <InputField 
                        name={field.name}
                        placeholder={field.placeholder}
                    />
                    </div>
                ))}
                <button type='submit' className='w-full px-3 py-2 bg-orange text-white'>
                    {isLoading ? 'Loading...' : 'Sign up'}
                </button>
            </Form>
        )}
    </Formik>
    )
}

const fields = [
    {name:'name', placeholder:'Name', type:'text'},
    {name:'email', placeholder:'E-mail address', type:'email'},
    {name:'password', placeholder:'Enter password', type:'password'},
    {name:'repeate_password', placeholder:'Repeate password', type:'password'},
]