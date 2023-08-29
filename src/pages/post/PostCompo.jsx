import React, { useState } from 'react'
import { UsingContext } from '../../context/Context'
import ImageInput from '../../compnents/ImageInput'
import UserImage from '../../compnents/UserImage'
import axios from 'axios'
const PostCompo = ({ className }) => {

	const [post, setPost] = useState('')
	const { user, id } = UsingContext()

	const handleSubmit = (e) => {
		e.preventDefault()
		axios(`http://localhost:5000/post/create`, {
			method: "POST",
			data: {
				userId: id,
				description: post,
				firstName: user?.firstName,
				lastName: user?.lastName,
				profilePicture:user?.profilePicture,
				postImage: ''
			},
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json"
			}

		}).then((res) => {
			console.log(res);
			setPost("")
		}).catch((err)=>{
console.log(err);
		})
	}



	return (
		<>
			<div className={` h-fit  rounded-xl flex flex-col gap-y-2  bg-gray-200 py-1.5 px-2 ${className}`} >
				<div className='flex gap-x-2 justify-between w-full items-center'>
					<UserImage className={'w-10 h-10'} />




					<div className="relative  h-12 ">
						<div className="absolute  inset-y-0 left-0 flex items-center my-auto pl-3 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
						</div>
						<input type="search"
							value={post}
							onChange={(e) => {
								setPost(e.target.value)
							}}
							id="default-search" className=" block w-[25vw] h-12  pl-10 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Whats on your mind" required />
						{/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
					</div>

					<button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  rounded-full w-fit px-3 h-10  transition-colors duration-300" >Post</button>



				</div>
				<div className={`${post.length > 0 ? 'block items-center' : 'hidden'}`}>
					<div>
						<input
							type="file"
							id="image"
							className="border border-gray-300 rounded-lg py-1 px-3   duration-300 w-[30vw] "
							placeholder="Enter your email"


							required
						/>
					</div>

				</div>
			</div>
		</>
	)
}

export default PostCompo