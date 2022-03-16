import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index.js";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth)
    return(
        <>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Grid container justifyContent="flex-end" spacing={2}>
                        { user 
                        ? <Grid item><Button onClick={()=>auth.signOut()} variant="outlined">Logout</Button></Grid>
                        : <Grid item><Link href={LOGIN_ROUTE} underline="none"><Button variant="outlined">Login</Button></Link></Grid>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;