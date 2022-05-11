import React,{useState} from 'react';
import axios from 'axios';
import Map from './Map';
import '../styles/App.css';
import Button from './Button';
import Input from './Input';
import A from './anchor';

function App() {
    const [results,changeResults]=useState(0);
    const [ipt,onchangeIpt]=useState("");
    const [search,changeSearch]=useState(null);
    const [r,changer]=useState([]);

    function handleChange(event){
        onchangeIpt(event.target.value);
        console.log("ipt: "+ipt);
    }

    function searches(){
        onchangeIpt("");
        changeSearch(ipt);
    }

    async function handleSearch(event){
        event.preventDefault();
        searches();
        console.log(ipt);
        var q="http://localhost:5000/?search="+ipt;
        await axios.get(q, {
            "search": search,
        }).then(response => {
            console.log("results: " + JSON.stringify(response.data));
            changer(response.data);
            changeResults(response.data.length);
        }).catch(error => {
            console.log("error: "+error);
        })
        console.log("search: "+search);
    }

  return (
    <div className="App">

        <br/>
        <div className='search-bar'>
            <form onSubmit={handleSearch}>
                <Input place="Search by Name, Author, Genre or Language" func={handleChange} value={ipt}/>
                <Button name="Search" class="search" func={handleSearch}/>
            </form>
        </div>
        <h1>Searched For: {search}</h1>
        <h2>Results showing: {results}</h2>
        <Map d={r}/>
    </div>
  );
}

        /*<Button name="add" class="App-link"/>
        <A link="" words="login"/>
        <A link="" words="sign-up"/>*/

export default App;
