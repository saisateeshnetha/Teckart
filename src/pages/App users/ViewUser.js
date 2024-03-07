import React from "react"
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useHistory } from "react-router-dom"

const ViewUser = () => {
  const reports = [
    { title: "Campaigns", iconClass: "bx-copy-alt", description: "200" },
    {
      title: "Invited Friends",
      iconClass: "bx-purchase-tag-alt",
      description: "16",
    },
    {
      title: "Reach Us",
      iconClass: "bx-purchase-tag-alt",
      description: "67",
    },
    {
      title: "Total Donation Paid",
      iconClass: "bx-archive-in",
      description: "100",
    },
  ]
  const history = useHistory()
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={"TecKart Admin"} breadcrumbItem={"View User"} />
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
          <Row>
            <Col xl="12">
              <Row>
                {reports.map((report, key) => (
                  <Col md="3" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                          </div>
                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>

             
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ViewUser
