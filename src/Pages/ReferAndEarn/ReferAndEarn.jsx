import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  referrerName: yup.string().required('Referrer Name is required'),
  referrerEmail: yup.string().email('Invalid email').required('Email is required'),
  refereeName: yup.string().required('Referee Name is required'),
  refereeEmail: yup.string().email('Invalid email').required('Email is required'),
});
const ReferAndEarn = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    schema.validate(data, { abortEarly: false })
      .then(validData => {
        // Validation successful, proceed with form submission
        console.log(validData);
        setOpen(false)
        // Example: Perform API call to submit data
      })
      .catch(validationErrors => {
        // Validation failed, handle errors
        console.log(validationErrors);
      });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded"
        onClick={() => setOpen(true)}
      >
        Refer Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700">Referrer Name</label>
                <input
                  type="text"
                  {...register('referrerName')}
                  className={`mt-1 block w-full p-2 border ${errors.referrerName ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.referrerName && <span className="text-red-500">{errors.referrerName.message}</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Referrer Email</label>
                <input
                  type="email"
                  {...register('referrerEmail')}
                  className={`mt-1 block w-full p-2 border ${errors.referrerEmail ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.referrerEmail && <span className="text-red-500">{errors.referrerEmail.message}</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Referee Name</label>
                <input
                  type="text"
                  {...register('refereeName')}
                  className={`mt-1 block w-full p-2 border ${errors.refereeName ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.refereeName && <span className="text-red-500">{errors.refereeName.message}</span>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Referee Email</label>
                <input
                  type="email"
                  {...register('refereeEmail')}
                  className={`mt-1 block w-full p-2 border ${errors.refereeEmail ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                {errors.refereeEmail && <span className="text-red-500">{errors.refereeEmail.message}</span>}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferAndEarn;