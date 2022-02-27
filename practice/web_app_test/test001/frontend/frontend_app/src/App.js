import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

const url = "http://localhost:9999/api/users";
var statusCode = 0;
var statusText = "";

const App = () => {
  // const initState = []
  const initState = [{id:"", name:""}]
  const [myData, setMyData] = useState(initState);

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios(url);
      console.log(result);
      statusCode = result.status;
      statusText = result.statusText;
      setMyData(result.data);
    };

    fetchData().catch((e) => console.log(e));
  },[]);

  console.log(myData);
  
  return (
    <div className="App">
      <p>status: {statusCode} {statusText}</p>
      <ul>
        {myData.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
