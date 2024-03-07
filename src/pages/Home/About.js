import React, { useEffect, useState } from "react"
import {
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Table,
  Label,
  Input,
  CardTitle,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { ToastContainer, toast } from "react-toastify"
import { URLS } from "../../Url"
import axios from "axios"

function DigitalBrochure() {
  const [files, setFiles] = useState([])

  const [files1, setFiles1] = useState([])

  const [files2, setFiles2] = useState([])

  const [show, setshow] = useState(false)

  const [inputList, setInputList] = useState([])

  const [inputList1, setInputList1] = useState([])

  const [inputList2, setInputList2] = useState([])

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
  const changeHandler2 = e => {
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
      setFiles2(e.target.files)
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

  useEffect(() => {
    GetAllBroucher()
  }, [])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const GetAllBroucher = () => {
    var token = datas

    axios
      .post(
        URLS.GetAbout1,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setform(res.data.aboutus)
        setforms(res.data.aboutus)
        setInputList(res.data.aboutus.points1)
        setInputList1(res.data.aboutus.points2)
        setInputList2(res.data.aboutus.points3)
      })
  }

  function tog_small() {
    setshow(!show)
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
    dataArray.append("titile1", forms.titile1)
    dataArray.append("description1", forms.description1)

    dataArray.append("titile2", forms.titile2)
    dataArray.append("description2", forms.description2)

    dataArray.append("titile3", forms.titile3)
    dataArray.append("description3", forms.description3)

    dataArray.append("points1", JSON.stringify(inputList))

    dataArray.append("points2", JSON.stringify(inputList1))

    dataArray.append("points3", JSON.stringify(inputList2))

    for (let i = 0; i < files.length; i++) {
      dataArray.append("image1", files[i])
    }

    for (let i = 0; i < files1.length; i++) {
      dataArray.append("image2", files1[i])
    }

    for (let i = 0; i < files2.length; i++) {
      dataArray.append("image3", files2[i])
    }

    axios
      .put(URLS.UpdatAbout1, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setshow(false)
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

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const handleRemoveClick = index => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  const handleAddClick = () => {
    setInputList([...inputList, { points1: "" }])
  }

  const handleInputChange1 = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList1]
    list[index][name] = value
    setInputList1(list)
  }

  const handleRemoveClick1 = index => {
    const list = [...inputList1]
    list.splice(index, 1)
    setInputList1(list)
  }

  const handleAddClick1 = () => {
    setInputList1([...inputList1, { points2: "" }])
  }

  const handleInputChange2 = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList2]
    list[index][name] = value
    setInputList2(list)
  }

  const handleRemoveClick2 = index => {
    const list = [...inputList2]
    list.splice(index, 1)
    setInputList2(list)
  }

  const handleAddClick2 = () => {
    setInputList2([...inputList2, { points3: "" }])
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="TecKart Admin" breadcrumbItem="About Us" />

          {show == true ? (
            <Row>
              <Col md={12}>
                <Form
                  onSubmit={e => {
                    submibooking(e)
                  }}
                >
                  <Card>
                    <CardHeader className="bg-white">
                      <CardTitle>Edit About Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <hr></hr>
                      <h2 className="text-center text-primary">Section 1</h2>
                      <hr></hr>
                      <Row className="mt-5 mb-5">
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Title <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-firstname-input1"
                              placeholder="Enter Title"
                              required
                              value={forms.titile1}
                              name="titile1"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Image <span className="text-danger">* </span>
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
                        <Col md={10}>
                          <div>
                            <Label>Points</Label>
                            <Row>
                              {inputList.map((x, i) => {
                                return (
                                  <>
                                    <Row>
                                      <div key={i} className="box row">
                                        <Col md="8" sm="12" className="mb-3">
                                          <Input
                                            type="text"
                                            required
                                            name="points1"
                                            placeholder="Enter points"
                                            value={x.points1}
                                            onChange={e =>
                                              handleInputChange(e, i)
                                            }
                                          />
                                        </Col>

                                        <Col sm="2" md="3">
                                          <div className="btn-box">
                                            {inputList.length !== 1 && (
                                              <button
                                                className="mr10 btn btn-outline-danger btn-sm m-1"
                                                type="button"
                                                onClick={() =>
                                                  handleRemoveClick(i)
                                                }
                                              >
                                                Remove
                                                <i className="bx bx-x-circle"></i>
                                              </button>
                                            )}
                                            {inputList.length - 1 === i && (
                                              <button
                                                className="btn btn-sm btn-outline-info m-1"
                                                onClick={handleAddClick}
                                              >
                                                Add
                                                <i className="bx bx-plus-circle"></i>
                                              </button>
                                            )}
                                          </div>
                                        </Col>
                                      </div>
                                    </Row>
                                  </>
                                )
                              })}
                            </Row>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Description <span className="text-danger">*</span>
                            </Label>
                            <textarea
                              type="text"
                              rows="6"
                              className="form-control "
                              id="basicpill-firstname-input1"
                              placeholder="Enter Service Description"
                              required
                              value={forms.description1}
                              name="description1"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <hr></hr>
                      <h2 className="text-center text-primary">Section 2</h2>
                      <hr></hr>
                      <Row className="mt-5 mb-5">
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Title <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-firstname-input1"
                              placeholder="Enter Title"
                              required
                              value={forms.titile2}
                              name="titile2"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Image <span className="text-danger">* </span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input1"
                              name="image"
                              value={files1.image}
                              onChange={changeHandler1}
                            />
                          </div>
                        </Col>
                        <Col md={10}>
                          <div>
                            <Label>Points</Label>
                            <Row>
                              {inputList1.map((x, i) => {
                                return (
                                  <>
                                    <Row>
                                      <div key={i} className="box row">
                                        <Col md="8" sm="12" className="mb-3">
                                          <Input
                                            type="text"
                                            required
                                            name="points2"
                                            placeholder="Enter points"
                                            value={x.points2}
                                            onChange={e =>
                                              handleInputChange1(e, i)
                                            }
                                          />
                                        </Col>

                                        <Col sm="2" md="3">
                                          <div className="btn-box">
                                            {inputList1.length !== 1 && (
                                              <button
                                                className="mr10 btn btn-outline-danger btn-sm m-1"
                                                type="button"
                                                onClick={() =>
                                                  handleRemoveClick1(i)
                                                }
                                              >
                                                Remove
                                                <i className="bx bx-x-circle"></i>
                                              </button>
                                            )}
                                            {inputList1.length - 1 === i && (
                                              <button
                                                className="btn btn-sm btn-outline-info m-1"
                                                onClick={handleAddClick1}
                                              >
                                                Add
                                                <i className="bx bx-plus-circle"></i>
                                              </button>
                                            )}
                                          </div>
                                        </Col>
                                      </div>
                                    </Row>
                                  </>
                                )
                              })}
                            </Row>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Description <span className="text-danger">*</span>
                            </Label>
                            <textarea
                              type="text"
                              rows="6"
                              className="form-control "
                              id="basicpill-firstname-input1"
                              placeholder="Enter Service Description"
                              required
                              value={forms.description2}
                              name="description2"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <hr></hr>
                      <h2 className="text-center text-primary">Section 3</h2>
                      <hr></hr>
                      <Row className="mt-5 mb-5">
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Title <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-firstname-input1"
                              placeholder="Enter Title"
                              required
                              value={forms.titile3}
                              name="titile3"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Image <span className="text-danger">* </span>
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="basicpill-firstname-input1"
                              name="image"
                              value={files2.image}
                              onChange={changeHandler2}
                            />
                          </div>
                        </Col>
                        <Col md={10}>
                          {" "}
                          <div>
                            <Label>Points</Label>
                            <Row>
                              {inputList2.map((x, i) => {
                                return (
                                  <>
                                    <Row>
                                      <div key={i} className="box row">
                                        <Col md="8" sm="12" className="mb-3">
                                          <Input
                                            type="text"
                                            required
                                            name="points3"
                                            placeholder="Enter points"
                                            value={x.points3}
                                            onChange={e =>
                                              handleInputChange2(e, i)
                                            }
                                          />
                                        </Col>

                                        <Col sm="2" md="3">
                                          <div className="btn-box">
                                            {inputList2.length !== 1 && (
                                              <button
                                                className="mr10 btn btn-outline-danger btn-sm m-1"
                                                type="button"
                                                onClick={() =>
                                                  handleRemoveClick2(i)
                                                }
                                              >
                                                Remove
                                                <i className="bx bx-x-circle"></i>
                                              </button>
                                            )}
                                            {inputList2.length - 1 === i && (
                                              <button
                                                className="btn btn-sm btn-outline-info m-1"
                                                onClick={handleAddClick2}
                                              >
                                                Add
                                                <i className="bx bx-plus-circle"></i>
                                              </button>
                                            )}
                                          </div>
                                        </Col>
                                      </div>
                                    </Row>
                                  </>
                                )
                              })}
                            </Row>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-3">
                            <Label for="basicpill-firstname-input1">
                              Description <span className="text-danger">*</span>
                            </Label>
                            <textarea
                              type="text"
                              rows="6"
                              className="form-control "
                              id="basicpill-firstname-input1"
                              placeholder="Enter Service Description"
                              required
                              value={forms.description3}
                              name="description3"
                              onChange={e => {
                                handlechange(e)
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <div style={{ float: "right" }}>
                    <Button color="primary" type="submit">
                      Submit <i className="fas fa-check-circle"></i>
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          ) : (
            ""
          )}

          <Row className="mt-5">
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
                            getpopup1()
                          }}
                          className="mr-5 mb-1 m-1 mt-3"
                          color="success"
                          outline
                        >
                          <i className="bx bx-edit text-dark "></i>
                          <span>Edit About Us</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>

                <CardBody>
                  <Row>
                    <div>
                      <hr></hr>
                      <h2 className="text-center text-primary">Section 1</h2>
                      <hr></hr>
                      <div className="table-rep-plugin mt-4 table-responsive">
                        <Table hover className="table table-bordered mb-4">
                          <thead>
                            <tr className="text-center">
                              <th>Title </th>
                              <td>{form.titile1}</td>
                            </tr>

                            <tr className="text-center">
                              <th>Image</th>
                              <td>
                                <img
                                  src={URLS.Base + form.image1}
                                  width="300px"
                                ></img>
                              </td>
                            </tr>

                            <tr className="text-center">
                              <th>Points</th>
                              <td>
                                {inputList.map((data, key) => (
                                  <ul key={key}>
                                    <li>{data.points1}</li>
                                  </ul>
                                ))}
                              </td>
                            </tr>

                            <tr className="text-center">
                              <th>Description</th>
                              <td>{form.description1}</td>
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

          <Row >
            <Col md={12}>
              <Card>
                <CardBody>
                  <hr></hr>
                  <h2 className="text-center text-primary">Section 2</h2>
                  <hr></hr>
                  <div className="table-rep-plugin mt-4 table-responsive">
                    <Table hover className="table table-bordered mb-4">
                      <thead>
                        <tr className="text-center">
                          <th>Title </th>
                          <td>{form.titile2}</td>
                        </tr>

                        <tr className="text-center">
                          <th>Image</th>
                          <td>
                            <img
                              src={URLS.Base + form.image2}
                              width="300px"
                            ></img>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <th>Points</th>
                          <td>
                            {inputList1.map((data, key) => (
                              <ul key={key}>
                                <li>{data.points2}</li>
                              </ul>
                            ))}
                          </td>
                        </tr>
                        <tr className="text-center">
                          <th>Description</th>
                          <td>{form.description2}</td>
                        </tr>
                      </thead>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <hr></hr>
                  <h2 className="text-center text-primary">Section 3</h2>
                  <hr></hr>
                  <div className="table-rep-plugin mt-4 table-responsive">
                    <Table hover className="table table-bordered mb-4">
                      <thead>
                        <tr className="text-center">
                          <th>Title </th>
                          <td>{form.titile3}</td>
                        </tr>

                        <tr className="text-center">
                          <th>Image</th>
                          <td>
                            <img
                              src={URLS.Base + form.image3}
                              width="300px"
                            ></img>
                          </td>
                        </tr>
                        <tr className="text-center">
                          <th>Points</th>
                          <td>
                            {inputList2.map((data, key) => (
                              <ul key={key}>
                                <li>{data.points3}</li>
                              </ul>
                            ))}
                          </td>
                        </tr>
                        <tr className="text-center">
                          <th>Description</th>
                          <td>{form.description3}</td>
                        </tr>
                      </thead>
                    </Table>
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

export default DigitalBrochure
