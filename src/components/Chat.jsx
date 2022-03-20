import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Context } from "../index.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
const Chat = () => {
    const {db} = useContext(Context);
    const usersCollectionRef = collection(db, "users");

    const [users, setNewUser] = useState([]);
    const [newUserName, setNewUserName] = useState();
    const [newUserAge, setNewUserAge] = useState();

    const createUser = async ()=> {
        await addDoc(usersCollectionRef, {name: newUserName, age: newUserAge});
        setNewUserName("");
        setNewUserAge("");
    }
    
    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setNewUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            
        }
        getUsers()
    }, [])

    return(
        <Container>
            <Grid container justifyContent="center" style={{height: window.innerHeight-64}}>
                <div style={{width: "80%", 
                             height: "70vh",
                             marginTop: "20px", 
                             border: "1px solid lightgray", 
                             overflowY: "auto"
                }}>
                    {users.map(user=><div><h1>{user.name}</h1><h1>{user.age}</h1><h1>{user.id}</h1></div>)}
                </div>
                <Grid container
                      direction="column"
                      alignItems="flex-end"
                      style={{width: "80%"}}
                >
                    <TextField variant="outlined" fullWidth maxRows={2}
                               placeholder="Name..." 
                               onChange={(e)=>setNewUserName(e.target.value)}
                               value={newUserName}/>
                    <TextField variant="outlined" fullWidth maxRows={2} 
                               placeholder="Age.."
                               onChange={(e)=>setNewUserAge(e.target.value)}
                               value={newUserAge}/>
                    <Button variant="outlined" style={{marginTop: "5px"}} onClick={createUser}>Create New User</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat;