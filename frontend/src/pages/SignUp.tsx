// import React from 'react'

import { RxAvatar } from "react-icons/rx"
import Form from "../components/form/Form"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <section id="sign-up" className="">
    <div className=" container mx-auto p-4">

        <div className="bg-slate-50 w-full py-5 px-2 max-w-md mx-auto rounded-md">
            <div className="mx-auto w-20 ">
                <div className="text-[6rem] text-lime-500">
                    <RxAvatar />
                </div>
            </div>

            <div>
                <Form type="sign-Up"/>
                <p className="my-2">Already have an account? <Link to="/login"><span className=" text-lime-800 hover:underline hover:underline-offset-4 ">Login</span></Link></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default SignUp
