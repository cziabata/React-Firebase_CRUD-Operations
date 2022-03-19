import React, { useContext, useState } from "react";
import { Context } from "../index.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Grid, TextField } from "@mui/material";


const Chat = () => {

    return (
        <Container>
            <Grid container justifyContent="center" style={{height: window.innerHeight-64}}>
                <div style={{width: "80%", 
                             height: "70vh",
                             marginTop: "20px", 
                             border: "1px solid lightgray", 
                             overflowY: "auto"
                }}>
                    Chat
                </div>
                <Grid container
                      direction="column"
                      alignItems="flex-end"
                      style={{width: "80%"}}
                >
                    <TextField variant="outlined" fullWidth maxRows={2} />
                    <Button variant="outlined" style={{marginTop: "5px"}}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat;