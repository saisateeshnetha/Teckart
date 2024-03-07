import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Button,
  Table,
  Label,
  Form,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { ToastContainer, toast } from "react-toastify"
import Select from "react-select"
import { URLS } from "../../Url"

const Notifications = () => {
  const [form, setform] = useState([])

  const [Noti, setNoti] = useState([])

  const [customer, setcustomer] = useState([])

  const [Atp, setAtp] = useState([])

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)
  var datas = data.token

  const handleChange = e => {
    let myUser = { ...form }
    myUser[e.target.name] = e.target.value
    setform(myUser)
  }

  const getNotifications = () => {
    var token = datas
    axios
      .post(
        URLS.GetNotifications,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setNoti(res.data.notification)
      })
  }

  // useEffect(() => {
  //   getNotifications()
  //   getactivecustomers()
  //   getactiveAtp()
  //   GetCities()
  // }, [])

  const getactivecustomers = () => {
    var token = datas

    axios
      .post(
        URLS.GetUser,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          setcustomer(res.data.userResult)
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }
  const getactiveAtp = () => {
    var token = datas

    axios
      .post(
        URLS.GetAtp,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          setAtp(res.data.atp)
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const [selectedMulti, setselectedMulti] = useState([])

  const [selectedMulti1, setselectedMulti1] = useState([])

  const [error, setError] = useState("")

  function handleMulti(data) {
    setselectedMulti(data)
  }

  function handleMulti1(data) {
    setselectedMulti1(data)
  }

  const options = customer.map(data => ({
    value: data._id,
    label: data.name,
  }))

  const options1 = Atp.map(data => ({
    value: data._id,
    label: data.firstName + data.lastName,
  }))

  const addnotifi = () => {
    var token = datas

    const dataArray = new FormData()
    dataArray.append("title", form.title)

    if (form.department == "ATP") {
      for (let i = 0; i < selectedMulti1.length; i++) {
        dataArray.append("userList", selectedMulti1[i].value)
      }
    }

    if (form.department == "USER") {
      for (let i = 0; i < selectedMulti.length; i++) {
        dataArray.append("userList", selectedMulti[i].value)
      }
    }

    if (form.department == "All") {
      dataArray.append("userList", "All")
    }

    dataArray.append("notifType", form.notifType)
    dataArray.append("description", form.description)
    dataArray.append("department", form.department)
    dataArray.append("zoneId", form.zoneId)

    axios
      .post(URLS.AddNotifications, dataArray, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            setIsLoading(true)
            getNotifications()
            clearForm()
            setselectedMulti("")
            setselectedMulti1("")
          }
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  const deletenoti = data => {
    var token = datas
    var remid = data._id
    axios
      .delete(URLS.DeleteNotifications + remid, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        res => {
          if (res.status === 200) {
            toast(res.data.message)
            getNotifications()
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
    const confirmBox = window.confirm("Do you really want to Delete?")
    if (confirmBox === true) {
      deletenoti(data)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addnotifi()
    // if (form.userList == "All") {
    //   addnotifi()
    // }

    // if (selectedMulti.length == 0) {
    //   setError("Please select at least one option.")
    // } else {
    //   addnotifi()
    // }
  }

  const clearForm = () => {
    setform({
      department: "",
      zoneId: "",
      notifType: "",
      title: "",
      description: "",
      userList: "",
    })
  }

  const [forms, setforms] = useState([])

  const handlechange = e => {
    let myUser = { ...forms }
    myUser[e.target.name] = e.target.value
    setforms(myUser)
    var token = datas
    axios
      .post(
        URLS.GetNotificationsSearch + `${e.target.value}`,
        {},

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        setNoti(res.data.notification)
      })
  }

  const [listPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * listPerPage
  const lists = Noti.slice(pagesVisited, pagesVisited + listPerPage)
  const pageCount = Math.ceil(Noti.length / listPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  var gets = localStorage.getItem("authUser")
  var data = JSON.parse(gets)

  const [city, setcity] = useState([])

  const GetCities = () => {
    var token = datas
    axios
      .post(
        URLS.GetZone,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        res => {
          setcity(res.data.zones)
        },
        error => {
          if (error.response && error.response.status === 400) {
            toast(error.response.data.message)
          }
        }
      )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="TecKart Admin" breadcrumbItem="Notifications" />

          <Row>
            <Col md={4}>
              <Card className="p-4">
                <h5>Add Notification</h5>

                <Form
                  onSubmit={e => {
                    handleSubmit(e)
                  }}
                >
                  <div>
                    <div className="mt-3">
                      <Label>Title</Label>{" "}
                      <span className="text-danger">*</span>
                      <Input
                        value={form.title}
                        onChange={e => {
                          handleChange(e)
                        }}
                        name="title"
                        required
                        type="text"
                        placeholder="Enter Title"
                      />
                    </div>
                    <div className="mt-3">
                      <Label for="basicpill-firstname-input1">
                        Notification Type
                        <span className="text-danger">*</span>
                      </Label>

                      <select
                        value={form.notifType}
                        name="notifType"
                        onChange={e => {
                          handleChange(e)
                        }}
                        className="form-select"
                        required
                      >
                        <option value="">Select</option>
                        <option value="pushfcm">Push Notification</option>
                      </select>
                    </div>

                    <div className="mt-3">
                      <Label for="basicpill-firstname-input1">
                      USER
                        <span className="text-danger">*</span>
                      </Label>

                      <select
                        value={form.department}
                        name="department"
                        onChange={e => {
                          handleChange(e)
                        }}
                        className="form-select"
                        required
                      >
                        <option value="">Select</option>

                        <option value="All">All USERS</option>
                        <option value="USER">Single USER</option>
                      </select>
                    </div>

                    {form.department == "USER" ? (
                      <div className="mt-3">
                        <Label>USERS</Label>
                        <span className="text-danger">*</span>
                        <Select
                          name="userList"
                          value={selectedMulti}
                          onChange={handleMulti}
                          options={options}
                          required
                          isMulti
                        />
                        {error && <div className="error">{error}</div>}
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="mt-3">
                      <Label>Description</Label>{" "}
                      <span className="text-danger">*</span>
                      <textarea
                        className="form-control"
                        value={form.description}
                        onChange={e => {
                          handleChange(e)
                        }}
                        name="description"
                        required
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                  </div>

                  <div className="text-end mt-3">
                    <Button type="submit" color="success m-1" outline>
                      Submit <i className="bx bx-check-circle"></i>
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>

            <Col md={8}>
              <Card>
                <CardBody>
                  <Row>
                    <Col></Col>
                    <Col>
                      <div style={{ float: "right" }}>
                        <Input
                          name="search"
                          value={forms.search}
                          onChange={handlechange}
                          type="search"
                          placeholder="Search..."
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="table-rep-plugin mt-4 table-responsive">
                    <Table hover bordered responsive>
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Date/Time</th>
                          <th>Notification Type </th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
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
                </CardBody>{" "}
              </Card>
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Notifications
