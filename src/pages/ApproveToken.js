import { useState } from "react";
import {Row, Col, Form, Button } from "react-bootstrap";

const ApproveToken = ({address,contract,provider,tokenInfo , setReload , reload}) => {
    const [data,setData] = useState({
        account:"",
        value: ""
    })

    const handelChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }
    const actionApprove = async () =>{
        if (data.value <= 0){
            alert("Invalid Amount");
            return
        }
        if (data.account === ""){
            alert("Invalid account!")
            return
        }
        if (provider){
            try {
                const value =Number(data.value)* 10**Number(tokenInfo.decimals)

                contract.methods.approve(data.account, value).send({from: address})
                    .on("transactionHash", function(hash){
                        console.log(":approve hash:",hash)
                    })
                    .on("receipt",function(receipt){
                        console.log(":approve receipt:",receipt)
                        setReload(!reload)
                    })
                    .on('error',function(error){
                        console.log(":approve Error: ",error)
                    })
                
                    
                
            } catch (error) {
                if (error.message.includes("User denied transaction signature")) {
                    alert("User denied transaction signature");
                  } else {
                    console.error("Error actionTransfer:", error);
                    alert("Error performing transfer.");}
                
            }
        }
    }
    return(
        <div className="my-5">
            <h3>Approve</h3>
            <Row>
                <Col md={4}>
                    <Form.Control
                        type='text'
                        placeholder='Spender'
                        name="account"
                        value={data.account}
                        onChange={e=>handelChange(e)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Control
                        type='text'
                        placeholder='Amount'
                        name="value"
                        value={data.value}
                        onChange={e=>handelChange(e)}
                    />
                </Col>
                <Col>
                    <Button onClick={() => actionApprove()}>Approve</Button>
                </Col>
                
            </Row>

        </div>

    )
}

export default ApproveToken;