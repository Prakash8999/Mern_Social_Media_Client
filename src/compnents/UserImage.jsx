import React from 'react'
import { UsingContext } from '../context/Context'

const UserImage = ({className}) => {
  const { user } = UsingContext()
  return (
    <>
    <div>
      <img src={user?.profilePicture} alt="user" className={`object-cover bg-cyan-400 rounded-full  ${className} `} />
    </div>
    </>
  )
}

export default UserImage