import {useWeb3React} from "@web3-react/core";
import Head from "next/head";
import useEagerConnect from "../hooks/useEagerConnect";
import {providers} from '../util'
export default function Home() {
    const {account, library} = useWeb3React();
    const triedToEagerConnect = useEagerConnect();
    const isConnected = typeof account === "string" && !!library;

    return (
        <div>
            <Head>
                <title>YOURBASTARDYOURCALL - FUCK DMCA</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                Providerlar:
                {providers.map(provider => <div>{JSON.stringify(provider)}</div>)}
            </div>
        </div>
    );
}
