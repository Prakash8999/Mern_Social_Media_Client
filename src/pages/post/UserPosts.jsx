import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCompo from './PostCompo'
const UserPosts = () => {
	const [post, setPost] = useState('')
	useEffect(() => {
		axios(`http://localhost:5000/post`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).then((res) => {
			console.log(res.data);
			setPost(res?.data)
		}).catch((err) => {
			console.log(err);
		})
	}, [])
	return (
		<>
			<div>
			<PostCompo />
				<div>
{
	
}



				</div>
			</div>
		</>
	)
}

export default UserPosts