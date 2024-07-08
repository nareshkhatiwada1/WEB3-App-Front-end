import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card,Table } from 'react-bootstrap'
import {useAuth} from '../hook/useAuth'
import TransferToken from './TransferToken'
import ApproveToken from './ApproveToken'

const Home = () => {
  const {address, contract, provider }=useAuth();
  const [tokenInfo, setTokenInfo]= useState({
    name:"",
    symbol:"",
    totalSupply:"",
    balance:"",
    decimals:""

  })
  const [reload, setReload] = useState(true);
  const [list,setList] = useState([]);

  const fetchToken = async () => {
    if(provider ){
      try {
       
        const name = await contract.methods.name().call();
        const symbol= await contract.methods.symbol().call();
        const totalSupply = await contract.methods.totalSupply().call();
        const balance = await contract.methods.balanceOf(address).call();
        const decimals = await contract.methods.decimals().call();
          

        setTokenInfo({
          name:name,
          symbol:symbol,
          totalSupply:Number(totalSupply)/10**Number(decimals),
          balance:Number(balance)/10**Number(decimals),
          decimals:Number(decimals)


        })
         
        
      } catch (error) {
        console.log("Error fectToken: ",error)
        
      }
    }
  }

  const getTransferEvent = async  () => {
    if(provider){
      try {
        const transferList = await contract.getPastEvents('Transfer',{
          fromBlock:0,
          toBlock:'latest'
          
      })
      
      console.log("transferList:",transferList)
      setList(transferList.reverse())  
      } catch (error) {
        console.log("error getEvent: ",error)
        
      }
    }
  }
  useEffect(() => {
    fetchToken()
    getTransferEvent()
  },[provider, reload])


  return (
    <Container className='my-5'>
      <Row>
        <Col xs={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Token: {tokenInfo.name} ({tokenInfo.symbol})</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Max Supply: {tokenInfo.totalSupply}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Balance: {tokenInfo.balance} {tokenInfo.symbol}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr className="border border-danger border-2 opacity-50" />

      <TransferToken
        address={address}
        contract={contract}
        provider={provider}
        tokenInfo={tokenInfo}
        setReload={setReload}
        reload={reload}
      />

      <hr className="border border-primary border-3 opacity-75" />
      <ApproveToken
        address={address}
        contract={contract}
        provider={provider}
        tokenInfo={tokenInfo}
        setReload={setReload}
        reload={reload}
      />

<hr className="border border-primary border-3 opacity-75" />

      <div className='my-5'>
        <h3>Transactions</h3>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Explore</th>
            </tr>
          </thead>
          <tbody>
            {list && list.length > 0 && list.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.returnValues.from}</td>
                <td>{item.returnValues.to}</td>
                <td>{Number(item.returnValues.value) / 10 ** Number(tokenInfo.decimals)} {tokenInfo.symbol}</td>
                <td><a href={`https://sepolia.etherscan.io/tx/${item.transactionHash}`} target='_blank' rel="noopener noreferrer">Explore</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Home;