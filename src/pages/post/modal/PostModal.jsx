import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { UsingContext } from '../../../context/Context'
import PageLoader from '../../../assets/spinner.json'
import Lottie from 'lottie-react'
import Spinner from '../../../compnents/Spinner'

const PostModal = ({ update, dataModal, setModal }) => {
	// console.log(update);

	const [post, setPost] = useState('')
	const [image, setImage] = useState('')
	const { user } = UsingContext()
	const fileref = useRef()
	const [submitLoader, setSubmitLoader] = useState(false)

	// console.log(dataModal);
	// console.log(dataModal?.dataModal?._id);

	const reset = () => {
		fileref.current.value = ""
	}

	const closeModal = () => {
		setModal({ show: false });
	}


useEffect(() => {
  setImage(dataModal?.dataModal?.postImage)
  setPost(dataModal?.dataModal?.description)
}, [])



	const handleSubmit = (e) => {
		e.preventDefault()

		if (dataModal?.update) {
			setSubmitLoader(true)


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
					axios(`http://localhost:5000/post/${user?._id}/post`, {
						method: "PATCH",
						data: {
							id: dataModal?.dataModal?._id,
							description: post,
							postImage: data?.secure_url
						},
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`,
							"Content-Type": "application/json"
						}

					}).then((res) => {
						console.log(res);
						reset()
						setPost('')
						setImage('')
						closeModal()
						setSubmitLoader(false)
					}).catch((err) => {
						console.log(err);
						setSubmitLoader(false)
					})


				}).catch((err) => {
					console.log(err);
					setSubmitLoader(false)
				})



			return;

		}
		else {
			setSubmitLoader(true)



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
						reset()
						setPost('')
						setImage('')
						closeModal()
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
	}

	return (
		<>
			<div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100]  ">
				<div className=" relative   overflow-hidden w-fit p-5  bg-gray-200 rounded-lg flex  flex-col   md:gap-y-1  gap-y">
					<button
						onClick={closeModal}
						className="absolute top-2 right-3 font-bold text-xl text-red-600"
						title="close"
					>

						<AiOutlineClose />

					</button>


					<form action="" onSubmit={handleSubmit}>




						<div className="flex  py-5 gap-y-4 flex-col items-center gap-x-3 px-4">
							{submitLoader && <Lottie animationData={PageLoader} className={
								"fixed   bg-opacity-30 flex justify-center items-center   h-fit pt-36 w-44  text-center"
							} />}

							<input type="text" value={post} 
							onChange={(e)=>{
								setPost(e.target.value)
							}}
							className="  w-[34vw] h-12  pl-4 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required placeholder='What on your mind?' />

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

									<button className="bg-blue-500 w-1/4 hover:bg-blue-600 text-white font-semibold h px-2 rounded-2xl   transition-colors duration-300 py-3" type='submit'>{!submitLoader ? "Post" : <Spinner />}</button>
								</div>

								{image  ? (
									<img
										src={
											dataModal?.update ? image || URL.createObjectURL(image) : (image && URL.createObjectURL(image))}
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

export default PostModal