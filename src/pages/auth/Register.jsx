import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { server } from '../..'
import Signup from '../../assets/signup.json'
import PageLoader from '../../assets/spinner.json'
import Lottie from 'lottie-react'
import Spinner from '../../compnents/Spinner'
const Register = () => {
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [location, setLocation] = useState('')
	const [occupation, setOccupation] = useState('')
	const [profile, setProfile] = useState("")
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [profileUrl, setProfileUrl] = useState('')
	const [buttonLoading, setButtonLoading] = useState(false)
	const [loader, setLoader] = useState(false)
	const naviGate = useNavigate()
	const handleImageUpload = () => {
		if (profile) {
			setButtonLoading(true)
			const formData = new FormData();
			formData.append("file", profile);
			formData.append("upload_preset", "socialmedia");
			formData.append("folder", "socialmedia");

			fetch("https://api.cloudinary.com/v1_1/dtu9gszzu/image/upload", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then((res) => {

					setProfileUrl(res?.secure_url)
					
					setButtonLoading(false)
				}).catch((err) => {
					console.log(err);
					setButtonLoading(false)
				})
			// .then(async (data) => {
			//   await axios("https://khatabook-one.vercel.app/updatebusiness", {
			//     method: "PATCH",
			//     data: { businessLogo: data.secure_url },
			//     headers: {
			//       "Content-Type": "application/json",
			//       Authorization: `Bearer ${localStorage.getItem("token")}`,
			//     },
			//   }).then((res) => {
			//     setisEditable(false);
			//     setformState({
			//       ...formState,
			//       businessLogo: res?.data.response.businessLogo,
			//     });
			//   });
			//   setIsImageSelected(false);
			//   setLogoUrl(data.secure_url);

			// })
			// .catch((error) => {
			//   console.error("Error:", error);
			// });


		}
	};






	const handleSubmit = (e) => {
		console.log("url", profileUrl);
		setLoader(true)
		e.preventDefault();
		axios('http://localhost:5000/auth/register', {
			method: "POST",
			data: {
				firstName: firstname,
				lastName: lastname,
				email: email,
				password: password,
				location: location,
				occupation: occupation,
				profilePicture: profileUrl
			},

		},

			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}).then((res) => {
				naviGate('/')
				console.log(firstname, lastname, email, password, location, occupation);
				setLoader(false)
			}).catch((err) => {
				console.log(err);
				setLoader(false)
			})
	}




	return (
		<>
    {loader && (
          <Lottie
		  animationData={PageLoader}
            className={
              "fixed z-[500] w-full top-0 h-screen  bg-black bg-opacity-20 text-center"
            }
          />
        )}


			<div className='md:flex'>
				<div className='w-1/2 flex justify-center items-center bg-blue-600 '>
					<Lottie className='w-[80%] h-[80%] md:block hidden' animationData={Signup} />
				</div>

				<div className="flex items-center justify-center h-screen md:shadow-xl px-2 md:w-1/2 bg-blue-600 md:bg-white">
					<div className="p-2 max-w-md w-full bg-white rounded-lg shadow-md md:shadow-none">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
							Sign up
						</h2>
						<div className="mb-2 flex gap-x-2 justify-between">

							<input
								type="file"
								id="image"
								className="border border-gray-300 rounded-lg py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 w-2/3"
								placeholder="Enter your email"

								onChange={(e) => {
									setProfile(e.target.files[0])
								}}
								required
							/>

							{
								profileUrl.length > 10 ? <button className="bg-gray-400 opacity-70 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 w-1/3 cursor-not-allowed" >Upload</button> : <button onClick={handleImageUpload} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 w-1/3 text-center " >{!buttonLoading ? 'Upload' : <Spinner />}</button>
							}

							{/* <button onClick={handleImageUpload} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 w-1/3" >Upload</button> */}
						</div>

						<form onSubmit={handleSubmit} >




							<div className='flex justify-between'>
								<div className="mb-2">
									<label
										htmlFor="firstname"
										className="block text-gray-700 text-sm font-medium mb-1"
									>
										First Name
									</label>
									<input
										type="text"
										id="First_Name"
										className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
										placeholder="Enter your Username"
										value={firstname}
										onChange={(e) => {
											setFirstname(e.target.value)
										}}
										required
									/>
								</div>
								<div className="mb-2">
									<label
										htmlFor="lastname"
										className="block text-gray-700 text-sm font-medium mb-1"
									>
										Last Name
									</label>
									<input
										type="text"
										id="First_Name"
										className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
										placeholder="Enter your Username"
										value={lastname}
										onChange={(e) => {
											setLastname(e.target.value)
										}}

										required
									/>

								</div>
							</div>




							<div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Location
								</label>
								<input
									type="text"
									id="location"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"
									value={location}
									onChange={(e) => {
										setLocation(e.target.value)
									}}
									required
								/>
							</div>



							<div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Occupation
								</label>
								<input
									type="text"
									id="occupation"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"
									value={occupation}
									onChange={(e) => {
										setOccupation(e.target.value)
									}}
									required
								/>
							</div>
							{/* <div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Profile Pitcure
								</label>
								<input
									type="file"
									id="profile"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"

									required
								/>
							</div> */}

							<div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									required
								/>
							</div>
							<div className="mb-2">
								<label
									htmlFor="password"
									className="block text-gray-700 text-sm font-medium mb-1"
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
								className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300"
							>
								Sign up
							</button>
						</form>
						<p className="text-gray-600 text-sm mt-4">
							Already have an account?{" "}
							<Link
								to="/"
								className="text-blue-500 font-semibold hover:underline"
							>
								Login
							</Link>
						</p>

					</div>
				</div>
			</div>


		</>
	)
}

export default Register