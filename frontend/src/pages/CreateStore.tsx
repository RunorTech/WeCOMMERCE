// import React from 'react'
import { RxAvatar } from "react-icons/rx";
import Form from "../components/form/Form";
import { useRef, useState } from "react";
import { convertToBase64 } from "../helper";
// import { usePageContext } from "../PageContext";
// import { Link } from "react-router-dom"

const CreateStore = () => {

    const [imageBase64, setImageBase64] = useState<string | undefined>();

    // const { storeName } = usePageContext();
    // const storeNameLink = storeName.split(' ').join('-')

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();  // Trigger file input click
        }
      };
      const handleProfileUpload = async (e :  React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
              const base64 = await convertToBase64(file);  // Convert image to base64
              if (typeof base64 === 'string') {
                setImageBase64(base64);
              }
            } catch (error) {
              console.error('Error converting file to base64:', error);
            }
          }
      }

    return (
        <section id="login" className="">
             <div className=" container  mx-auto p-4">

             <div className="bg-slate-50 w-full py-5 px-2 max-w-md mx-auto rounded-md">
                    <div className="mx-auto w-28 ">
                        <div className="text-[6rem] text-lime-500">
                            {imageBase64? <img className=" rounded-full w-28 h-28 object-cover " src={imageBase64} alt="profile pic" /> : <RxAvatar />}
                        </div>
                    </div>

                   <form action="">
                    <label htmlFor="store profile" >
                        <input type="file" className=" hidden" onChange={handleProfileUpload}   ref={fileInputRef} />
                        <div onClick={handleFileUpload} className="w-ful text-slate-500 text-center cursor-pointer hover:underline ">Upload store profile</div>
                    </label>
                 
                   </form>

                    <div>
                        <Form type="create Store"/>
                  
                    </div>
                </div>
             </div>
            {/* <Link to={`/store/${storeNameLink}`}><div className=" active:translate-y-2 font-semibold text-white bg-lime-600 py-1 px-3 rounded-md transition-all duration-700 ease-in-out">my store</div></Link> */}
        </section>
    )
}

export default CreateStore
