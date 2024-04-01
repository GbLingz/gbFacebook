import React from "react";
import facebookImg from "../assets/facebook img.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Main = () => {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center">
        {/* parent div */}
        <div className="container row justify-content-between align-items-center">
          {/* div 1 */}
          <div className="col-lg-6">
            <img
              src={facebookImg}
              alt="facebook-image"
              className="img-fluid photo"
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="col-lg-5 mt-5 shadow-lg p-5 my-4 bg-white border">
            {/* Form */}
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                {/* <Form.Check type="checkbox" label="Check me out" /> */}
              </Form.Group>
              <Button variant="primary" type="submit" className="btn1">
                Log in
              </Button>
              <label className="d-flex justify-content-center">
                Forgotten password?
              </label>
              <hr />
              <div className="d-flex justify-content-center align-items-center">
              <Button variant="success" type="submit" className="btn2">
                Create new account
              </Button>
              </div>
            </Form>
          </div>
          <h5 className="d-none d-md-block text-end create">
            <strong>
              <a href="#" className="text-dark text-decoration-none">
                Create a Page
              </a>
            </strong>{" "}
            for a celebrity, brand or business.
          </h5>
        </div>
      </main>

      <Card className= "d-none d-md-block container border-none">
        <Card.Header className="d-flex justify-content-center">
    
          English (UK) Hausa Français (France) Português (Brasil) Español Bahasa
          Indonesia Deutsch 日本語 Italiano हिन्दी
        </Card.Header>
        <Card.Header className="d-flex justify-content-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est
          corporis earum blanditiis dicta numquam quaerat hic amet et cumque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta
          maiores aliquid dolore quasi impedit dolorem fugiat quae consectetur
          dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Modi, dicta?
        </Card.Header>
        <Card.Title className="d-flex justify-content-start fs-6">
          Meta © 2024
        </Card.Title>
      </Card>
    </>
  );
};

export default Main;
