'use client'
import Link from "next/link"
import {useState} from 'react'
import Image from "next/image"
import * as React from 'react';


const _Main = (props: { sign: boolean; }) => {

    const [validateEmail, setValidateEmail] = useState(false)
    const [value, setValue] = useState(props.sign)
    const [formValid, setFormValid] = useState(true)
    const [formData, setFormData] = useState<{ [key: string]: string}>({})
    const [showPassword, setShowPassword] = useState(false)

    const data = {
        'formFill': [
            {'id':1,'placeholder':'Enter your full name','type': 'text', 'autocomplete':'name'},
            {'id':2,'placeholder':'Enter your email address', 'type':'email', 'autocomplete':'email'},
            {'id':3,'placeholder':'Enter your password','type':'password', 'autocomplete':'new-password'},
            {'id':4,'placeholder':'Confirm your password','type':'password', 'autocomplete':'new-password'},
        ],
        'loginFill': [
            {'id':1,'placeholder':'Enter your email address', 'type':'email', 'autocomplete':'email'},
            {'id':2,'placeholder':'Confirm your password', 'type':'password', 'autocomplete':'current-password'},
        ],
        'imageName': [
            {'id': 1,'name':'google', 'url':'/google'}, 
            {'id': 2,'name':'facebook', 'url':'/facebook'}, 
            {'id': 3,'name':'apple', 'url':'/apple'}, 
            {'id': 4,'name':'microsoft', 'url':'/microsoft'},
        ],
    }

    const validate = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const currentData = value ? data.formFill : data.loginFill
        const isValid = currentData.every(fill => formData[fill.id])


        if (isValid) {
            setTimeout(() => {
                setValidateEmail(true)
            }, 500)
        } else {
            setFormValid(false)
        }
    }

    const handleInputChange = (id:number, event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [id]: event.target.value
        }))

        setFormValid(true)
    }

    const click = () => {
        setTimeout(() => {
            setValue(prevState => !prevState)
            setFormData({})
        }, 300)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState)
    }

    return (
        validateEmail === false ?
                <>
                    <p className="font-Inter font-semibold text-lg">
                        {value === true ? "Sign up to conitnue" : "Sign in to continue"}
                    </p>

                    <form className={`flex flex-col gap-2 w-full transition-opacity duration-300`} onSubmit={validate}>
                        {(value === true ? data.formFill : data.loginFill).map(fill =>
                            <div key={fill.id} className="relative w-full">
                                <input 
                                    key={fill.id}
                                    type={(fill.type === 'password' && showPassword) ? 'text' : fill.type} 
                                    placeholder={fill.placeholder} 
                                    value={formData[fill.id] || ''}
                                    onChange={(e) => handleInputChange(fill.id, e)}
                                    autoCapitalize={fill.type === 'text' ? 'words' : undefined}
                                    autoComplete={fill.autocomplete}
                                    required
                                    className="outline-none w-full px-2 py-3 border text-base border-[#9c9c9c] pr-[10%]"
                                />

                                {
                                    fill.type === 'password' && (
                                        <Image 
                                            src={showPassword ? '/icons/eye.svg' : '/icons/eye-off.svg'}
                                            width={24}
                                            height={24}
                                            alt="Toggle Password Visibility"
                                            className="absolute trans cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        />
                                    )
                                }
                            </div>
                        )}

                        {value === true ? 
                                <>
                                    <p className="text-sm space-x-1">
                                        <span>By signing up, I accept the Sceptre</span>
                                        <Link href="" className="underline">Cloud Terms of Services</Link>
                                        <span>and acknowledge the</span>
                                        <Link href="" className="underline">Privacy Policy</Link>
                                    </p>
                                    <button type="submit"  className="w-full py-3 text-center bg-black text-white rounded-sm font-medium text-base">Sign Up</button>
                                </>
                            :
                                <>
                                    <div className="flex flex-row-reverse items-center mr-auto gap-2">
                                        <label htmlFor="checkbox">Remember Me</label>
                                        <input type="checkbox" name="" id="checkbox" className="w-4 h-4" />
                                    </div>
                                    <button type="submit" className="w-full py-3 text-center bg-black text-white rounded-sm font-medium text-base">Login</button>
                                </>

                        }
                        
                        {!formValid && (
                            <p className="text-red-500">Please fill out all fields correctly</p>
                        )}
                    </form>

                    <p>or continue with</p>

                    <div className="flex gap-8">
                        {data.imageName.map(image => {
                            return (
                                <Link key={image.id} href={image.url} passHref legacyBehavior>
                                    <a>
                                        <Image
                                            src={`/icons/${image.name}.svg`}
                                            width={46}
                                            height={46}
                                            alt={image.name}
                                        />
                                    </a>
                                </Link>
                            )
                        })}
                    </div>

                    {value ?
                        <p onClick={click}  className="flex gap-1">
                            <span>Already have a Sceptre account?</span> 
                            <Link href="" className="underline">Login in</Link>
                        </p>
                        :
                        <p className="flex gap-1">
                            <span>New to Sceptre?</span> 
                            <Link href="" onClick={click} className="underline">Create an account</Link>
                        </p>
                    }

                </>
            :
                <>
                    <p className="font-semibold text-xl">Check your inbox to login</p>

                    <Image
                        src={`/icons/Email.svg`}
                        width={123}
                        height={108}
                        alt="Email"
                        className="my-10"
                    ></Image>

                    <p className="space-x-1">
                        <span>To complete setup and login, we have sent a link to your email</span>
                        <Link 
                            href="mailto:sceptre12345@gmail.com" 
                            passHref 
                            legacyBehavior
                        >
                                <a href="mailto:sceptre12345@gmail.com" className="font-bold">
                                    sceptre12345@gmail.com
                                </a>
                        </Link>
                        <span>click the link to complete</span>
                        <span>your verification</span>
                    </p>

                    <Link href="#" className=" mr-auto">Resend verification email</Link>
                </>
    )
}

export default _Main