import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Signin from '../../assets/signin.json'
import Lottie, { LottiePlayer } from 'lottie-react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const naviGate = useNavigate()
	const handelSubmit = (e) => {
		e.preventDefault()
		axios('http://localhost:5000/auth/login', {
			method: "POST",
			data: {
				email: email,
				password: password,
			}

		},
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		).then((res) => {
	
			localStorage.setItem("token", res?.data?.token)
			localStorage.setItem("token1", "123432")
			const jwtdecode = jwtDecode(res?.data?.token)
			console.log(res?.data);
			// console.log(jwtdecode);
			naviGate('/home')
		}).catch((err) => {
			console.log(err);
			naviGate('/')
		})
	}
	return (
		<>
			<div className='flex'>


				<div className='w-1/2 flex justify-center items-center bg-blue-600 '>
					<Lottie className=' md:block hidden' animationData={Signin} />

				</div>


				<div className="flex items-center justify-center h-screen shadow-lg w-1/2">
					{/* {
  token ? ( naviGate('/home')   ) : ( */}
					<div className="p-8 max-w-md w-full bg-white rounded-lg">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
							Login
						</h2>
						<form onSubmit={handelSubmit}>
							<div className="mb-6">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="username"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your username"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									required
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="password"
									className="block text-gray-700 text-sm font-medium mb-2"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
									required
								/>
							</div>
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full flex justify-center items-center transition-colors duration-300"
							>
								Submit
							</button>
						</form>
						<p className="text-gray-600 text-sm mt-4">
							Don't have an account?{" "}
							<Link to="/register" className="text-blue-500 font-semibold">
								Sign up
							</Link>
						</p>
					</div>
					{/* } */}
				</div>
			</div>
		</>
	)
}

export default Login