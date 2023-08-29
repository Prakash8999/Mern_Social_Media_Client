import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCompo from './PostCompo'
import UserImage from '../../compnents/UserImage'
import { SlLike } from 'react-icons/sl'
import { BiComment } from 'react-icons/bi'
import { BsShare, BsSave } from 'react-icons/bs'

const UserPosts = () => {
	const [post, setPost] = useState([])
	useEffect(() => {
		axios(`http://localhost:5000/post`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).then((res) => {
			// console.log(res.data);
			setPost(res?.data)
		}).catch((err) => {
			console.log(err);
		})
	}, [])
	return (
		<>
			<div className=''>
				<PostCompo />
				<div className='pt-4 flex flex-col justify-center w-full gap-y-6 pb-4 '>
					{
						post?.map((value, index) => {
							return <div key={index}>

								{
									value?.postImage ?
										<div className='flex border rounded-lg  flex-col  h-fit bg-white  px-4 justify-center items-center    shadow-lg '>
											<div className='  rounded-lg  '>

												<div className='flex   gap-x-2 p-2  justify-start  '>
													<img src={value?.profilePicture} className={'w-14 h-14 object-cover border bg-cyan-400 rounded-full'} />
													<div >

														<p >

															{value?.firstName + " " + value?.lastName}
														</p>
														<p>{"value?.location"}</p>
													</div>
												</div>
												<hr />
												<div className='   w-[34vw] h-fit object-cover'>
													<p className='py-1  text-xl'>{value?.description}</p>
													<img src={value?.postImage} alt="" className='w-fit    rounded-lg' />
												</div>


												<div className='flex justify-between p-2 px-1 items-center'>
													<div className='flex gap-x-8  items-center'>

														<SlLike className='text-xl  font-semibold' />
														<BiComment className='text-xl  font-semibold' />
														<BsSave className='text-xl  font-semibold' />
													</div>
													<BsShare className='text-xl  font-semibold' />
												</div>
											</div>

										</div>

										:
										<div className='flex flex-col  rounded-xl bg-white  justify-center items-center  shadow-lg  '>
											<div className='  rounded-lg px-4  '>

												<div className='flex gap-x-2  p-2  text-black   '>

													<img src={value?.profilePicture} className={'w-14 h-14 object-cover bg-cyan-400 rounded-full border'} />
													<div className='flex flex-col  '>
														<p >

															{value?.firstName + " " + value?.lastName}
														</p>
														<p>{"value?.location"}</p>
													</div>
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
			</div>
		</>
	)
}

export default UserPosts