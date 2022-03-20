import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Context } from "../index.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const {auth} = useContext(Context);
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
    return(
        <>
            <Container>
                <Grid container 
                      justifyContent="center" 
                      alignItems="center" 
                      style={{height: window.innerHeight-64}}>
                    <Grid container 
                          justifyContent="center" 
                          alignItems="center" 
                          direction="column" 
                          style={{width: 400, background: "lightgray"}}>
                        <Box p={5}>
                            <Button onClick={login} variant="outlined">Login with Google</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Login;