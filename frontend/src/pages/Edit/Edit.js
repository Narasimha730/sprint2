import React, { useContext, useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Spiner from "../../components/Spiner/Spiner";
import { singleUsergetfunc, editfunc } from '../../services/Apis';
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../../components/context/ContextProvider';
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from '../../services/helper';
import 'react-toastify/dist/ReactToastify.css';
import "./edit.css";

const Edit = () => {
  const [inputdata, setInputData] = useState({
    name: "",
    category: "",
    location: "",
    email: "",
    mobile: "",
    price: "",

  });

  const [status, setStatus] = useState("Active");
  const [imgdata, setImgdata] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const { update, setUpdate } = useContext(updateData);
  const navigate = useNavigate();
  const [showspin, setShowSpin] = useState(true);
  const { id } = useParams();

  // status options
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // profile set
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
      setInputData(response.data);
      setStatus(response.data.status);
      setImgdata(response.data.profile);
    } else {
      console.log("error");
    }
  };

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
      toast.error("Price is Required !")
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


      const response = await editfunc(id, data, config);

      if (response.status === 200) {
        setUpdate(response.data);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    userProfileGet();
  }, [id]);

  useEffect(() => {
    if (image) {
      setImgdata("");
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [image]);

  return (
    <>
      {showspin ? (
        <Spiner />
      ) : (
        <div className="container contains">
          <h2 className='text-center '>Update the Data</h2>
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
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" name='category' value={inputdata.category} onChange={setInputValue} placeholder='Enter Category' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter the Location</Form.Label>
                  <Form.Control type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder='Enter Your Location' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Enter Mobile' />
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
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Status</Form.Label>
                  <Select options={options} onChange={setStatusValue} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Add image</Form.Label>
                  <Form.Control type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>

            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}

    </>
  );
};

export default Edit;
