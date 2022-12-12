import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import NavBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

import data from '../store/data';
// import './AllUsers.css';

const MobileComponent = () => {
  return (
    <div>
      <h1>Mobile</h1>
    </div>
  );
};

const DesktopComponent = () => {
  return (
    <div>
      <h1>Desktop</h1>
    </div>
  );
};

const Table = () => {
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">D</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Position</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: '45px', height: '45px' }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">John Doe</p>
                <p className="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </td>
          <td>
            <MDBBadge color="success" pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: '45px', height: '45px' }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Alex Ray</p>
                <p className="text-muted mb-0">alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Consultant</p>
            <p className="text-muted mb-0">Finance</p>
          </td>
          <td>
            <MDBBadge color="primary" pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: '45px', height: '45px' }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Kate Hunington</p>
                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">Designer</p>
            <p className="text-muted mb-0">UI/UX</p>
          </td>
          <td>
            <MDBBadge color="warning" pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

const TestTable = () => {
  const navigate = useNavigate();

  return (
    <>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Student</th>
            <th scope="col">IT profession</th>
            <th scope="col">Status</th>
          </tr>
        </MDBTableHead>
        {data.map((item) => {
          return (
            <tr className='trrr' onClick={() => {
              navigate(item.route)
            }}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.avatar}
                    alt=""
                    style={{ width: '45px', height: '45px' }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{item.user}</p>
                    <p className="text-muted mb-0">{item.mail}</p>
                  </div>
                </div>
              </td>
              <td>
              <span class="input">
                {/* <input type="text" placeHolder="Gradient border focus fun"/> */}
                <p>Software developer</p>
              </span>
              
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Active
                </MDBBadge>
              </td>
            </tr>
          );
        })}
      </MDBTable>
    </>
  );
};

const AllUsers = (screenWidth) => {
  // const  = window.screen.width
  const screenHeight = window.screen.height;
  const [isMobile, setIsMobile] = useState(window.screen.width < 768);

  const size = window.innerWidth;

  // const ComponentToRender = isMobile ? MobileComponent : DesktopComponent;
  return (
    <>
      <NavBar />
      <TestTable />
      {/* <Table></Table> */}
      {/* {size < 768 ? <MobileComponent /> : <DesktopComponent />}
       */}
      {/* <ComponentToRender /> */}
    </>
  );
};

export default AllUsers;
