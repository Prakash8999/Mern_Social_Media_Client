// import axios from 'axios'
// import React, { useEffect } from 'react'
// import PageLoader from '../../../assets/spinner.json'
// import Lottie from 'lottie-react'
// import Spinner from '../../../compnents/Spinner'
// import { AiOutlineClose } from 'react-icons/ai'
// const EditPostModel = () => {
// 	const [userPost, setUserPost] = useState([])
// 	const { user } = UsingContext()
// 	const [submitLoader, setSubmitLoader] = useState(false)
// 	const closeModal = () => {
// 		setModal({ show: false });
// 	}

// 	useEffect(() => {
// 		axios(`http://localhost:5000/post/${user?._id}/post`, {
// 			method: "GET",
// 			headers: {
// 				Authorization: `Bearer ${localStorage.getItem("token")}`
// 			}
// 		}).then((res) => {
// 			console.log(res);
// 			setUserPost(res?.data)
// 		}).catch((err) => {
// 			console.log(err);
// 		})
// 	}, [])



// const editHandleSubmit = (e) =>{
// e.preventDefault()
// }
// 	return (
// 		<>
// 			<div className='h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed top-0 left-0 z-[100]'>

				
// 			<div className=" relative   overflow-hidden w-fit p-5  bg-gray-200 rounded-lg flex  flex-col   md:gap-y-1  gap-y">
// 					<button
// 						onClick={closeModal}
// 						className="absolute top-2 right-3 font-bold text-xl text-red-600"
// 						title="close"
// 					>
// 						{
// 							!submitLoader ? <AiOutlineClose /> : <Spinner/>
// 						}
// 					</button>


// 					<form action="" onSubmit={editHandleSubmit}>




// 						<div className="flex  py-5 gap-y-4 flex-col items-center gap-x-3 px-4">
// 							{submitLoader && <Lottie animationData={PageLoader} className={
// 								"fixed   bg-opacity-30 flex justify-center items-center   h-fit pt-36 w-44  text-center"
// 							} />}

// 							<input type="text" value={userPost} onChange={(e) => {
// 								setUserPost(e.target.value)
// 							}} className="  w-[34vw] h-12  pl-4 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required placeholder='What on your mind?' />

// 							<div className=' flex  flex-col-reverse items-center gap-y-4'>
// 								<div className='w-full flex gap-x-2 items-center'>

// 									<input
// 										type="file"
// 										accept="image/*"
// 										ref={fileref}
// 										value={userPost?.postImage}
// 										onChange={(e) => {
// 											setImage(e.target.files[0]);
// 										}}
// 										className="  pl-4 w-3/4  py-3 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
// 										required
// 									/>

// 									<button className="bg-blue-500 w-1/4 hover:bg-blue-600 text-white font-semibold h px-2 rounded-2xl   transition-colors duration-300 py-3" type='submit'>{!submitLoader  ? "Post" : <Spinner/>}</button>
// 								</div>

// 								{image ? (
// 									<img
// 										src={image && URL.createObjectURL(image)}
// 										alt=""
// 										className="h-[54vh] border border-gray-300 p-1 object-cover w-[72vh]"
// 									/>
// 								) : (
// 									<div className="h-[54vh] border bg-white border-gray-300 p-1 object-cover w-[72vh] flex items-center justify-center">
// 										Please Choose Image
// 									</div>
// 								)}
// 							</div>

// 						</div>



// 					</form>



// 				</div>

				
				
				
// 							</div>
// 		</>
// 	)
// }

// export default EditPostModel