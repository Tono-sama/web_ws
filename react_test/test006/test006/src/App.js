import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

const url = "https://qiita.com/api/v2/items";
// const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const App = () => {
  const initState = [{body:"", id:""}]
  const [myData, setMyData] = useState(initState);

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result);
      console.log(result.data);
      setMyData(result.data);
    };

    fetchData().catch((e) => console.log(e));
  },[]);

  console.log(myData);
  
  return (
    <div className="App">
      <p>data</p>
      <ul>
        {myData.map((item) => (
          <li key={item.id}>
            {item.body}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
