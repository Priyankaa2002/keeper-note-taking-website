import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)

    const [inputText, setInput] =useState({
        title:"",
        content:""
    })

    function expand(){
      setExpanded(true);
    }


    function handleChange(event){
        const {name, value}= event.target;

        setInput(preValue =>{
            return {
                ...preValue , [name]:value
            }
        })

    }


    function handleNote(event){
        event.preventDefault();
         setInput({
            title:"",
            content:"" 
         })
        props.onAdd(inputText)

    }

  return (
    <div>
       
      <form className="create-note">
        {isExpanded && <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={inputText.title}
        /> }
        
        

        <textarea 
        onClick={expand}
        onChange={handleChange} 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1} 
        value={inputText.content}/>
        <Zoom in = {isExpanded}>
          <Fab onClick={handleNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;