import {Link} from 'react-router-dom'
import React, {Suspense} from 'react'
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Header() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <AppBar position="static">
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                {t('home page')}
            </Typography>
            <Link to="/">{t("Home")}</Link>
            <Link to="/about">{t("About")}</Link> 
            <Button color="inherit" onClick={()=> changeLanguage("fi")}>FI</Button> 
            <Button color="inherit" onClick={()=> changeLanguage("en")}>EN</Button> 
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