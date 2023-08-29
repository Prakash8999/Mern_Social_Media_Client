import React from 'react'
import { UsingContext } from '../../context/Context'
import ProfileCompo from './ProfileCompo';

const Profile = () => {
  const { user } = UsingContext()
  console.log(user);
  return (
    <>
      <div className='flex'>

        <ProfileCompo className={'w-1/4   border-r'} />
        <div className='py-4  flex items-center justify-center w-3/4   gap-y-4 bg-white min-h-screen h-full'>
          <div className='flex justify-center items-center gap-x-4 w-[70vw] h-full bg-black p-8 bg-opacity-5 rounded-2xl'>



            <section className='w-1/2  bg-white  h-[85vh] rounded-xl'>
              <div className='w-full flex justify-center p-4 h-1/2 bg-blue-500 bg-opacity-20 rounded-t-xl'>
                <img src={user?.profilePicture} alt="" className=' rounded-lg' />
              </div>

              <div className='h-1/2 pt-4 px-10'>
                <p className=' text-xl '>My Profile:</p>
                <div className='pt-5 flex justify-between items-center'>
                  <p className='text-gray-700 underline underline-offset-8'>{user?.firstName + " " + user?.lastName}</p>
                  <p className='text-gray-700 underline underline-offset-8'>+91 9876543210</p>
                </div>
                <div className='pt-11 flex flex-col gap-y-2'>

                  <p className='text-gray-700 '> {user?.email}</p>
                  <hr className='bg-black  border-black' />
                </div>
                <div className='text-center pt-8'>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Edit Profile
              </button>
                </div>
              </div>

            </section>

            <section className='w-1/2  h-[85vh]  flex flex-col gap-y-4'>
              <div className='w-full h-1/2 bg-white rounded-xl'>

              </div>

              <div className='w-full h-1/2 bg-white rounded-xl'>


              </div>
            </section>

          </div>




        </div>
      </div>

    </>
  )
}

export default Profile