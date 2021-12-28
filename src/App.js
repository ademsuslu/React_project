import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './Components/ui/Header'
import CharacterGrid from './Components/chacters/CharacterGrid'
import Search from './Components/ui/Search'
import "./App.css"

const App = () => {
  const [items,setİtems] = useState([])
  const [loading,setLoading] = useState(true);
  const [query,setQuery] = useState("");
  
  useEffect(() =>{
    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      // console.log(result.data);
      setİtems(result.data);
      setLoading(false)
    }
    fetchItems();
    
  },[query])
  return (
   
    <div className="container">
      <Header />
      <Search getQuery={(q) =>setQuery(q)}/>
      <CharacterGrid loading={loading} items={items}/>
      
    </div>
  )
}

export default App
