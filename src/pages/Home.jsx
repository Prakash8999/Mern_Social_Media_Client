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
			<Navbar />
			<div className='flex py-6'>

				<ProfileCompo className={'w-1/4'}/>
				<UserPosts className={'w-2/4'}/>
				<FriendListCompo className={'w-1/4'}/>
			</div>
			
		</>
	)
}

export default Home
