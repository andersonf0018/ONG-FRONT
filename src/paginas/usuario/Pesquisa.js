import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import Final from "../../components/FinalForm";

function Pesquisa() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    const {value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


  switch (step) {
    case 1:
      return (
        <div className="row">
          <Container>
            <Row>
              <Col >
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="row">
          <Container>
            <Row>
              <Col>
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="row">
          <Container>
            <Row>
              <Col>
                <Final values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return (
        <div className="row">
        </div>
      );
  }
}

export default Pesquisa;