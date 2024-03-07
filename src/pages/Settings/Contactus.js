import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Table,
  Label,
  Input,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import { URLS } from "../../Url"
import axios from "axios"

function DigitalBrochure() {
  const [files, setFiles] = useState([])

  const [files1, setFiles1] = useState([])

  const changeHandler = e => {
    const file = e.target.files
    var ext = file[0].name.split(".").pop()
    var type = ext
    if (
      type == "jpg" ||
      type == "jpeg" ||
      type == "png" ||
      type == "JPG" ||
      type == "JPEG" ||
      type == "PNG" ||
      type == "JPEG" ||
      type == "WEBP" ||
      type == "webp"
    ) {
      setFiles(e.target.files)
    } else {
      e.target.value = null
      toast("file format not supported.Pls choose Image")
    }
  }

  const changeHandler1 = e => {
    const file = e.target.files
    var ext = file[0].name.split(".").pop()
    var type = ext
    if (
      type == "jpg" ||
      type == "jpeg" ||
      type == "png" ||
      type == "JPG" ||
      type == "JPEG" ||
      type == "PNG" ||
      type == "JPEG" ||
      type == "WEBP" ||
      type == "webp"
    ) {
      setFiles1(e.target.files)
    } else {
      e.target.value = null
      toast("file format not supported.Pls choose Image")
    }
  }

  const [form, setform] = useState([])

  const [forms, setforms] = useState([])

  const handlechange = e => {
    const myform = { ...forms }
    myform[e.target.name] = e.target.value
    setforms(myform)
  }

  // useEffect(() => {
  //   GetAllBroucher()
  // }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const GetAllBroucher = () => {
    var token = datas

    axios
      .post(
        URLS.GetContactUs,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.contactus)
        setforms(res.data.contactus)
      })
  }
  const [modal_small, setmodal_small] = useState(false)
  function tog_small() {
    setmodal_small(!modal_small)
  }

  const getpopup1 = () => {
    tog_small()
  }

  const submibooking = e => {
    e.preventDefault()

    changstatus()
  }

  const changstatus = () => {
    var token = datas
    const dataArray = new FormData()
    dataArray.append("titile", forms.titile)
    dataArray.append("email1", forms.email1)
    dataArray.append("email2", forms.email2)
    dataArray.append("contactNumber1", forms.contactNumber1)
    dataArray.append("contactNumber2", forms.contactNumber2)
    dataArray.append("address", forms.address)
    dataArray.append("fromTime", forms.fromTime)
    dataArray.append("toTime", forms.toTime)
    dataArray.append("facebook", forms.facebook)
    dataArray.append("twitter", forms.twitter)
    dataArray.append("instagram", forms.instagram)
    dataArray.append("maps", forms.maps)

    for (let i = 0; i < files.length; i++) {
      dataArray.append("bannerImage", files[i])
    }

    for (let i = 0; i < files1.length; i++) {
      dataArray.append("logo", files1[i])
    }

    axios
      .put(URLS.UpdatContactUs, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setmodal_small(false)
            GetAllBroucher()
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  var gets = localStorage.getItem("authUser")

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="TecKart Admin" breadcrumbItem="Contact Us" />

          <Row>
            <Col md={12}>
              <Card>
                <CardHeader className="bg-white">
                  <Row>
                    <Col>
                      <div style={{ float: "right" }}>
                        <Button
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Edit Booking"
                          onClick={() => {
                            getpopup1(form)
                          }}
                          className="mr-5 mb-1 m-1 mt-3"
                          color="success"
                          outline
                        >
                          <i className="bx bx-edit text-dark "></i>
                          <span>Edit Contact Us</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>

                <CardBody>
                  <Row>
                    <div>
                      <div className="table-rep-plugin mt-4 table-responsive">
                        <Table hover className="table table-bordered mb-4">
                          <thead>
                            <tr className="text-center">
                              <th>Title </th>
                              <td>{form.titile}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Banner </th>
                              <td>
                                {" "}
                                <img
                                  src={URLS.Base + form.bannerImage}
                                  width="100px"
                                ></img>
                              </td>
                            </tr>

                            <tr className="text-center">
                              <th>Logo </th>
                              <td>
                                {" "}
                                <img
                                  src={URLS.Base + form.logo}
                                  width="100px"
                                ></img>
                              </td>
                            </tr>

                            <tr className="text-center">
                              <th>Email 1</th>
                              <td>{form.email1}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Email 2</th>
                              <td>{form.email2}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Address </th>
                              <td>{form.address}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Contact Number</th>
                              <td>{form.contactNumber1}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Phone Number</th>
                              <td>{form.contactNumber2}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Facebook Link</th>
                              <td>{form.facebook}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Twitter Link</th>
                              <td>{form.twitter}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Instagram Link</th>
                              <td>{form.instagram}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Map Url</th>
                              <td>{form.maps}</td>
                            </tr>

                            <tr className="text-center">
                              <th>From Time</th>
                              <td>{form.fromTime}</td>
                            </tr>

                            <tr className="text-center">
                              <th>To Time</th>
                              <td>{form.toTime}</td>
                            </tr>
                          </thead>
                        </Table>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Modal
            size="lg"
            isOpen={modal_small}
            toggle={() => {
              tog_small()
            }}
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title mt-0" id="mySmallModalLabel">
                Edit Contact Us{" "}
              </h5>{" "}
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
                  submibooking(e)
                }}
              >
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Title <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="title"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Title"
                        value={forms.titile}
                        name="titile"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Email 1 <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Email 1"
                        value={forms.email1}
                        name="email1"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Email 2<span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Email"
                        value={forms.email2}
                        name="email2"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Contact Number <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Contact Number 1"
                        value={forms.contactNumber1}
                        name="contactNumber1"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Phone Number <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="number"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="EnterPhone Number"
                        value={forms.contactNumber2}
                        name="contactNumber2"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Facebook Link <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Facebook Link"
                        value={forms.facebook}
                        name="facebook"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Twitter Link<span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Twitter Link"
                        value={forms.twitter}
                        name="twitter"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Instagram Link <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter Instagram Link"
                        value={forms.instagram}
                        name="instagram"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        From Time <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="time"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter From Time"
                        value={forms.fromTime}
                        name="fromTime"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        To Time <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="time"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        placeholder="Enter To Time"
                        value={forms.toTime}
                        name="toTime"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Banner Image<span className="text-danger">* </span>
                      </Label>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        name="image"
                        value={files.image}
                        onChange={changeHandler}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Logo <span className="text-danger">* </span>
                      </Label>
                      <Input
                        type="file"
                        className="form-control"
                        id="basicpill-firstname-input1"
                        name="image"
                        value={files.image}
                        onChange={changeHandler1}
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Map Url <span className="text-danger">*</span>
                      </Label>
                      <textarea
                        type="text"
                        rows="3"
                        className="form-control "
                        id="basicpill-firstname-input1"
                        placeholder="Enter Map Url"
                        value={forms.maps}
                        name="maps"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>{" "}
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <Label for="basicpill-firstname-input1">
                        Address <span className="text-danger">*</span>
                      </Label>
                      <textarea
                        type="text"
                        rows="3"
                        className="form-control "
                        id="basicpill-firstname-input1"
                        placeholder="Enter Address"
                        value={forms.address}
                        name="address"
                        onChange={e => {
                          handlechange(e)
                        }}
                      />
                    </div>{" "}
                  </Col>
                </Row>

                <hr></hr>
                <div style={{ float: "right" }} className="m-2">
                  <Button className="m-1" color="primary" type="submit">
                    Submit <i className="fas fa-check-circle"></i>
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default DigitalBrochure
