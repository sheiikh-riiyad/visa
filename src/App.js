import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbars from './components/navbar';
import Home from './pages/home';
import Footer from './pages/footer';
import Service from './pages/service';
import Application from './pages/application';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
      <Container fluid className="p-3 border-bottom">
        <Row className="align-items-center">
          {/* Left: Logo + Text */}
          <Col xs={12} md={6} className="d-flex align-items-center">
            <img className="aus" src="/australia.jpg" alt="australia"  />
            <div className="ms-3">
              <p className="mb-0 fw-bold">Australian High Commission</p>
              <p className="mb-0">Bangladesh</p>
            </div>
          </Col>

          {/* Right: Search Bar */}
          <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
              />
              <Button style={{ backgroundColor: '#e94200', border: 'none' }}>🔍</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Navbars /> 
     <br/> <br/>
      

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/application" element={<Application/>} />
        
      </Routes>



      <Footer />


  </Router>
    </>
  );
}

export default App;
