import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import "./style.css";

const DayPic = () => {
  const [giphy, setImage] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.giphy.com/v1/gifs/search?q=animals&api_key=" +
          process.env.REACT_APP_GIPHY_KEY +
          "&limit=1000"
      );

      let random = Math.floor(Math.random() * 1000);

      setImage(`${result.data.data[random].images.downsized_large.url}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <>
      <Col md="12">
        <Card.Body className="pic-card">
          <Card.Img className="card-img" variant="top" src={giphy} />
          <Card.Header as="h5">My Giphy</Card.Header>
          <p style={{ margin: "20px" }}>Giphy pictures to refresh your day!</p>
          <button
            onClick={() => setFetching(!fetching)}
            className="btn btn-info"
          >
            next
          </button>
        </Card.Body>
      </Col>
    </>
  );
};
export default DayPic;
