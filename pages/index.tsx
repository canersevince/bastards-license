import {useWeb3React} from "@web3-react/core";
import Head from "next/head";
import useEagerConnect from "../hooks/useEagerConnect";
import {providers} from '../util'
export default function Home() {
    const {account, library} = useWeb3React();
    const triedToEagerConnect = useEagerConnect();
    const isConnected = typeof account === "string" && !!library;

    return (
        <div className="bg-black min-h-screen">
            <Head>
                <title>YOURBASTARDYOURCALL - FUCK DMCA</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <p className="text-3xl text-center font-bold text-white py-8">YOUR BASTARD, YOUR CALL!</p>
                <p className="text-xl text-center font-bold text-white py-8">IF YOU ARE GIVING HOME TO A BASTARD (EITHER V1 AND V2), YOU HOLD ALL COPYRIGHT AND IP RIGHTS OF IT. ACTUALLY WE WANNA GO BEYOND THAT AND MAKE IT MOST BASTARDOUS WAY POSSIBLE. SO NOW THERE IS A SMART CONTRACT </p>
                <p className="text-xl text-center font-bold text-white py-8">ON THIS WEBSITE, YOU WILL BE ABLE TO  </p>

                Providerlar <br/>
                <select name="" id="">
                    {providers.map(provider => <option>{provider["name"]}</option>)}
                </select>


                
            </div>
        </div>
    );
}
