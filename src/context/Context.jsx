import jwtDecode from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import extractToken from '../utils/GetToken'
import axios from 'axios'

export const DataContext = createContext(null)


const Context = ({ children }) => {
	const [user, setUser] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		if (extractToken()) {
			const decode = jwtDecode(localStorage.getItem("token"))
			
			setId(decode?.id)
			axios(`http://localhost:5000/user/${decode?.id}`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}).then((res) => {
				
				setUser(res.data)
			}).catch((err) => {
				console.log(err);
			})

		}
	}, [])


	return (


		<DataContext.Provider value={{ user,id }}>
			{children}
		</DataContext.Provider>
	)
}

const UsingContext = () => {
	return useContext(DataContext)
}

export { Context, UsingContext }