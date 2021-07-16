import {useWeb3React} from "@web3-react/core";
import Head from "next/head";
import useEagerConnect from "../hooks/useEagerConnect";

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

                burayı halledersin berk

            </div>
        </div>
    );
}
