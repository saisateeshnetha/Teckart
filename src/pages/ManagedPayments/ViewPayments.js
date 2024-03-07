import React from "react"
import { Container, Row, Col, Badge, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useHistory } from "react-router-dom"

const ViewUser = () => {
  const history = useHistory()
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={"TecKart Admin"} breadcrumbItem={"View Payments"} />
          <Row>
            <Col>
              <Button
                onClick={() => history.goBack()}
                className="mb-3  m-1 "
                style={{ float: "right" }}
                color="primary"
              >
                <i className="far fa-arrow-alt-circle-left"></i> Back
              </Button>
            </Col>
          </Row>

          <Row className="mt-1 mb-5">
            <Col>
              <>
                <div className="row mb-none-30 justify-content-center">
                  <div className="col-xl-4 col-md-6 mb-30">
                    <div className="card b-radius--10 overflow-hidden box--shadow1">
                      <div className="card-body">
                        <h5 className="mb-20 text-muted">Deposit </h5>
                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Date{" "}
                            <span className="fw-bold">2024-02-26 08:32 AM</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Transaction Number{" "}
                            <span className="fw-bold">C3NP7CUHZZJK</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Username{" "}
                            <span className="fw-bold">
                              <a href="#">
                                aglokman
                              </a>
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Method <span className="fw-bold">BTCPay</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Amount <span className="fw-bold">344.00 </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Charge <span className="fw-bold">4.44 </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            After Charge{" "}
                            <span className="fw-bold">348.44 </span>
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Payable <span className="fw-bold">0.01 </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Status{" "}
                            <span>
                              <Badge color="success">Initiated</Badge>
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ViewUser
