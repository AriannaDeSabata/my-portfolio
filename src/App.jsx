import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Page/home/Home'
import NavBar from './components/NavBar/NavBar'
import { Container } from 'react-bootstrap'


function App() {


  return (
    <>
    <NavBar/>
    <Container fluid={'md'} className='px-5 pb-5 contBody'>
      <Home/>
    </Container>

    </>
  )
}

export default App
