import {useEffect, useState} from 'react';
import './App.css';

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
  const getPosts = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(json => {
      console.log(json);
      settData(json)
    })
    .catch((error) =>console.log(error))
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
       <div>
           <table className='table'>
            <thead>
              <tr>
                {tableHeader.map(el=> <th key={el?.id}>{el?.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {tData.map(tr => <tr key={tr.id}>
                {tableHeader.map((th => <td key={`${tr.id}-${th.id}`}>{displayData(tr,th)}</td>))}
               </tr>)}
            </tbody>
           </table>
       </div>
    </div>
  );
}

export default App;
