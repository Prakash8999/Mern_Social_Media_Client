import React from 'react'
import Navbar from '../compnents/Navbar'
import UserImage from '../compnents/UserImage'
import ProfileCompo from './user/ProfileCompo'

import FriendListCompo from './friends/FriendListCompo'
import UserPosts from './post/UserPosts'
const Home = () => {
	//  Template Code
	return (
		<>

			<div className='bg-slate-100'>

				<ProfileCompo className={'w-[25vw] border-r  '} />
				<Navbar />
				<div className='flex   justify-end  '>

					<UserPosts className={'w-2/3 '} />
					<FriendListCompo className={'w-1/3'} />
				</div>
			</div>

		</>
	)
}

export default Home
