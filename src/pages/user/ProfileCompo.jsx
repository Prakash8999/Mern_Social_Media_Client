import React, { useState } from 'react'
import { UsingContext } from '../../context/Context'
import UserImage from '../../compnents/UserImage'
import { AiOutlineUserAdd, AiOutlineLinkedin } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { MdWorkOutline } from 'react-icons/md'
import { FiTwitter } from 'react-icons/fi'
import CreatePostModal from '../post/modal/CreatePostModal'

const ProfileCompo = ({ className }) => {
	const [modal, setModal] = useState({ show: false, dataModal: {} })
	const { user } = UsingContext()
	return (
		<>
			{
				modal.show && <CreatePostModal
					dataModal={modal.show && modal.dataModal}
					setModal={setModal}
				/>
			}

			<div className={` h-fit  px-6 ${className}`}>
				<div className='bg-slate-200 rounded-xl w-full h-full '>
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

				</div>
			</div>


		</>
	)
}

export default ProfileCompo