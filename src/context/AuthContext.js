import { useState, useEffect, createContext } from "react";
import {Web3, Contract} from 'web3';
import abi from './artifacts/abi.json';

const defaultProvider = {
    address : null,
    connectd : false,
    provider : null,
    contract : null,
    loading : true,
    setAddress: ()=> null,
    setProvider: ()=> null,
    setLoading: ()=> null,
    login: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider);

//0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd
//0x65a5ba240CBd7fD75700836b683ba95EBb2F32bd
//0xCE82803E4261049D26fea8ad96Db6f277007279a
const AuthProvider = ({children}) => {
    const[address, setAddress] = useState(defaultProvider.address)
    const[connectd, setConnedted] = useState(defaultProvider.connectd)
    const[provider, setProvider] = useState(defaultProvider.provider)
    const[contract, setContract] = useState(defaultProvider.contract)
    const[loading, setLoading] = useState(defaultProvider.loading)

    useEffect(() => {
        const initAuth = async () => {
            if (window.ethereum){
                const web3 = new Web3(window.ethereum);
    
                const accounts = await web3.eth.getAccounts();

                const contractInst = new Contract(abi, "0xCE82803E4261049D26fea8ad96Db6f277007279a",web3);
                setContract(contractInst)

                setAddress(accounts[0])
                setProvider(web3)
                setConnedted(true);
                
            } else{
                alert("please install metamask")
            }
        }
        initAuth()

    },[]);

    const handleLogin = async () => {
        if (window.ethereum){
            const web3 = new Web3(window.ethereum);

            await window.ethereum.request({method: "eth_requestAccounts" })

            const accounts = await web3.eth.getAccounts();
            setAddress(accounts[0])
            setProvider(web3)
            setConnedted(true);
            
        } else{
            alert("please install metamask")
        }
    }
    const values = { 
        address,
        connectd,
        provider,
        contract,
        loading,
        setAddress,
        setLoading,
        login: handleLogin
    }
    return <AuthContext.Provider value = {values}>{children}</AuthContext.Provider>
}
export { AuthContext , AuthProvider}