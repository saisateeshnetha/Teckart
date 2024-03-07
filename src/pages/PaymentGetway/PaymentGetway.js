import React, { useState, useEffect } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  Button,
  Table,
  Modal,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { URLS } from "../../Url"
// import gig from "../../assets/images/logos.png"

function Departments() {
  const [modal_small, setmodal_small] = useState(false)
  const [banner, setbanner] = useState([])
  const [form, setform] = useState([])
  const [form1, setform1] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const [isLoading, setIsLoading] = useState(false)

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }
  const handleChange1 = e => {
    let myUser = { ...form1 }
    myUser[e.target.name] = e.target.value
    setform1(myUser)
  }

  // useEffect(() => {
  //   Getalldep()
  // }, [])

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = banner.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(banner.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const AddDep = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("name", form.name)

    axios
      .post(URLS.AddDepartment, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            Getalldep()
            clearForm()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const EditDep = () => {
    var token = datas
    var formid = form1._id

    const dataArray = new FormData()
    dataArray.append("name", form1.name)
    axios
      .put(URLS.UpdateDepartment + "/" + formid, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            Getalldep()
            toast(res.data.message)
            setmodal_small(false)
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const Deletedep = data => {
    var token = datas
    var remid = data._id
    axios
      .delete(URLS.InActiveDepartment + "/" + remid, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            Getalldep()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const manageDelete = data => {
    const confirmBox = window.confirm("Do you really want to InActive?")
    if (confirmBox === true) {
      Deletedep(data)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    AddDep()
  }
  const handleSubmit1 = e => {
    e.preventDefault()
    EditDep()
  }

  const Getalldep = () => {
    var token = datas
    axios
      .post(
        URLS.GetDepartment,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          setbanner(res.data.data)
          setIsLoading(false)
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
            setIsLoading(false)
          }
        }
      )
  }

  const clearForm = () => {
    setform({
      name: "",
    })
  }
  const getpopup = data => {
    setform1(data)
    tog_small()
  }

  const [Searchs, setSearchs] = useState([])

  const Search = e => {
    let myUser = { ...Searchs }
    myUser[e.target.name] = e.target.value
    setSearchs(myUser)
    var token = datas
    axios
      .post(
        URLS.GetDepartmentSearch + `${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setbanner(res.data.data)
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Sara  Admin" breadcrumbItem="Payment GetWay" />
          {isLoading == true ? (
            <>
              <Card>
                <CardBody>
                  <div
                    style={{ zIndex: "9999999999999", height: "420px" }}
                    className="text-center mt-5 pt-5"
                  >
                    {/* <img src={gig} height="140px"></img> */}
                    <div>Loading......</div>
                  </div>
                </CardBody>
              </Card>
            </>
          ) : (
            <>
              <Row>
                <Col md={4}>
                  <Card>
                    <CardHeader className="bg-white">
                      <CardTitle>Add UPI</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form
                        onSubmit={e => {
                          handleSubmit(e)
                        }}
                      >
                        <div className="mb-3">
                          <Label for="basicpill-firstname-input1">
                            UPI ID <span className="text-danger">*</span>
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="basicpill-firstname-input1"
                            placeholder="Enter UPI ID"
                            required
                            pattern="^[a-zA-Z ]*$"
                            name="name"
                            value={form.name}
                            onChange={e => {
                              handleChange(e)
                            }}
                          />
                        </div>
                        <div style={{ float: "right" }}>
                          <Button color="primary" type="submit">
                            Submit <i className="fas fa-check-circle"></i>
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>

                <Col md={8}>
                  <Card>
                    <CardHeader className="bg-white">
                      <CardTitle>UPI List</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md={12}>
                          <div style={{ float: "right" }}>
                            <Input
                              type="search"
                              name="search"
                              value={Searchs.search}
                              onChange={Search}
                              className="form-control"
                              placeholder="Search.."
                              autoComplete="off"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div>
                        <div className="table-responsive">
                          <Table className="table table-bordered mb-2 mt-3">
                            <thead>
                              <tr>
                                <th>S No</th>
                                <th>UPI ID</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {lists.map((data, key) => (
                                <tr key={key}>
                                  <td>{(pageNumber - 1) * 5 + key + 6}</td>
                                  <td>{data.name}</td>

                                  <td>
                                    <Button
                                      onClick={() => {
                                        getpopup(data)
                                      }}
                                      className="mr-2"
                                      style={{
                                        padding: "6px",
                                        margin: "3px",
                                      }}
                                      color="success"
                                      outline
                                    >
                                      <i className="bx bx-edit "></i>
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        manageDelete(data)
                                      }}
                                      style={{
                                        padding: "6px",
                                        margin: "3px",
                                      }}
                                      color="danger"
                                      outline
                                    >
                                      <i className="bx bx-trash"></i>
                                    </Button>{" "}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>

                          <div className="mt-3" style={{ float: "right" }}>
                            <ReactPaginate
                              previousLabel={"Previous"}
                              nextLabel={"Next"}
                              pageCount={pageCount}
                              onPageChange={changePage}
                              containerClassName={"pagination"}
                              previousLinkClassName={"previousBttn"}
                              nextLinkClassName={"nextBttn"}
                              disabledClassName={"disabled"}
                              activeClassName={"active"}
                              total={lists.length}
                            />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          )}
        </Container>

        <Modal
          size="md"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
          centered
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Edit UPI
            </h5>
            <button
              onClick={() => {
                setmodal_small(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form
              onSubmit={e => {
                handleSubmit1(e)
              }}
            >
              <div className="mb-3">
                <Label for="basicpill-firstname-input1">
                  UPI ID <span className="text-danger">*</span>
                </Label>
                <input
                  type="text"
                  className="form-control"
                  id="basicpill-firstname-input1"
                  placeholder="Enter UPI ID"
                  required
                  name="name"
                  value={form1.name}
                  onChange={e => {
                    handleChange1(e)
                  }}
                />
              </div>

              <div style={{ float: "right" }}>
                <Button
                  onClick={() => {
                    setmodal_small(false)
                  }}
                  color="danger"
                  type="button"
                >
                  Cancel <i className="fas fa-times-circle"></i>
                </Button>
                <Button className="m-1" color="primary" type="submit">
                  Submit <i className="fas fa-check-circle"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>

        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Departments
