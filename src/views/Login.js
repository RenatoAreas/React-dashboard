import React from 'react';
import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';

class Login extends React.Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Grid item xs="12" style={{ marginTop: '100px' }}>
                    <Paper style={{ padding: '20px' }}>
                        <Grid style={{ margin: '20px' }}>
                            <Typography align="center" variant="h5">
                                Autenticação de Usuário
                            </Typography>
                        </Grid>
                        <form className={{ margin: '20px' }} autoComplete="off">
                            <Grid style={{ margin: '20px' }}>
                                <TextField
                                    id="email"
                                    label="Email de Acesso:"
                                    type="email"
                                    fullWidth
                                    autoFocus
                                    required
                                />
                            </Grid>
                            <Grid style={{ margin: '20px' }}>
                                <TextField
                                    id="senha"
                                    label="Senha de Acesso:"
                                    type="password"
                                    fullWidth
                                    autoFocus
                                    required
                                />
                            </Grid>
                            <Grid style={{ margin: '20px' }}>
                                <Button type="submit" variant="outlined" color="primary">
                                    Acessar Sistema
                                </Button>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        )
    }
}

export default Login;