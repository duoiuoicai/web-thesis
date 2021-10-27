import React from 'react';
import { Container, Grid, Box, Link, Typography } from '@material-ui/core';
import { Facebook, GitHub, Instagram, LiveHelp, ContactSupport, Security, Storage, Payment } from '@material-ui/icons';


const Footer = () => {
    return (
        <footer>
            <br />
            <br />
            <Box px={ { xs: 3, sm: 7 } } py={ { xs: 3, sm: 7 } } bgcolor="text.disabled" color="white">
                <Container maxWidth="100%">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <br />
                            <Box>
                                <Link href="/" color="inherit">
                                    <LiveHelp /> &nbsp;FAQs
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    <ContactSupport /> &nbsp;Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    <Security /> &nbsp;Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Contact</Box>
                            <br />
                            <Box>
                                <Link href="https://www.facebook.com/duoiuoicu/" color="inherit" underline="none">
                                    <Facebook /> &nbsp;Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://www.instagram.com/duoiuoicai/" color="inherit" underline="none">
                                    <Instagram /> &nbsp;Instagram
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://github.com/duoiuoicai" color="inherit" underline="none">
                                    <GitHub /> &nbsp;GitHub
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Powered by</Box>
                            <br />
                            <Box>
                                <Link href="https://commercejs.com/" color="inherit" underline="none">
                                    <Storage /> &nbsp;CommerceJS
                                </Link>
                            </Box>
                            <Box>
                                <Link href="https://stripe.com/" color="inherit" underline="none">
                                    <Payment /> &nbsp;Stripe
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <Container pt={{ xs: 3, sm: 7 }} pb={{ xs: 3, sm: 7 }}>
                        <hr />
                        <br />
                        <Typography align="center">&copy; Duck Retail {new Date().getFullYear()}</Typography>
                    </Container>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
