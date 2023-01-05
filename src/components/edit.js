import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [art, setArt] = useState('');
    const [info, setInfo] = useState('');
    const [publisher, setPublisher] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/game/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setArt(response.data.art);
            setInfo(response.data.info);
            setPublisher(response.data.publisher);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editGame = {
            title:title,
            art:art,
            info:info,
            publisher:publisher
        }

        axios.put('http://localhost:4000/api/games/'+id,editGame)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>      
        <div className="form-group">
          <label>Edit Game Title: </label>
          <input 
            type="text"
            className="form-control"
            style={{ width: "150%", margin: "16px 0" }}
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Edit Game Art Link: </label>
          <input 
            type="text"
            className="form-control"
            style={{ width: "50%", margin: "16px 0" }}
            value={art}
            onChange={(e) => { setArt(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Edit Game Info: </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "150%", margin: "16px 0" }}
            value={info}
            onChange={(e) => { setInfo(e.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Edit Game Publisher: </label>
          <input
            type="text"
            className="form-control"
            style={{ width: "50%", margin: "16px 0" }}
            value={publisher}
            onChange={(e) => { setPublisher(e.target.value) }}
          />
        </div>

        <input type="submit" value="Edit Game"></input>
      </form>
    </div>
  );
};

export default Edit;

