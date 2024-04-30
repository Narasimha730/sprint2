import React, { useContext, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner"
import { registerfunc } from "../../services/Apis"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"
import { addData } from '../../components/context/ContextProvider';

const Register = () => {

  const [inputdata, setInputData] = useState({
    name: "",
    category: "",
    location: "",
    email: "",
    mobile: "",
    price: "",

  });

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [showspin, setShowSpin] = useState(true);

  const navigate = useNavigate();

  const { useradd, setUseradd } = useContext(addData);

  // status optios
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value)
  }

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }

  //submit userdata
  const submitUserData = async (e) => {
    e.preventDefault();

    const { name, category, location, mobile, email, price } = inputdata;

    if (name === "") {
      toast.error(" name is Required !")
    } else if (location === "") {
      toast.error("location is Required !")
    } else if (email === "") {
      toast.error("Email is Required !")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !")
    } else if (mobile === "") {
      toast.error("Mobile is Required !")
    } else if (price === "") {
      toast.error("price is Required !")
    } else if (status === "") {
      toast.error("Status is Required !")
    } else if (image === "") {
      toast.error("Profile is Required !")
    } else {
      console.log(name, category, location, mobile, email, price);

      const data = new FormData();
      data.append("name", name)
      data.append("category", category)
      data.append("location", location)
      data.append("email", email)
      data.append("mobile", mobile)
      data.append("price", price)
      data.append("status", status)
      data.append("user_profile", image)


      const config = {
        "Content-Type": "multipart/form-data"
      }

      const response = await registerfunc(data, config);

      if (response.status === 200) {
        setInputData({
          ...inputdata,
          name: "",
          category: "",
          location: "",
          email: "",
          mobile: "",
          price: "",
        });
        setStatus("");
        setImage("");
        setUseradd(response.data)
        navigate("/");
      } else {
        toast.error("Error!")
      }

    }

  }

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }

    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [image])


  return (
    <>
      {
        showspin ? <Spiner /> : <div className="container contains">
          <h3 className='text-center ' style={{ color: "grey" }}>Register your Account Here</h3>
          <Card className='shadow mt-3 p-3  color-card'>
            <div className=" text-center d-flex im " style={{ height: "250px", width: "250px" }}><h4>Image</h4>
              <img class="img-fluid " src={preview ? preview : "/man.png"} alt="img" />
            </div>

            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' value={inputdata.name} onChange={setInputValue} placeholder='Enter Name' />
                </Form.Group>
                {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" name='category' value={inputdata.category} onChange={setInputValue} placeholder='Enter Category' />
                </Form.Group> */}
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter the Location</Form.Label>
                  <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder='Enter Your Location' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Phone Number' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Price Range</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`$`}
                    name="price"
                    value={"$"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`$$`}
                    name="price"
                    value={"$$"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`$$$`}
                    name="price"
                    value={"$$$"}
                    onChange={setInputValue}
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Status</Form.Label>
                  <Select options={options} onChange={setStatusValue} />
                </Form.Group> */}
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Add image</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                </Form.Group>

                <Button variant="success" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>

            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      }

    </>
  )
}

export default Register