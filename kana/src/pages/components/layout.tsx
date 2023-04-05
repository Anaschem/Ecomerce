layout.tsx ---------------
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { AppBar, Toolbar, Typography, Container, Grid, Link } from "@mui/material";


export default function Layout ({children}) {
    return (
        <div>
            <Head>
                <title>Kana</title>
            </Head>
            <AppBar style={{ background: '#009688' }}>
                <Toolbar>
                    <Link href="/" color="#f1f8e9" underline="none">
                    <Typography>Kana</Typography>
                    </Link>
                    <Link href="/cart" color="#f1f8e9" underline="none">
                        <Typography>Cart</Typography>
                        </Link>
                    <Link href="/login" color="#f1f8e9" underline="none">
                        <Typography style={{ left: 0 }}>Login</Typography>
                        </Link>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}