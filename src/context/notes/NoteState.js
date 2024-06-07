import React, { useState } from "react";
import NoteContext from "../noteContext";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

      // Add all Note
        const getNotes = async () => {
      // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", 
        headers: {
        "Content-Type": "application/json",
        "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZjAzZmNjNmExZDU3MmM0MDQwOWIxIn0sImlhdCI6MTcxNzU2MzI3NX0._IBCbGNcct68fKPaBrnC959L7RyKaTt2NwcKAFboM74"
        },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)
      }

      // Add a Note
       const addNote = async (title, description, tag) => {
        // TODO : API Call
          // API Call
          const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZjAzZmNjNmExZDU3MmM0MDQwOWIxIn0sImlhdCI6MTcxNzU2MzI3NX0._IBCbGNcct68fKPaBrnC959L7RyKaTt2NwcKAFboM74"
            },
            body: JSON.stringify({title, description, tag})
          });
        const json = await response.json(); 
        console.log(json)
          
        const note =  {
            "_id": "66613a25f43d3d8c41d82d6b",
            "user": "665f03fcc6a1d572c40409b1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-06T04:25:09.413Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
       }

      // Delete a Note
      const deleteNote = async (id) => {
        // API Call

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZjAzZmNjNmExZDU3MmM0MDQwOWIxIn0sImlhdCI6MTcxNzU2MzI3NX0._IBCbGNcct68fKPaBrnC959L7RyKaTt2NwcKAFboM74"
          },
        });
        const json = await response.json(); 
        console.log(json)
        
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1ZjAzZmNjNmExZDU3MmM0MDQwOWIxIn0sImlhdCI6MTcxNzU2MzI3NX0._IBCbGNcct68fKPaBrnC959L7RyKaTt2NwcKAFboM74"
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json(); 
        console.log(json)
      
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
          
        }
        console.log(id, newNotes);
        setNotes(newNotes);
      }
  
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;