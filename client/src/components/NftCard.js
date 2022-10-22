import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample({id, name, creator, holder, price, url, description, attribute}) {
  
  
  return (
    <Card style={{width: "18vw", border: "none", marginBottom: "50px"}}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6223187/pexels-photo-6223187.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" style={{height: "250px"}}/> {/* url이겠지요?? */}
      <Card.Body>
        <Card.Title>
          {(id ? id : "여러분의 NFT를 만드세요!!!")}
        </Card.Title>
        <Card.Text>
          {name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>creator: {creator}</ListGroup.Item>
        <ListGroup.Item>holder: {holder}</ListGroup.Item>
        <ListGroup.Item>price: {price}</ListGroup.Item>
        <ListGroup.Item>url: {url}</ListGroup.Item>
        <ListGroup.Item>description: {description}</ListGroup.Item>
        <ListGroup.Item>attribute: {attribute}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default KitchenSinkExample;