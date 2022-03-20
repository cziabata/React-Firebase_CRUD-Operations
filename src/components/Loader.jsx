import { Container, Grid } from "@mui/material";
import React from "react";

const Loader = () => {
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
                    >
                        <div className="lds-spinner"><div></div>
                        <div></div><div></div><div></div><div>
                        </div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div></div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Loader;