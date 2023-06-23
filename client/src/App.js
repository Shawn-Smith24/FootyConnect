import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

//Component imports
import { Posts } from "./Components/Posts/Posts";
import { Form } from "./Components/Form/Form";
import FootyImg from './images/FootyImg.jpeg'

const App = () => {
    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Footy Connect</Typography>
                <img src={FootyImg} alt="footy" height="400" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent = "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;