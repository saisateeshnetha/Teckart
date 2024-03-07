import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button,
  Input,
  Badge,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link, useHistory } from "react-router-dom"

function Users() {
  const history = useHistory()

  const Actinid1 = () => {
    history.push("/ViewPayments")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="TecKart Admin" breadcrumbItem="Pending Payments" />{" "}
          <Row>
            <Col md="12">
              {" "}
              <Card className="mini-stats-wid">
                <CardBody>
                  <Row className="mb-2">
                    <Col>
                      <h5>Pending Payments</h5>
                    </Col>
                  </Row>
                  <Row className="mt-1 mb-3">
                    <Col>
                      <div style={{ float: "right" }}>
                        <Input
                          className="form-control"
                          placeholder="search...."
                          type="search"
                          style={{ width: "250px" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="table-rep-plugin">
                    <div className="table-responsive mb-0">
                      <Table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th>S.NO</th>
                            <th>Upi Id</th>
                            <th>User Name</th>
                            <th>User Phone</th>
                            <th>User Email</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>revanth@122</td>
                            <td>Peruri revanth</td>
                            <td>8309280849 </td>
                            <td>Peruri@gmail.com</td>
                            <td>10000</td>
                            <td>
                              <Badge color="success">Initiated</Badge>
                            </td>
                            <td>
                              <Button
                                onClick={() => {
                                  Actinid1()
                                }}
                                style={{
                                  padding: "6px",
                                  margin: "3px",
                                }}
                                size="sm"
                                className="m-1"
                                outline
                                color="info"
                              >
                                <i className="fas fa-eye"></i> Details
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </React.Fragment>
  )
}

export default Users
