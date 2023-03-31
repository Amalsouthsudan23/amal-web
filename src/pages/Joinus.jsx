import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './forms/InputField';

export default function Joinus() {

  const initialValues = {
    name:'',
    email:''
  }

  const validationSchema = Yup.object({
    name:Yup.string().required('name must not be empty!'),
    email:Yup.string().required('email must not be empty!')
  });

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="flex px-[12%] py-[3rem]">
      <div className="flex-1"></div>
      <div className="flex-1">
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
              <button className='px-3 py-2 bg-orange'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}


const fields = [
  {name:'name', placeholder:'Name', type:'text'},
  {name:'email', placeholder:'email', type:'email'},
]