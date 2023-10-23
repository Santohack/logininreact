import * as React from 'react';

import { Alert, Divider } from '@mui/material';
import { GitHub, Google, LinkedIn } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import WebStoriesIcon from '@mui/icons-material/WebStories';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

    const iconStyle = {
        cursor: 'pointer',
        marginRight: '10px',
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><WebStoriesIcon /></Avatar>
                            <Typography component="h1" variant="h5"> Login Page</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h6">Welcome to Materio! 👋🏻</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="subtitle2">Please sign in to your account and start the adventure</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Alert severity="info">
                                <Typography variant="body1"><strong>Admin:</strong> admin@materio.com / <strong>Pass:</strong> admin</Typography>
                                <Typography variant="body1"><strong>Client:</strong> client@materio.com / <strong>Pass:</strong> client</Typography>
                            </Alert>
                        </Grid>
                    </Grid>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Grid container>
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" sx={{ color: '#9003fc' }} />}
                                    label="Remember me"

                                />
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ color: '#9003fc', }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, background: '#9003fc' }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="body2">
                                    New on our platform?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ color: '#9003fc' }}>

                                    Create an account
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{ my: 2, width: '100%' }}>
                        <Typography>or</Typography>
                    </Divider>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Google color="primary" style={iconStyle} />
                        <LinkedIn color="primary" style={iconStyle} />
                        <GitHub color="primary" style={iconStyle} />
                    </div>
                </Box>

            </Container>
        </ThemeProvider>
    );
}