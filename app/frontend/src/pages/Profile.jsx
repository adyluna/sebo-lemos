import React from "react";
import { Container } from 'react-bootstrap';
import UploadImages from "../components/UploadImages";

const Profile = () => {
  return (
    <Container>
      <h1>USERNAME</h1>
      <UploadImages />
    </Container>
  )
}

export default Profile;