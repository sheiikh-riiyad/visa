import Form from 'react-bootstrap/Form';

function Application() {
  return (
    <>
      <div className="p-4  text-white" style={{ backgroundColor: "#2b91b2", textAlign:'center' }}>
        <h2>Visa and Migration</h2>
        <p>Information about visa and migration services</p>

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Type of Visa</Form.Label>
        <Form.Control type="text" placeholder="choose of your type" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
    </Form>


      </div>

    </>
  )
}

export default Application
