// import React from 'react'
import { PiEyeClosedBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
declare interface CustomInputProps {
    type: string,
    required: string
    value: string
    id: string
    name: string
    placeholder: string
    label: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ required, label, value, type, id, name, placeholder, onChange }: CustomInputProps) => {
    const labelName = label[0].toUpperCase() + label.slice(1);
    const [seePassword, setSeePassword] = useState(false);

    return (
        <div className=" grid gap-3">
            <label className="text-lg" htmlFor={labelName}>{labelName}: </label>
            <div className=" flex items-center bg-slate-100 rounded-md py-3 px-2 shadow-md shadow-neutral-400 focus-within:-translate-y-2 ">
                <input className="w-full h-full outline-none bg-transparent  " required={required === "required"} value={value} id={id} 
                
                 type={ `${type === "password" ? `${seePassword ? " " : type}` : type}` } 
                 
                 name={name} placeholder={placeholder || "Enter text"} onChange={onChange} />
                {type === 'password' ? <div>
                    <div onClick={() => {
                        setSeePassword((prev) => !prev)
                    }}>
                        {seePassword ? <PiEyeClosedBold /> : <FaEye />}
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

export default CustomInput
