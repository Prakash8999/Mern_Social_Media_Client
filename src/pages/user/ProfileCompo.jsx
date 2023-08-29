import React, { useState } from 'react'
import { UsingContext } from '../../context/Context'
import UserImage from '../../compnents/UserImage'
import { AiOutlineUserAdd, AiOutlineLinkedin, AiOutlineHome, AiOutlinePlusSquare, AiOutlineFolderView } from 'react-icons/ai'
import {CgDetailsMore, CgProfile } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { MdWorkOutline } from 'react-icons/md'
import { FiTwitter } from 'react-icons/fi'
import PostModal from '../post/modal/PostModal'
import Lottie from 'lottie-react'
import home from '../../assets/home.json'
import { Link } from 'react-router-dom'
const ProfileCompo = ({ className }) => {
	const [modal, setModal] = useState({ show: false, dataModal: {} })
	const { user } = UsingContext()


	const routes = [
		{
			lable:"Home",
			route:"/home"
		},
		{
			lable:"My Post",
			route:"/mypost"
		},
		{
			lable:"Profile",
			route:"/profile"
		}
		
	]
	return (
		<>
			{
				modal.show && <PostModal
					dataModal={modal.show && modal.dataModal}
					setModal={setModal}
				/>
			}

			<div className={`bg-white h-[100vh]  px-6  left-0 ${className}`}>
			<h1 className=' font-serif pt-10 pb-12 text-4xl text-blue-600  italic '>CircleReact </h1>
				{/* <div className=' rounded-xl   '>
					<div className='flex   justify-between p-4 w-full '>
						<div className='flex gap-x-3 '>

							<UserImage className={'w-10 h-10'} />
							<div>
								<p className='flex gap-x-1'>{user?.firstName + " " + user?.lastName}</p>
								<p className='text-sm'>Friends</p>
							</div>
						</div>
						<div>
							<AiOutlineUserAdd className='text-2xl' />
						</div>
					</div>
					<hr className='outline-1' />

					<div className='p-4'>
						<div className='flex gap-x-2 items-center'>
							<CiLocationOn />
							{user?.location}
						</div>
						<div className='flex gap-x-2 items-center'>
							<MdWorkOutline />
							{user?.occupation}
						</div>
					</div>
					<hr />
					<h1 className='pl-4'>Social Profiles</h1>
					<div className='p-4'>

						<div className='flex items-center gap-x-2'>
							<FiTwitter />
							<p>Twitter</p>
						</div>
						<div className='flex items-center gap-x-2'>
							<AiOutlineLinkedin />
							<p>Linkedin</p>
						</div>
					</div>


					<div className='flex justify-center gap-x-16 px-4 py-2 '>
						<button className="text-blue-500 hover:text-blue-600 text-xl font-semibold" onClick={() => {
							setModal({ show: true, dataModal: user })
						}} >Create</button>
						<button className="text-blue-500 hover:text-blue-600 text-xl font-semibold" >View</button>
					</div>

				</div> */}
				<div className='text-2xl flex flex-col  justify-between h-[75vh]'>
					<div className='flex flex-col gap-y-8'>



					<Link to={'/home'} className={`flex hover:bg-blue-500 w-[12vw] hover:w-[14vw] py-1.5 pl-2 rounded-lg items-center gap-x-2 hover:text-white cursor-pointer duration-200 hover:shadow-xl`} >
						<AiOutlineHome/>
						Home
					</Link>
					<button onClick={()=>{
						setModal({show:true})
					}} className='flex hover:bg-blue-500 w-[12vw] hover:w-[16vw] py-1.5 pl-2 rounded-lg items-center gap-x-2 hover:text-white cursor-pointer duration-200  hover:shadow-xl'>
					<AiOutlinePlusSquare/>
						Create
					</button >
					<Link to={'/mypost'} className='flex hover:bg-blue-500 w-[12vw] hover:w-[18vw] py-1.5 pl-2 rounded-lg items-center gap-x-2 hover:text-white cursor-pointer duration-200  hover:shadow-xl '>
					<AiOutlineFolderView/>
						Your Post
					</Link>
					<Link to={'/profile'} className='flex hover:bg-blue-500 w-[12vw] hover:w-[20vw] py-1.5 pl-2 rounded-lg items-center gap-x-2 hover:text-white cursor-pointer duration-200  hover:shadow-xl '>
					<CgProfile/>
						Profile
					</Link>
						</div>
					<p className='flex hover:bg-blue-500 w-[12vw] hover:w-full py-1.5 pl-2 rounded-lg items-center gap-x-2 hover:text-white cursor-pointer duration-200  hover:shadow-xl'>
					<CgDetailsMore/>
						More

					</p>
				</div>
			</div>


		</>
	)
}

export default ProfileCompo