import React from 'react'
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import Popup from 'reactjs-popup';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./UserManagement.css"
const UserManagement = () => {

    const history = useHistory();
    const user = useSelector((state) => state.user.user);
    return (
        <div>
            <div data-testid="card-div-um-0" className="text-end">

                <Popup trigger=
                    {<AccountCircleIcon style={{ fontSize: 45, color:"white"}} />}>

                    <Card  className="user-popupcard" style={{ right: "100px" }}>
                        <div variant="outlined" className="card-body px-4 py-4">
                            <div  id="user-circle-avatar" className="text-center mx-auto mb-4">
                                <span className='user-span'>{user.firstName[0]}</span>
                            </div>
                            <h5 className="text-center mb-0">{user.firstName} {user.lastName}</h5>
                            <p className="text-center mb-2">{user.email}</p>
                            <hr />
                            <p
                                className="mb-0"
                                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
                            >
                                ROLES
                            </p>
                            <p style={{ fontSize: 12 }}>
                               {user.roles.join( ", ")}
                            </p>
                            <hr className="mb-0" />
                            <div
                                className="list-group list-group-flush"
                                style={{ margin: "0 -24px 0" }}
                            >
                                <Button variant="outlined" onClick={() => { history.push("/change-password"); }} style={{ marginLeft: "10px", marginBottom: "2px", widht: "100%" }}>
                                    <small>Change Password</small>
                                </Button>
                                <br />
                                <Button variant="outlined" style={{ marginLeft: "10px", widht: "100%", color: "red" }}>
                                    <small>Swipe Role</small>
                                </Button>

                            </div>

                        </div>
                    </Card>
                </Popup>
            </div>
        </div>
    )
}

export default UserManagement;