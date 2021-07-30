import {useWeb3React} from "@web3-react/core";
import Head from "next/head";
import useEagerConnect from "../hooks/useEagerConnect";
import {providers} from '../util'
import {useState} from "react";

export default function Home() {
    const {account, library} = useWeb3React();
    const triedToEagerConnect = useEagerConnect();
    const isConnected = typeof account === "string" && !!library;

    return (
        <div className="min-h-screen bg-orangu flex justify-center charriot" style={{"backgroundColor": "coral"}}>
            <Head>
                <title>YOURBASTARDYOURCALL - FUCK DMCA</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="border-8 pageboxborder m-8 w-7/8 bg-pinku bg-opacity-90">
                <p className="text-6xl charriot text-center font-bold text-white py-8 text-blau shaketext">YOUR BASTARD, YOUR CALL!</p>

                {/* INFORMATION */}

                <select name="" id="">
                    {providers.map(provider => <option>{provider["name"]}</option>)}
                </select>  
                

                <div className="flex justify-around flex-wrap py-12"> 
                    <a className="p-8 bg-blau hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                        READ V1 LICENCE$HIT
                    </a>
                    <div className="p-8 bg-blau hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                    READ V2 LICENCE$HIT

                    </div>
                </div>
                <div className="flex justify-around flex-wrap py-12"> 
                    <a className="p-8 bg-red-600 hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                        MODIFY V1 LICENCE$HIT
                    </a>
                    <div className="p-8 bg-red-600 hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                    MODIFY V2 LICENCE$HIT

                    </div>
                </div>
                <div className="bg-black"> 
                    <p className="text-2xl charriot text-center font-bold text-green-500 py-2 px-4 "> EVERYTHING IS A REMIX </p>
                    <p className="text-2xl charriot text-center font-bold text-pink-800 py-2"> EVERY TECHNOLOGY IS BIASED </p>
                    <p className="text-2xl charriot text-center font-bold text-yellow-600 py-2"> EVERYTHING IS A PROGRAM </p>
                    <p className="text-2xl charriot text-center font-bold text-blue-600 py-2"> CODES ARE RUNNING CONTINUOUSLY</p>
                </div>
           


                
            </div>
        </div>
    );
}
