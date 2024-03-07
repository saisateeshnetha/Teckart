import React from "react"
import { CardBody, Container, Row, Col, Card, Input, Table } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer } from "react-toastify"

function Support() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="TecKart Admin" breadcrumbItem="Pending Tickets" />
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <div>
                    <div className="table-responsive">
                      <div style={{ float: "right" }}>
                        <Input
                          type="search"
                          name="search"
                          className="form-control"
                          placeholder="Search.."
                          autoComplete="off"
                        />
                      </div>{" "}
                      <Table className="table table-bordered mb-4 mt-5">
                        <thead>
                          <tr className="text-center">
                            <th>S.No</th>
                            <th>Ticket Id</th>
                            <th>Date / Time</th>
                            <th>User Name</th>
                            <th>Title</th>
                            <th>Screen Shot</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Support
