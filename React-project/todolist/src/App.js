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
   return (
    <>
      <Createnote 
      notepass={addnote}
      />
      {additem.map((val,index)=>{
        return(<Note 
        key={index}
        title={val.title}
        content={val.content}
        />)
      }) }
    </>
  );
}

export default App;
