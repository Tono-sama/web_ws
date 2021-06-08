import {useEffect, useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// const url = "https://qiita.com/api/v2/items";
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const App = () => {
  // const [data, setData] = useState({data_list: []});
  const [data, setData] = useState([0,0,0,0]);

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios(url);
      // const result = await axios.get(url);
      // setData(result);
    };

    fetchData().catch((e) => console.log(e));
  },[]);

  console.log(data)
  // console.log(data.data_list)

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <p>data</p>
      {/* <p>{data}</p> */}
      {/* <p>{data.data_list}</p> */}
      <ul>
        {data.map((item) => (
          <li key="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
