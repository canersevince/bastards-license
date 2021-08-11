import {useState} from "react";
import useContract from "../hooks/useContract";
import {LICENCE_ABI, V1IDS} from "../util";
import useEagerConnect from "../hooks/useEagerConnect";
import {useWeb3React} from "@web3-react/core";

export default function ModifyV1() {
    useEagerConnect()
    const {account, library} = useWeb3React();
    const isConnected = typeof account === "string" && !!library;
    const contract = useContract("0x9602874e70fa093793cadac9d0c392f80e3a80e0", LICENCE_ABI, true)
    const [text, setText] = useState("")

    const [bastardID, setBastardID] = useState("5389")

    const [licenseText, setLicenseText] = useState("")

    const [versionSelect, setVersionSelect] = useState("1")

    const [readLicense, setReadLicense] = useState("")

    const getLicense = async () => {
        if (typeof bastardID === null || !contract) return
        try {
            const tx = await contract.showLicenseForBASTARD(versionSelect,bastardID)
            setLicenseText(tx)
            console.log(tx)
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
        <div className="bg-red-500 flex flex-col justify-center p-5 charriot min-h-screen">
            <div className="bg-red-500 flex flex-col  p-5 text-3xl">
                <div className="flex  items-center justify-around p-5">
                    <p>SELECT BASTARD VERSION:</p>
                    <select className={"p-5"} type={"number"} placeholder={"v1 bastard ID"} onChange={e => setVersionSelect(prev => e.target.value)}>
                        <option value="1">V1</option>
                        <option value="2">V2</option>
                    </select>
                </div>
                <div className="flex  items-center justify-around">
                    <p>SELECT BASTARD ID:</p>
                    
                    {
                        (versionSelect === "1") ? 
                        <select className={"p-5 "} type={"number"} placeholder={"TYPE v2 bastard ID"} onChange={e => setBastardID(e.target.value)}>
                            {V1IDS.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select> :

                        <input className={"p-5"} type={"number"} placeholder={"V2 ID"} min={0} max={11305} onChange={e => setBastardID(e.target.value)}/>

                    }
               </div>
  
                    
                    
                    <button className={"mt-5 bg-blau p-5"} onClick={getLicense}>
                        readLicense V{versionSelect} - {bastardID}
                    </button>

                    <p className="p-6 text-center">{licenseText}</p>
            </div>
            
        </div>
    )
}