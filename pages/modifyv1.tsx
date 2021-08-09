import {useState} from "react";
import useContract from "../hooks/useContract";
import {LICENCE_ABI} from "../util";
import useEagerConnect from "../hooks/useEagerConnect";
import {useWeb3React} from "@web3-react/core";

export default function ModifyV1() {
    useEagerConnect()
    const {account, library} = useWeb3React();
    const isConnected = typeof account === "string" && !!library;
    const contract = useContract("0x9602874e70fa093793cadac9d0c392f80e3a80e0", LICENCE_ABI, true)
    const [text, setText] = useState("")
    const [bastardID, setBastardID] = useState(null)

    const modify = async () => {
        if (typeof bastardID === null || !contract) return
        try {
            const tx = await contract.setLicenseForBASTARD("1",bastardID,text)
            const receipt = await tx.wait()

            if(receipt.confirmations > 0) {
                alert("EPIC!")
            }

        } catch (e) {
            alert(e.message)
            console.log(e.message)
        }
    }

    if(!isConnected) {
        return <>
        <h1>
            Please connect to ethereum network
        </h1>
        </>
    }
    return (
        <div className="bg-red-500 flex flex-col items-center justify-center p-5">
            <input className={"p-5"} type={"number"} placeholder={"v1 bastard ID"} min={0} max={11305} onChange={e => setBastardID(prev => e.target.value)}/>
            <textarea placeholder={"text"} onChange={e => setText(prev => e.target.value)} className={"mt-5 p-5"}/>
            <button className={"mt-5 bg-blau p-5"} onClick={modify}>
                modify
            </button>
        </div>
    )
}