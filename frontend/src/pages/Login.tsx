// import React from 'react'
import { RxAvatar } from "react-icons/rx";
import Form from "../components/form/Form";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section id="login" className="">
            <div className=" container  mx-auto p-4">

                <div className="bg-slate-50 w-full py-5 px-2 max-w-md mx-auto rounded-md">
                    <div className="mx-auto w-20 ">
                        <div className="text-[6rem] text-lime-500">
                            <RxAvatar />
                        </div>
                    </div>

                    <div>
                        <Form type="login"/>
                        <p className="my-2">Don't have an account? <Link to="/sign-up"><span className=" text-lime-800 hover:underline hover:underline-offset-4 ">Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
