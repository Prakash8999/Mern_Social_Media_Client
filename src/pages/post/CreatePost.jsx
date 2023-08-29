import React, { useRef, useState } from 'react'
import Navbar from '../../compnents/Navbar'
import ProfileCompo from '../user/ProfileCompo'

import { UsingContext } from '../../context/Context';
import Lottie from 'lottie-react'
import Spinner from '../../compnents/Spinner'
import PageLoader from '../../assets/spinner.json'
import axios from 'axios';
const CreatePost = () => {
	const [post, setPost] = useState('')
	const [image, setImage] = useState('')
	const { user } = UsingContext()
	const fileref = useRef()
	const [submitLoader, setSubmitLoader] = useState(false)

	const handleSubmit = (e) => {
		setSubmitLoader(true)
		e.preventDefault()
		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", "socialmedia");
		formData.append("folder", "socialmedia");

		fetch("https://api.cloudinary.com/v1_1/dtu9gszzu/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				axios(`http://localhost:5000/post/create`, {
					method: "POST",
					data: {
						userId: user?._id,
						description: post,
						firstName: user?.firstName,
						lastName: user?.lastName,
						profilePicture: user?.profilePicture,
						postImage: data?.secure_url
					},
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "application/json"
					}

				}).then((res) => {
					console.log(res);
				
					setPost('')
					setImage('')
					setSubmitLoader(false)
				}).catch((err) => {
					console.log(err);
					setSubmitLoader(false)
				})


			}).catch((err) => {
				console.log(err);
				setSubmitLoader(false)
			})
	}

  return (
	<>
	<ProfileCompo className={'w-[25vw] border-r'}/>
	<div className='  flex justify-end items-center pt-5 pr-4 '>

	<div className="   w-[72vw] rounded   ">
            
            
			<form action="" onSubmit={handleSubmit} >




<div className="flex  py-5 gap-y-4 flex-col items-center gap-x-3 px-4">
	{submitLoader && <Lottie animationData={PageLoader} className={
		"fixed   bg-opacity-30 flex justify-center items-center   h-fit pt-36 w-44  text-center"
	} />}

	<input type="text" value={post} onChange={(e) => {
		setPost(e.target.value)
	}} className="  w-[35vw] h-12  pl-4 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required placeholder='What on your mind?' />

	<div className=' flex  flex-col-reverse items-center gap-y-4'>
		<div className='w-full flex gap-x-2 items-center'>

			<input
				type="file"
				accept="image/*"
				ref={fileref}
				onChange={(e) => {
					setImage(e.target.files[0]);
				}}
				className="  pl-4 w-3/4  py-3 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
				required
			/>

			<button className="bg-blue-500 w-1/4 hover:bg-blue-600 text-white font-semibold h px-2 rounded-2xl   transition-colors duration-300 py-3" type='submit'>{!submitLoader  ? "Post" : <Spinner/>}</button>
		</div>

		{image ? (
			<img
				src={image && URL.createObjectURL(image)}
				alt=""
				className="h-[54vh] border border-gray-300 p-1 object-cover w-[72vh]"
			/>
		) : (
			<div className="h-[54vh] border bg-white border-gray-300 p-1 object-cover w-[72vh] flex items-center justify-center">
				Please Choose Image
			</div>
		)}
	</div>

</div>



</form>

</div>
            </div>
	
	</>
  )
}

export default CreatePost