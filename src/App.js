import './App.css';
import Footer from './footer/Footer';
import Header from './Headers/Header';
import Home from './home/Home';
import { Grid } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Header/>
        <Home/>
        <Footer/>
      </Grid>
    </div>
  );
}

export default App;
