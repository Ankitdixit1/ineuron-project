import { useState } from 'react';
import Createnote from './Component/createnote';
import Note from './Component/Note';

function App() {
  const [additem,setitem]=useState([]);
  const addnote = (note) => {
  setitem((prevData) => {
    return [...prevData, note];
  });
};
const deletedata=(id)=>{
  setitem((oldsd)=>
  oldsd.filter((currre, index)=>{
    return index !== id;
  })
  )
};
   return (
    <>
      <Createnote 
      notepass={addnote}
      />
      {additem.map((val,index)=>{
        return(<Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        delete={deletedata}
        />)
      }) }
    </>
  );
}

export default App;
