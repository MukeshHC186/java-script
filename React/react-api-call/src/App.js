import {useEffect, useState} from 'react';
import './App.css';
import GridTable from './common/grid-table/GridTable';

const tableHeader = [
  {
    id: 'name',
    name: 'name',
     label: 'name',
  },
  {
    id: 'phone',
    name: 'phone',
     label: 'phone',
  },
  {
    id: 'email',
    name: 'email',
     label: 'email',
  },
  {
    id: 'company',
    name: 'company',
     label: 'company',
  },
  {
    id: 'address',
    name: 'address',
     label: 'address',
  },
  {
    id: 'username',
    name: 'username',
     label: 'username',
  },
  {
    id: 'website',
    name: 'website',
     label: 'website',
  },
  
]
function App() {
  const [showData, setShowData] =useState(false)
  const [tData, settData] = useState([])
  const [loading, setLoading]= useState(false)
  const getPosts = ()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      settData(json)
    })
    .catch((error) =>console.log(error))
    .finally(()=>{
      setLoading(false)
    })
  }

  const displayData = (tr,th) =>{
    if(th.name==="address"){
      return `${tr.address?.suite},${tr.address?.street},${tr.address.city},${tr.address.zipcode}`
    }
    else if(th.name ==="company"){
      return `${tr.company.name},${tr.company.catchPhrase},${tr.company.bs}`
    }
    else{
      return tr?.[th.name]
    }
  }
  useEffect(() =>{
     if(showData){
      getPosts()
     }
  },[showData])
  return (
    <div className="App">
       <button onClick={()=>setShowData(true)}>show</button>
       
      {!!tData?.length ? <GridTable tHeader={tableHeader} data={tData} displaycd={displayData}/>
      :showData  ? loading ?<div>Loading...</div> : <div>Not data to display</div>
      :null}
        
       </div>
   
  );
}

export default App;
