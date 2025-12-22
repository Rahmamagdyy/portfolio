import React, { Component ,useEffect, useState } from 'react';
import { supabase } from '../Supabase'

const Testapi = () => {
    const [projects, setprojects] = useState([
{
id:""
}


    ]);

    useEffect(()=>{
 async function callGetApi(){

   const res = await supabase.from("projects").select("*");
   setprojects(res.data);
   //console.log(res.data[0].title);

}

callGetApi();

    },[]);

    return (
        
        <>
        
       Rouzlens

       <p>
        {(projects[0].id)}
       </p>

        </>
     );
}
 
export default Testapi;