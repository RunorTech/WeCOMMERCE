// import React from 'react'
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
import axios from 'axios';

import { FormEvent, useState } from "react"

const Form = ({ type }: { type: string }) => {

    const btnName = type[0].toUpperCase() + type.slice(1);

    const [formData, setFormData] = useState({
        confirmPassword: "",
        email: "",
        password: ""
    })
    const { email, password, confirmPassword } = formData;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        // console.log(formData)
        // const hello = "hello"
        const stringifyFormData = JSON.stringify(formData)

        try {
            const response = await axios.post('http://localhost:3000/sign-up', stringifyFormData);
            console.log( response);
          } catch (error) {
            console.error('Error:', error);
          }
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="grid gap-3">
               {type === "login"|| type === "sign-Up" ? <div>
                <CustomInput value={email} type="email" label="email" id="email" name='email' placeholder="Enter your email" onChange={handleInputChange} required="required" />
                <CustomInput value={password} type="password" label="password" id="password" name='password' placeholder="Enter your password" onChange={handleInputChange} required="required" />
               </div> : null }
                {type === "sign-Up" ?
                    <CustomInput value={confirmPassword} type="password" label="confirm password" id="confirm password" name='confirmPassword' placeholder=" Confirm password" onChange={handleInputChange} required="required" /> : null}
            </div>
            {type === "login" ? <div className="my-2 w-full text-right hover:underline hover:underline-offset-4 ">
                <Link to="/forgot-password">Forgot password</Link>
            </div> : <div className="my-8"></div>}

            <button className=" hover:shadow-md hover:shadow-slate-400 transition-all duration-500 ease-in-out active:translate-y-1 mt-3 mx-auto w-full bg-lime-400 py-2 rounded-lg text-white text-xl" type="submit">{btnName}</button>
        </form>
    )
}

export default Form
