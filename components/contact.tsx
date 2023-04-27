'use client'
import { useState } from "react";
import { RxCross2 } from 'react-icons/Rx'
import localFont from "next/font/local";

const poppins = localFont({
    src: [
        {
            path: '../public/fonts/Poppins-ExtraLight.ttf',
            weight: '400'
        },
    ],
    variable: '--font-pop'

})

export default function Contact() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Number: ", number);
        console.log("Email: ", email);
        console.log("Message: ", message);
        // Do something with the form data
    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className='"text-gray-500 hover:text-gray-700 md:text-gray-300 md:hover:text-gray-500'>
                <p className=""></p>Contact
            </button>
            <div className={`${poppins.variable} font-pop`}>
            <div
                className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"
                    } bg-opacity-75 bg-gray-900`}
            >
                
                    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                        <div className="relative w-screen max-w-md">
                            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                <div className="px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className={`${poppins.variable} font-pop text-lg font-extralight text-gray-900 `}>Do Contact</h2>
                                        <div className="ml-3 h-7 flex items-center">

                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <RxCross2 className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <h2 className={`${poppins.variable} font-pop text-sm font-extralight text-gray-900 px-4 sm:px-6 py-3`}>Please fill out the form below, and we’ll get back to you promptly.</h2>

                                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                    <div className="absolute inset-0 px-4 sm:px-6">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className={`${poppins.variable} font-pop text-sm font-extralight block text-gray-700`}
                                                >
                                                    Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        autoComplete="name"
                                                        placeholder="Full Name..."
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                        className="shadow-sm text-gray-700 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className={`${poppins.variable} font-pop text-sm font-extralight block text-gray-700`}
                                                >
                                                    Email Address
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        placeholder="abc@xyz.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                        className="shadow-sm focus:ring-indigo-500 text-gray-700 p-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="number"
                                                    className={`${poppins.variable} font-pop text-sm font-extralight block text-gray-700`}
                                                >
                                                    Mobile No.
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="number"
                                                        name="number"
                                                        type="tel"
                                                        autoComplete="tel"
                                                        placeholder="0092-xxxx-xxxxxxx"
                                                        value={number}
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        required
                                                        className="shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="number"
                                                    className={`${poppins.variable} font-pop text-sm font-extralight block text-gray-700`}
                                                >
                                                    Message
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        autoComplete="tel"
                                                        placeholder="Text..."
                                                        value={number}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        required
                                                        className="shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-cyan-300 hover:bg-cyan-500">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
