import {Link} from 'react-router-dom'
import React, {Suspense} from 'react'
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

function Header() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <AppBar position="static">
            <Toolbar>
            <Link to="/">{t("Home")}</Link>
            <Link to="/about">{t("About")}</Link> 
            <Button id="en" onClick={()=> changeLanguage("fi")}>FI</Button> 
            <Button id="fi" onClick={()=> changeLanguage("en")}>EN</Button> 
            </Toolbar>
        </AppBar>
    )
}

//export default Header;

export default function App() {
    return (
      <Suspense fallback="loading">
        <Header />
      </Suspense>
    );
}