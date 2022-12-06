import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/UserContext";

const RightSideNav = () => {
  const { googleLogIn } = useContext(AuthContext);

  const handlerGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <ButtonGroup vertical className="w-100">
        <Button onClick={handlerGoogle} className="mb-2" variant="outline-dark">
          <FaGoogle></FaGoogle> Log In With Google
        </Button>
        <Button className="mb-3" variant="outline-primary">
          <FaGithub></FaGithub> Log In With Github
        </Button>
      </ButtonGroup>
      <div className="mb-3">
        <p>Find us here </p>
        <ListGroup>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaFacebook></FaFacebook> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaWhatsapp></FaWhatsapp> Whats App
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaLinkedin></FaLinkedin> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 bg-light shadow-3">
            <FaYoutube></FaYoutube> YouTube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
