import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
function Fly() {

      return (

            <>

                  <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                              <div className='fab'> <h>facebook</h></div>

                              <Card>

                                    <Card.Header>
                                          <p className='cc'> Create a new account</p>
                                          <p className='dd'> its a quick and easy</p>


                                    </Card.Header>
                                    <Card.Body>

                                          <Row>
                                                <Col> <Form.Control type="text" placeholder="First name " />
                                                </Col>
                                                <Col>
                                                      <Form.Control type="text" placeholder="Surname" /></Col></Row>
                                          <Row>
                                                <Col>
                                                      <Form.Control type="text" placeholder="Mobile number email address" className='m1' />

                                                </Col>

                                          </Row>
                                          <Col>
                                                <Form.Control type="text" placeholder="New pasword" className='m2' />

                                          </Col>


                                          <Row>
                                                <Col>
                                                      <p> Date of birth ?</p>
                                                      <Form.Select className='m4' >
                                                            <option>28</option>
                                                      </Form.Select></Col>

                                                <Col>

                                                      <Form.Select className='m3' >
                                                            <option>Oct</option>
                                                      </Form.Select></Col>

                                                <Col>
                                                      <Form.Select className='m5' >
                                                            <option>2024</option>
                                                      </Form.Select></Col>
                                          </Row>
                                          <Row>



                                                <p className='xl'> Gender ?</p>


                                                <Col>
                                                      <Form>
                                                            {['radio'].map((type) => (
                                                                  <div key={`reverse-${type}`} className="mb-3 ww">

                                                                        <Form.Check
                                                                              reverse
                                                                              label="Male"
                                                                              name="group1"
                                                                              type={type}
                                                                              id={`reverse-${type}-2`}
                                                                        />

                                                                  </div>
                                                            ))}
                                                      </Form>
                                                </Col>
                                                <Col>
                                                      <Form>

                                                            {['radio'].map((type) => (
                                                                  <div key={`reverse-${type}`} className="mb-3 si" >

                                                                        <Form.Check
                                                                              reverse
                                                                              label="female"
                                                                              name="group1"
                                                                              type={type}
                                                                              id={`reverse-${type}-2`}
                                                                        />

                                                                  </div>
                                                            ))}


                                                      </Form></Col>
                                                <Col>



                                                      <Form>

                                                            {['radio'].map((type) => (
                                                                  <div key={`reverse-${type}`} className="mb-3 ki" >

                                                                        <Form.Check
                                                                              reverse
                                                                              label="Custom"
                                                                              name="group1"
                                                                              type={type}
                                                                              id={`reverse-${type}-2`}
                                                                        />

                                                                  </div>
                                                            ))}
                                                      </Form>




                                                </Col>
                                                <p className='pr'> People who use our service may have uploaded your contact information to.facebook.<a href="https://www.facebook.com/signup"> Larn more</a></p>
                                                <br />
                                                <p className='pt'> By clicking Sign Up, you agree to our <a href='https://www.facebook.com/signup'> Terms privacy policy</a>and<a> Cookies policy</a> You may receive SMS notifications from us and can opt out at any time.</p>

                                                <br />

                                                <div className='sk'> <Button variant="success">Sign Up</Button>{' '} </div>





                                          </Row>
                                          <br/>

<a className='aa' href='https://www.facebook.com/signup'> Already have an account</a>








                                    </Card.Body>



                              </Card>

                        </Col>

                  </Row>



            </>
      );

}
export default Fly;