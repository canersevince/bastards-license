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

                <p className="text-3xl charriot  font-bold text-black py-2 px-4 text-center">!DRATSAB HOHOHOHOHOHOHOHOHOHOHHOHOHOHOHOY </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4 text-center">IF YOU ARE PROVIDING A NICE WARM HOME TO A BASTARD GAN PUNK (EITHER <span className="text-red-500">V1</span>  OR <span className="text-blue-500">V2</span>) 
                , YOU HOLD ALL COPYRIGHT AND IP RIGHTS TO ARTWORK. </p>
             
               
                <p className="text-2xl charriot  font-bold text-black py-2 px-4">WELL IT'S TIME TO GET MORE BASTARDOUS. RIGHT NOW THERE IS AN OFFICIAL SMART CONTRACT WHERE YOU CAN WRITE YOUR CUSTOM LICENCE FOR THE BASTARDS YOU HOLD. </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">ON THIS WEBSITE YOU CAN INTERACT WITH THE SMART CONTRACT. YOU CAN VIEW WHAT PEOPLE WROTE IN BASTARD LICENCE, OR YOUR CAN EDIT THE LICENCE OF YOUR BASTARD EITHER FULLY ON CHAIN, OR OFFCHAIN (IPFS). </p>
                <p className="text-2xl charriot font-bold text-red-700 py-4 px-4">I WILL GIVE YOU EXAMPLES ON HOW YOU CAN USE THIS DATA AREA DESIGNATED FOR YOUR BASTARD: </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4"> > YOU CAN WRITE WHICH PERSON/DAO/WHATEVER YOU GIVE PERMISSION TO USE IT FOR SPECIFIC THING </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4"> > CLAIM THAT THIS BASTARD IS PUBLIC DOMAIN </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4"> > OR CAN SAY HI TO YOUR FRIENDS & BELOVED ONES</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR USE HERE AS A CANVAS FOR YOUR TEXTS </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR A MEDIUM FOR YOUR CONCEPTUAL PIECE</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR A TEXT SCORE FOR A PERFORMANCE</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR FILL IT WITH YOUR JUNK</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR ASCII COPYPASTA</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR POEM</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR BASTARD LORE YOU MADE UP</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR AN ULTRA MEGA META SHIT</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR A RIDDLE</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR YOUR NUDES</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> A LOVE LETTER</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR A MATH EQUATION THAT WILL CHANGE EVERYTHING FOREVER</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> OR YOUR ENCRYPTED MESSAGE THAT NO ONE WILL TRY TO CRACK</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> ROAST YOUR BASTARD OR FLATTER</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> MAKE THEM YOUR FLAG</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> PERFORM A RITUAL</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> IF YOU WANNA LOCK THE TEXT FOREVER, YOU GOTTA FAREWELL WITH YOUR BASTARD AND TRANSFER THEM TO A WALLET THAT NOBODY OWNS. </p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> IN SHORT</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> DO WHATEVER YOU SEE FIT</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> IT IS ACTUALLY A PLAYGROUND. YOU ARE PART OF A SOCIAL EXPERIMENT.</p>
                <p className="text-4xl charriot font-bold text-black py-12 px-4 text-center shaketext"> LESGOOOOOOOOOOOOOOOOOOOO 1 2 3 4 </p>
             
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> BE A NICE BASTARD</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> BE COOL WITH PEOPLE REMIXING YOUR BASTARD, SUPPORT CREATIVITY</p>
                <p className="text-2xl charriot font-bold text-black py-2 px-4">> NEW OWNER SHOULD NOT ASK FOR RETROSPECTIVE CLAIM OR BAN. NEW RULES DEAL WITH THINGS FROM THE MOMENT LICENCE IS UPDATED. </p>
                <p className="text-2xl charriot  font-bold text-black py-2 px-4">> DO NOT BE A DOUCH PLS. </p>
                <p className="text-2xl charriot  font-bold text-black py-2 px-4">> EXPLORE YOUR ARTISTRY! </p>
                <p className="text-2xl charriot  font-bold text-black py-2 px-4">> V I B E </p>
                <p className="text-2xl charriot  font-bold text-black py-2 px-4">> LISTEN TO PLUNDERPHONICS BY JOHN OSWALD </p>

                <p className="text-2xl charriot  font-bold text-black py-2 px-4 text-center"> -------------------------------------- </p>

                <p className="text-2xl charriot  font-bold text-black py-2 px-4 text-center">YEAH, THIS IS SUPPOSED TO BE THE NAVBAR LOL: </p>
           

                <div className="flex justify-around flex-wrap py-12"> 
                    <a className="p-8 bg-blau hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                        READ V1 LICENCE
                    </a>
                    <div className="p-8 bg-blau hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                    READ V2 LICENCE

                    </div>
                </div>
                <div className="flex justify-around flex-wrap py-12"> 
                    <a className="p-8 bg-red-600 hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                        MODIFY V1 LICENCE
                    </a>
                    <div className="p-8 bg-red-600 hover:bg-black hover:text-white text-white border-8 text-2xl "> 
                    MODIFY V2 LICENCE

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
