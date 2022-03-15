import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const user = false;
    debugger
    return user ?
    (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact={true}/>
            )}
            <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact={true}/>
            )}
             <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter;