import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import profileimg from "../../assets/profileimg.png";
import { useNavigate } from "react-router-dom";
function UserProfile({ name, username, email, phone, website, id }) {
  let navigate = useNavigate();
  return (
    <div className="card-box">
      <Card
        className="cards"
        onClick={() => {
          navigate(`/view-user/${id}`);
        }}
      >
        <div className="card-img">
          <Card.Img className="cardimg" variant="top" src={profileimg} />
        </div>
        <Card.Body className="card-body">
          <Card.Title>{name ? name : "Title Goes Here"}</Card.Title>
          <Card.Text>{username ? username : dummyText}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Email :</b> {email}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Phone :</b> {phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>website : </b>{" "}
            <a style={{ textDecoration: "none" }} href={website}>
              {website}
            </a>
          </ListGroup.Item>
          {/* <ListGroup.Item><b>Campany : </b>{company} </ListGroup.Item>
               <ListGroup.Item><b>Business : </b>{business}</ListGroup.Item> */}
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserProfile;
