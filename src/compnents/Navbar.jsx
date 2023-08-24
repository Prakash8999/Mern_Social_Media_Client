import React, { useState } from 'react'
import { UsingContext } from '../context/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	const { user } = UsingContext()

	return (
		<>
			<div className='hidden md:block'>

				<div className='flex justify-between items-center h-[10vh] bg-[#eaf0e7] '>
					<div className='flex gap-x-7 items-center justify-between px-4 w-1/2'>
						<p className='font-semibold text-2xl text-blue-600'>CircleReact</p>
						{/* <input type="search" className='w-[60%] h-10'/> */}
						<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
						<div className="relative w-[60%] h-10 ">
							<div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
							</div>
							<input type="search" id="default-search" className=" block w-full h-full pl-10 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Users" required />
							{/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
						</div>
					</div>


					<div className='flex px-4 items-center gap-x-12 w-1/2 justify-end' >
						<select name="" id="" className='w-[35%] h-10 px-2 rounded-md'>
							<option value="">{user ? user?.firstName + " " + user?.lastName : "Name"}</option>
							<option value="">Logout</option>
						</select>
						<p>Mode</p>
					</div>
				</div>
			</div>

			<div className="flex px-4 justify-between pt-4 md:hidden">
				<div>

					<button
						onClick={toggleMenu}
						type="button"
						className="inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none   transition duration-200 ease-in-out"
						aria-label="Menu"
					>
						<svg
							className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<div className={`fixed  top-16 ${isOpen ? "block bg-slate-300 h-[50vh] w-[70vw]  pt-2" : "hidden"}`}>
						<Link
							to={"/home"}
							className="block text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
						>
							All Blogs
						</Link>
						<Link
							to={"/create"}
							className="block text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
						>
							Create New post
						</Link>
						<Link
							to={"/post"}
							className="block text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
						>
							My Blogs
						</Link>
						<button

							className="block text-red-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
						>
							{" "}
							Logout
						</button>
					</div>
				</div>
				<div>
					<div className="relative w-full h-10 ">
						<div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
						</div>
						<input type="search" id="default-search" className=" block w-full h-full pl-10 pr-2 pb-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Users" required />
						{/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
					</div>
				</div>

			</div>

		</>
	)
}

export default Navbar