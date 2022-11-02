// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import UpdateSliitProfile from './update-admin';
// import CircularProgress from "@material-ui/core/CircularProgress";
// import Footer from "../components/Layout/Footer";

// toast.configure();

// const AdminProfile = () => {
//   const [fullName, setfullName] = useState(null);
//   const [phoneNo, setphone] = useState(null);
//   const [nic, setnic] = useState(null);
//   const [email, setemail] = useState(null);
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true);
//     const getUserData = async () => {
//       try {
//         const config = {
//           headers: {
//             Authorization: localStorage.getItem("Authorization"),
//           },
//         };
//         await axios
//           .get("http://localhost:8070/api/user/userprofile", config)
//           .then((res) => {
//             setfullName(res.data.Admin.fullName);
//             setphone(res.data.Admin.phoneNo);
//             setnic(res.data.Admin.nic);
//             setemail(res.data.Admin.email);
//             setShow(res.data.Admin.show);
//             setLoading(false);
//           })
//           .catch((error) => {
//             console.log(error.message);
//           });
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getUserData();
//   }, []);

//   //update admin details
//   const updateUserProfile = () => {
//     setShow(true);
//   };

//   //logout the staff menber account
//   const adminLogout = () => {
//     if (window.confirm("Are you sure you wish to logout from this Account?")) {
//       localStorage.removeItem("Authorization");
//       toast.success("Log out successfuly", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       window.location = "/";
//     }
//   };

//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center"
//         style={{ paddingTop: 400 }}
//       >
//         <CircularProgress hidden={false} />
//       </div>
//     );
//   }

//   return (
//     <div class="bod" style={{ background: "#F8F8FF" }}>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div class="container">
//         <div class="main-body">
//           <div class="row gutters-sm">
//             <div class="col-md-4 mb-4">
//               <div class="d-flex flex-column align-items-center text-center">
//                 <div class="mt-3">
//                   <div class="d-flex flex-column align-items-center text-center">
//                     <img
//                       src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"
//                       class="rounded-circle"
//                       width="180"
//                       height="180"
//                     />
//                     <div class="mt-3">
//                       <h4>{fullName}</h4>
//                       <h4>{email}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-8">
//               <div class="card-body">
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <h6 class="mb-0 ">
//                       <b>Full Name</b>
//                     </h6>
//                   </div>
//                   <div class="col-sm-9 text-secondary">{fullName}</div>
//                 </div>
//                 <hr />
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <h6 class="mb-0">
//                       <b>Phone Number</b>
//                     </h6>
//                   </div>
//                   <div class="col-sm-9 text-secondary">{phoneNo}</div>
//                 </div>
//                 <hr />
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <h6 class="mb-0">
//                       <b>SLIIT ID</b>
//                     </h6>
//                   </div>
//                   <div class="col-sm-9 text-secondary">{nic}</div>
//                 </div>
//                 <hr />
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <h6 class="mb-0">
//                       <b>Email</b>
//                     </h6>
//                   </div>
//                   <div class="col-sm-9 text-secondary">{email}</div>
//                 </div>
//                 <hr />
//                 <div class="row">
//                   <div class="col-sm-12">
//                     <div class="row">
//                       <div class="col-sm-12">
//                         <br />
//                         <center>
//                           <button
//                             style={{ background: "#151B54", color: "#ffff" }}
//                             onClick={adminLogout}
//                             class="btn btn "
//                             target="__blank"
//                           >
//                             Log Out
//                           </button>
//                           &nbsp;&nbsp;&nbsp;
//                           <button
//                             style={{ background: "#9F000F", color: "#ffff" }}
//                             onClick={updateUserProfile}
//                             class="btn btn "
//                             target="__blank"
//                           >
//                             Update Details
//                           </button>
//                         </center>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="row">
//                   <div class="col-sm-12">
//                     <center>
//                       <button
//                         onClick={updateUserProfile}
//                         class="btn btn-warning btn-lg ms-2 "
//                         target="__blank"
//                       >
//                         Edit Profile Details
//                       </button>
//                     </center>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <UpdateSliitProfile
//      upname= {fullName}
//      upphone= {phoneNo}
//      upsliitid= {nic}
//      upemail= {email}
//      show={show}
//      onHide={() => setShow(false)}
//          /> */}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default AdminProfile;
