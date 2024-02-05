import {Link} from 'react-router-dom'
import React, {Suspense} from 'react'
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                
                <Link to="/">{t("Home")}</Link> <Link to="/about">{t("About")}</Link> <button onClick={()=> changeLanguage("fi")}>FI</button> <button onClick={()=> changeLanguage("en")}>EN</button>
                
            </AppBar>
        </Box>
    )
}

export default Header;

