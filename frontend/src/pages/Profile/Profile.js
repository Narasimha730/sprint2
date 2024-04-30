import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import Spiner from "../../components/Spiner/Spiner"
import { singleUsergetfunc } from "../../services/Apis"
import { BASE_URL } from '../../services/helper'
import moment from "moment"
import "./profile.css"


const Profile = () => {

  const [userprofile, setUserProfile] = useState({});
  const [showspin, setShowSpin] = useState(true);

  const { id } = useParams();

  const userProfileGet = async () => {
    const response = await singleUsergetfunc(id);

    if (response.status === 200) {
      setUserProfile(response.data)
    } else {
      console.log("error....");
    }
  }


  useEffect(() => {
    userProfileGet();
    console.log("User ID:", id);
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  }, [id])
  return (
    <>
      {
        showspin ? <Spiner /> : <div className="contain">
          <Card className='card-profile shadow design'>


            <div className="col flex">
              <div className="d-flex" style={{ height: "250px", width: "250px", marginLeft: "450px" }}>
                <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
            <div className='text-center'>
              <h3>Name:{userprofile.name}</h3>
              <h3>Category <span>{userprofile.category}</span></h3>
              <h3><i class="fa-solid fa-location-pin location"></i> Location :&nbsp;:- <span>{userprofile.location}</span> </h3>
              <h4>Price Range &nbsp;: <span>{userprofile.price}</span> </h4>



              <h4><i class="fa-solid fa-envelope email"></i>&nbsp;Email : <span>{userprofile.email}</span> </h4>
              <h5><i class="fa-solid fa-mobile"></i>&nbsp;Mobile: <span>{userprofile.mobile}</span> </h5>

              <h4>Status&nbsp;: <span>{userprofile.status}</span> </h4>
              <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span> </h5>
              <h5> <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span>{userprofile.dateUpdated}</span> </h5>
            </div>

          </Card>
        </div>
      }

    </>
  )
}

export default Profile