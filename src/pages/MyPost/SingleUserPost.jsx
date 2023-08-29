import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UsingContext } from '../../context/Context'
import ProfileCompo from '../user/ProfileCompo'
import { SlLike } from 'react-icons/sl'
import { BsSave, BsShare } from 'react-icons/bs'
import { BiComment } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import EditPostModel from '../post/modal/EditPostModel'
import PostModal from '../post/modal/PostModal'
import Spinner from '../../assets/spinner.json'
import Lottie from 'lottie-react'
const SingleUserPost = () => {
	const [userPost, setUserPost] = useState([''])
	const [modal, setModal] = useState({ show: false, dataModal: {}, update: false })
	const[waitingLoader, setWaitingLoader] = useState(false)
	const { user } = UsingContext()
	useEffect(() => {
		axios(`http://localhost:5000/post/${user?._id}/post`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).then((res) => {
			console.log(res.data);
			// console.log(res?.data.length === 0);
			if (res?.data.length === 0) {
				setWaitingLoader(true)
			}
			setUserPost(res?.data)
			setWaitingLoader(false)
		})
			.catch((err) => {
				console.log(err);
			})


	}, [])

	return (
		<>



			{
				modal.show && modal.update && <PostModal
					dataModal={modal}
					setModal={setModal} />
			}

			<ProfileCompo className={'w-[25vw] border-r'} />
<div className={`fixed z-[500] w-full h-full top-0  bg-black bg-opacity-20 text-center flex justify-center items-center  ${waitingLoader ? 'block' : 'hidden'}`}>
{waitingLoader && (
          <Lottie
		  animationData={Spinner}
            className={
              " w-fit h-fit flex justify-center items-center"
            }
          />
        )}
</div>
			


			<div className='py-4  flex items-center justify-center flex-col  gap-y-4 bg-blue-400 min-h-screen h-full'>
				<div className='flex  w-[30vw] '>

					<input type="search" className='w-full h-12 rounded-2xl pl-4' placeholder='Search Your Post ' />
				</div>

				{
					userPost?.map((value, index) => {
						return <div key={index} className='w-fit relative flex justify-center flex-col  bg-white  rounded-3xl'>

							{
								value?.postImage ?
									<div className='flex rounded-lg   flex-col  h-fit   px-4 justify-center items-center    shadow-lg'>
										<div className='  '>

											<div className='flex    gap-x-4 p-2  justify-between items-center '>
												<div className='flex    gap-x-4'>
													<img src={value?.profilePicture} className={'w-14 h-14 object-cover border bg-cyan-400 rounded-full'} />
													<div>

														<p >

															{value?.firstName + " " + value?.lastName}
														</p>
														<p>{"value?.location"}</p>
													</div>
												</div>

												<FiEdit className='text-2xl  text-center ' onClick={() => {
													setModal({ show: true, dataModal: value, update: true })
												}} />

											</div>
											<hr />
											<div className='   w-[34vw] h-fit '>
												<p className='py-1  text-xl'>{value?.description}</p>
												<img src={value?.postImage} alt="" className='w-fit  object-cover  rounded-lg' />
											</div>


											<div className='flex justify-between p-2 px-1  items-center'>
												<div className='flex gap-x-8  items-center '>

													<SlLike className='text-xl  font-semibold' />
													<BiComment className='text-xl  font-semibold' />
													<BsSave className='text-xl  font-semibold' />
												</div>
												<BsShare className='text-xl  font-semibold' />
											</div>
										</div>
										{/* <div>


											<BsSave className='text-3xl fixed right-36 text-center font-semibold' />
										</div> */}

									</div>

									:
									<div className='flex flex-col  rounded-xl   justify-center items-center  shadow-lg  '>
										<div className='  rounded-lg px-4 '>

											<div className='flex    gap-x-4 p-2  justify-between items-center '>
												<div className='flex    gap-x-4'>
													<img src={value?.profilePicture} className={'w-14 h-14 object-cover border bg-cyan-400 rounded-full'} />
													<div>

														<p >

															{value?.firstName + " " + value?.lastName}
														</p>
														<p>{"value?.location"}</p>
													</div>
												</div>

												<FiEdit className='text-2xl  text-center ' />

											</div>
											<hr />
											<p className=' h-[60vh] w-[34vw] flex justify-center items-center text-3xl font-semibold '>{value?.description}</p>

											<hr />
											<div className='flex justify-between p-2 px-1 items-center'>
												<div className='flex gap-x-8 items-center'>
													<SlLike className='text-xl  font-semibold' />
													<BiComment className='text-xl  font-semibold' />
													<BsSave className='text-xl  font-semibold' />
												</div>
												<BsShare className='text-xl  font-semibold' />
											</div>
										</div>



									</div>


							}


						</div>
					})
				}



			</div>


		</>
	)
}

export default SingleUserPost