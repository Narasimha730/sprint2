import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from "react-router-dom";
import { addData, dltdata, updateData } from '../../components/context/ContextProvider';
import { usergetfunc, deletfunc, exporttocsvfunc, importcsvfunc } from "../../services/Apis";
import Alert from 'react-bootstrap/Alert';
import "./home.css";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [userdata, setUserData] = useState([]);
  const [showspin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [price, setprice] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { useradd, setUseradd } = useContext(addData);
  const { update, setUpdate } = useContext(updateData);
  const { deletedata, setDLtdata } = useContext(dltdata);

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/register");
  };

  // get user
  const userGet = async () => {
    const response = await usergetfunc(search, price, status, sort, page);
    if (response.status === 200) {
      setUserData(response.data.usersdata);
      setPageCount(response.data.Pagination.pageCount);
    } else {
      console.log("error for get user data");
    }
  };

  // user delete
  const deleteUser = async (id) => {
    const response = await deletfunc(id);
    if (response.status === 200) {
      userGet();
      setDLtdata(response.data);
    } else {
      toast.error("error");
    }
  };

  // export user
  const exportuser = async () => {
    const response = await exporttocsvfunc();
    if (response.status === 200) {
      window.open(response.data.downloadUrl, "blank");
    } else {
      toast.error("error....!");
    }
  };

  // import user
  const importuser = async () => {
    const response = await importcsvfunc();
    if (response.status === 200) {
      toast.success("CSV file imported successfully");
      userGet();
    } else {
      toast.error("Error importing CSV file");
    }
  };

  // pagination
  // handle prev btn
  const handlePrevious = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  // handle next btn
  const handleNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [search, price, status, sort, page]);

  return (
    <>
      <div className='hometop'>

        <div className="contain">

          <div className="dashboard ">
            <div className="search_add">


              {/* <div className="filter_newold">
                <h4>Sort by time</h4>
                  <Dropdown className='text-center' style={{marginLeft:'-60px'}}>
                    <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: "#b3caca", border:'white'}}>
                     <span>Click to Select  </span> 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setSort("new")}>New</Dropdown.Item>
                      <Dropdown.Item onClick={() => setSort("old")}>Old</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
              {/* <hr></hr> */}
              <div style={{ cursor: "pointer" }}>
                <div className="operation">
                  <span onClick={adduser}> <i className="fa-solid fa-plus"></i>&nbsp; Add Service</span>
                </div>
                {/* <div className="operation">
                <FontAwesomeIcon icon={faUpload} /> &nbsp;<span onClick={exportuser}>Export CSV</span><br />
                </div>
                  <div className="operation">
                  <FontAwesomeIcon icon={faDownload} /> &nbsp;<span onClick={importuser}>Import CSV</span>
                </div> <hr></hr>                */}
              </div>
            </div>
            <div className="filter_div">
              {/* <div className="export_csv">


                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      CSV
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={exportuser}>Export To CSV</Dropdown.Item>
                      <Dropdown.Item onClick={importuser}>Import CSV</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
              {/* <div className="filter_price">
                  <div className="filter">
                    <h4> <FontAwesomeIcon icon={faFilter} /> Filter By Price</h4>
                    <div className="price">
                      <Form.Check
                        type={"radio"}
                        label={`All`}
                        name="price"
                        value={"All"}
                        onChange={(e) => setprice(e.target.value)}
                        defaultChecked
                      />
                      <Form.Check
                        type={"radio"}
                        label={`$`}
                        name="price"
                        value={"$"}
                        onChange={(e) => setprice(e.target.value)}
                      />
                      <Form.Check
                        type={"radio"}
                        label={`$$`}
                        name="price"
                        value={"$$"}
                        onChange={(e) => setprice(e.target.value)}
                      />
                      <Form.Check
                        type={"radio"}
                        label={`$$$`}
                        name="price"
                        value={"$$$"}
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr></hr> */}

              {/* <div className="filter_status">
                  <div className="status">
                    <h4><FontAwesomeIcon icon={faFilter} /> Filter By Status</h4>
                    <div className="status_radio">
                      <Form.Check
                        type={"radio"}
                        label={`All`}
                        name="status"
                        value={"All"}
                        onChange={(e) => setStatus(e.target.value)}
                        defaultChecked
                      />
                      <Form.Check
                        type={"radio"}
                        label={`Active`}
                        name="status"
                        value={"Active"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <Form.Check
                        type={"radio"}
                        label={`InActive`}
                        name="status"
                        value={"InActive"}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </div>
                  </div>
                </div> */}
            </div>
          </div>


          <div className="table-container">
            {useradd ? <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.name.toUpperCase()} Added Succesfully</Alert> : ""}
            {update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>{update.name.toUpperCase()}  Update Succesfully</Alert> : ""}
            {deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>{deletedata.name.toUpperCase()}  Deleted Succesfully</Alert> : ""}
            <div className='searchdesign'>
              <div className="search">
                <Form className="d-flex">
                  <div className="input-group custom-search-input ">

                    <Form.Control
                      type="search"
                      placeholder="Find your service here..."
                      className="custom-input" 
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <Button className="search_btn custom-btn">
                    <span className="input-group-text bg-transparent border-0">
                      <i className="fas fa-search " ></i>
                    </span>
                  </Button>


                </Form>

                <br></br>
              </div>
            </div>
            <hr></hr>

            {showspin ? <Spiner /> : <Tables
              userdata={userdata}
              deleteUser={deleteUser}
              userGet={userGet}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              page={page}
              pageCount={pageCount}
              setPage={setPage}
            />}
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;



