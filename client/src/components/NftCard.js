import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsAlignCenter } from 'react-icons/bs';
import UploadImg from "./UploadImg"

function KitchenSinkExample() {

  const [imageSrc, setImageSrc] = useState('');
  const [contact, setContact]= useState('')

  console.log(contact)
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
        reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
            };
        });
  };
  const handleFormChange = (e) => {
    e.persist();
    setContact(contact => ({...contact, [e.target.name]: e.target.value}));
  }

  const handleImageChange = (e) => {
    encodeFileToBase64(e.target.files[0]);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card style={{width:"22vw", border: "none", marginBottom: "50px"}}>
        <Card.Img variant="top" src={imageSrc} style={{width: "100%",height: "300px"}}/> {/* url이겠지요?? */}
        <Card.Body>
          <Card.Title style={{color: "#c8508b"}}>
            여러분의 NFT를 직접 만드세요!
          </Card.Title>
        </Card.Body>
        <Form style={{padding: "0px 10px"}}>
          <Form.Group className="mb-3" controlId='exampleForm.ControlInput1' onChange={handleFormChange}>
            <Form.Label>Email address</Form.Label>
            {/* <Form.Control name="id" type='text' placeholder='id' ></Form.Control> */}
            <Form.Control name="name" type='text' placeholder='name' ></Form.Control>
            {/* <Form.Control name="creator" type='text' placeholder='creator'></Form.Control>
            <Form.Control name="holder"type='text' placeholder='holder'></Form.Control> */}
            <Form.Control name="price"type='text' placeholder='price'></Form.Control>
            <Form.Control name="description"type='text' placeholder='description'></Form.Control>
            <Form.Control name="attribute"type='text' placeholder='attribute'></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control name="image"type="file" placeholder='ImageFile' onChange={handleImageChange}/>
          </Form.Group>
        </Form>
      </Card>
      <UploadImg contact={contact} imageSrc={imageSrc}/>
    </div>
  );
}

export default KitchenSinkExample;