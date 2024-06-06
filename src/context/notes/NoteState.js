import React, { useState } from "react";
import NoteContext from "../noteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "66600b954ad45fed8e43cfb4",
          "user": "665f03fcc6a1d572c40409b1",
          "title": "My Title",
          "description": "Please walk up early",
          "tag": "Personal",
          "date": "2024-06-05T06:54:13.209Z",
          "__v": 0
        },
        {
          "_id": "66600e4a2c33da373479d3bb",
          "user": "665f03fcc6a1d572c40409b1",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2024-06-05T07:05:46.669Z",
          "__v": 0
        },
        {
          "_id": "66603a601a5f831649f7ad66",
          "user": "665f03fcc6a1d572c40409b1",
          "title": "New Note Updated",
          "description": "Please access the playlists",
          "tag": "YouTube",
          "date": "2024-06-05T10:13:52.536Z",
          "__v": 0
        },
        {
          "_id": "66613a25f43d3d8c41d82d6b",
          "user": "665f03fcc6a1d572c40409b1",
          "title": "New Note Added",
          "description": "Please access the playlists",
          "tag": "YouTube",
          "date": "2024-06-06T04:25:09.413Z",
          "__v": 0
        },
        {
            "_id": "66613a25f43d3d8c41d82d6b1",
            "user": "665f03fcc6a1d572c40409b1",
            "title": "New Note Added",
            "description": "Please access the playlists",
            "tag": "YouTube",
            "date": "2024-06-06T04:25:09.413Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)
  
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;