import Form from 'react-bootstrap/Form';

const Input = ({label, ...props}) => {
  return (
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label || ""}</Form.Label>
        <Form.Control {...props} />
      </Form.Group>

      
  );
}

export default Input;