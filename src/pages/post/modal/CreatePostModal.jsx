import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const CreatePostModal = ({datamodal, setModal}) => {
	const [post, setPost] = useState('')
	const [image, setImage] = useState('')


	const handleSubmit = () => {

		const formData = new FormData();
		formData.append("file", image);
		formData.append("upload_preset", "socialmedia");
		formData.append("folder", "socialmedia");

		fetch("https://api.cloudinary.com/v1_1/dtu9gszzu/image/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((res) => {

				console.log(res);
			}).catch((err) => {
				console.log(err);

			})
	}
	
	return (
		<>
  <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
          <div className="p-5 relative h-[80vh]  overflow-hidden w-[60vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  gap-y">
            <button
              onClick={() => {
                setModal({ show: false });
              }}
              className="absolute top-2 right-3 font-bold text-xl text-red-600"
              title="close"
            >
              <AiOutlineClose />
            </button>

			</div>
			</div>
		</>
	)
}

export default CreatePostModal