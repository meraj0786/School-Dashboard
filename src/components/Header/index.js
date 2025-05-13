import React from 'react'
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logoImg/logoIcon.jpg'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import Badge from '@mui/material/Badge';

function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [NotificationDrop, setNotificationDrop] = React.useState(null);
    const open = Boolean(anchorEl);
    const openNotification = Boolean(NotificationDrop);
    const handleMyAccDropOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMyAccDropClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationDropOpen = (event) => {
        setNotificationDrop(event.currentTarget);
    };
    const handleNotificationDropClose = () => {
        setNotificationDrop(null);
    };

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100 '>
                    <div className='row d-flex align-items-center w-100'>
                        {/* logo wrapper */}
                        <div className='col-sm-2 part1'>
                            <Link to={"/"} className='d-flex align-items-center logo'>
                                <img src={logoIcon} alt='logo' />
                                <span className='ml-2'>SCHOOL</span>
                            </Link>
                        </div>
                        <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                            <Button className='rounded-circle mr-3' ><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>
                        <div className='col-sm-7 d-flex align-items-center justify-content-end part3 pl-4'>
                            <Button className='rounded-circle mr-3' ><MdOutlineLightMode /></Button>
                            <Button className='rounded-circle mr-3' ><MdOutlineShoppingCart /></Button>

                            <Button className='rounded-circle mr-3' ><MdOutlineMail /></Button>
                            <Button className='rounded-circle mr-3' onClick={handleNotificationDropOpen}><IoNotificationsOutline /></Button>
                            <Menu
                                anchorEl={NotificationDrop}
                                id="account-menu"
                                open={openNotification}
                                onClose={handleNotificationDropClose}
                                onClick={handleNotificationDropClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <div className='container'>
                                    <h2 style={{ fontWeight: "5px", fontSize: "15px", padding: 4, maxWidth: 300 }}>Order (12)</h2>
                                </div>
                                <Divider />
                                <div className='scroll'>
                                    <MenuItem sx={{ width: 300, background: "#ebf6ff", margin: "5px", borderRadius: "6px" }} onClick={handleNotificationDropClose}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={"data:image/jpeg;base64,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"} alt='profile' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Meraj </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p style={{ color: "blue", marginBottom: 0, fontSize: "12px" }}>few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem sx={{ width: 300, background: "#ebf6ff", margin: "5px", borderRadius: "6px" }} onClick={handleNotificationDropClose}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={"data:image/jpeg;base64,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"} alt='profile' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Meraj </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p style={{ color: "blue", marginBottom: 0, fontSize: "12px" }}>few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem sx={{ width: 300, background: "#ebf6ff", margin: "5px", borderRadius: "6px" }} onClick={handleNotificationDropClose}>
                                        <div className='d-flex'>
                                            <div>
                                                <div className='userImg'>
                                                    <span className='rounded-circle'>
                                                        <img src={"data:image/jpeg;base64,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"} alt='profile' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Meraj </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p style={{ color: "blue", marginBottom: 0, fontSize: "12px" }}>few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem sx={{ width: 300, background: "#ebf6ff", margin: "5px", borderRadius: "6px" }} onClick={handleNotificationDropClose}>
                                        <div className='d-flex'>
                                            <Badge badgeContent={4} color="secondary" anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                                <div>
                                                    <div className='userImg'>
                                                        <span className='rounded-circle'>
                                                            <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA6EAABAwIDBgMFBgUFAAAAAAABAAIDBBEFEiEGEzFBUWEicYEHI1KRwRQyobHR8CQzNEJyFUNTYuH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRAyExQQQSIjJCFP/aAAwDAQACEQMRAD8A68BOyaF8l9EkJoVQrIUkWQRsghSQggUrKZCigiVA8VodrtqKfZ6mystLWyD3cN+A6u6D815bi20eK4tLmmrZWNt4YoZCxg+XH1XTDiuXbGXJMXt4cDwINtNE189R1FXTOD6eolikabl8cpafzXU7O+0OvoZ2w4y51ZT8M4A3jO/fyW8vj5SdVic+N6r1wBMhVUdTDWU8dRSyNlhkbmY9vAhXrhp3QslZW2SssirKlZXEKJagqISIVlkiEVVZRLVaQlZRVVk1ZZJBnosnZOy2wiE7J2QAqFZFk7IsgVkWUrIIQQIWtx7Eo8IwmprpSPcsJa0/3O5AeZWzIXnPtarQ+OhwtjrOc/fPvwAGg/MrWE3lpnK6jhHsr8brZqosdPPM4lztSSenko4pgtdhsdM+rpyxtQCWNtc+tua9c2Ow+KmwOlDWMuWXJtqb91ua2hpauDdzxNeL31HBdpzZb6YvDjrt4LFs9ic9OZ2wuIzWtbVYlZhdXRktnic0jrqvbqmmZTtLY2ANsuI2kbmfYsBI7LE+Tl9nS/FwuPTVbAbWnAqv7JXPccOlOo47l3xAdOq9pje2RjXsIc1wuCDoQvnPEIwyQZWtaDpoF7fsDI+bZDC3yOLnCHLc9ASAtc+Ms+0cuHKy3GugRZOylZcHZCyCpkKJCggQokKyyiQoqshRsrCFEhQRQnZCLtnITQtMgITQqI8000IEkpIQRsvO/axQtf8A6XVOAa3emJ77XNjqPqvRlpNo8NgxOkqYKhheWsbJDr91wJ1C1jfrdpcftNMSqhENFHmxA0FDGxoGTRzvX9Fz+HY0XYy2losdrp4Q6wjmpw5p52zEX4d128dKx9KwyBriBcAi6xWYTSsqjWGNol4X4fgrvUbmttBtxj/+jRxxtLG1EzfCS24HouCxWWrcf43GqczuAduWwWtfhqul9rFHIX0c722Y0ZT17LUU1BDi2Hb+rkc57W/faAMwHU2WsbjjN1my26jl66O1IHyOAIdyFwV7bsXSOo9lsLhe0h32dr3A8QXeL6rx6qpg9pjNxDvBc9tV63sC+qm2eY+sldKd7II3ONzkBsFeS7xZmFmW3RgJphOy4tIIIUiEkFZUVYQolQQKiplKyioWQp2STQy7Jp2QqgsiyaFQk0IQCEWRZAKiWna9xeRd2Ww7K+yLIMOimOSzrXboVi1EsZ3oDnudz3ZIy+vIq6Ru4neOuvmCtfX4dDU2klEjg0aRhxyn06qy9NyTe3GbeRnENy/7XK0RaCnuCbczfmtfS1WHw4I+mo3ESMHiD9D5rYY/hgfBK2GjLTYe8c9xIHQLk5HBkLYS33g8N+a1O55aykxu4zcIwuvxoTQ0MO9c0B0gLg2zfX98V6zsth82GYDSUlS1olYDmDdQCSTxWj9mdA2DC56oavmkDSegb/6SuzAJOqlvpzpAKVkwE7LKIEKJCssUiEFRUSFaQoEKCshKykQlZBGyFKyFBlJpJhUL0T9E0KhITQgEITQJHJClu3ZHOsQACbdbBWS3wlsnlrq9meXLezsuhC5ep2jlwqd0WKU+7aD4JR914/fJdBTTS1TRLOGte7kwWAHJQr4mSRObKxrmkai11J5dPTgtoNqqSrbII5mW/ty9VxTJpZ6kyODQDwueC6rHMKjfOTTwbsZrAAcVTJgTaWIOk+9a63jnjIZYZZWO69m7g7Z9zb3LJ3Xt6H6rrWheR7NY5X4ZiMFHR5HwzzDeMcOI4EjobfkvUqPEoKkagxO6P5qWXyxlZLplpp6IWUJRPkppFBWVAqwhKyKrt2UbKxKyCuyFZZCgusiyAhAIQhUNCFdDTufZzh4eiuONt6TLKSdqgC4+HVTEJ/uNlkGIt0A0UgGkWJK748Ujz5ctvhCFkZ00Dh15qeRoFxcEG5F7go3Q7J5bLrJHO21paimFNO6O3hOsZHMfqFiSPy+EhdFNGyePJKwPbxAPI9ui1s+GPcRu5hbpILn5hcM+G76enDmmtZOYqos0mc5bN7LSVkElZIbAkcLdV3z8Ia6NzXPAvxLQrKTC6ejHuY/F8btSuc4Mre3T/TjjOnMbPbLto5HVlWwb9ws1vwDn6lb/AOysuTYanos9zCBoogar1zGSaePLO5XbGa2SIe7OnTkrGVA4SgsPXkrbJPjzNtZYywlXHOxMEEXBuOqVliPY+EZojbsroJjKCC2zhxXDLjuLvjnMlhCiQpqBWGyISsmhFKyFKyEEkJpWUDCEJILIWbyUNHXXyW3yhosBYLCw6OxzHnoFmB1y/Xg5evhx1NvNy3d0pkNpWHk4W9U3gE8AiVt3RdQb/gpOC6uSqyV1Iqtyhs7qJRext0QPFZEIpJuGrR3QQgrcFU4WV5VbgixV1UgeChJoL8uaiXDO030sqbKqIjh3h4ZrLDp3OMuf4h+CMdeW0FHGNN5LZ57BNuhuORWbNzSy67ZZcOSLpEDQjgRcIC8eXVezG7hoRdMWUAmiwQgaEIWWhZAve3VCvo2Z6htwbDUrWM3dM5XU2yme5mgj6sPzSzOBmaDqD9FTicu6qqR/Dxhp9dFKR2WrLTwez8QvdOunjt32tD85BHQWV0mhyjnwWFTOvlaORylWwS70ySDXxFjPIIiTgRdVu5d1aR6qlzvfAW0aiIOd4n9tFKnuTfosd7tZfNZVGDuS5AnH+Ka3o0lSI0VAdetP+KyXIKiqna3VjlQXAEg9UVU92VYlQ8QyWzXaQHEfCnUzAZ2ki4dlWqkqBNtA+mc4e8oGlrfJxv8AmlNL9qakMkw+nabukkAb6kfS6ywQ2ndI42FyVpcZYanaPDZAbxQB59QLfVbav0hip28X2H6qbX1GeARTwX47sXSV84tGzsLKhebln5bejiv4mEwkEXXN1TQhCBoSQsKa2GGtsxz+psFr1t4I93Exg5Bd+Gby248t1NNTtU/d0bZf+N7XfIgqzEJA1sFQODTr5FVbWN3mFTNH3sht8lRRPbXYLCHf7sAv8l6Pbh6XQTljKiYWtmAHn+yFm4dHu6SO+pIufMrm8F3j5q2BzybCM273dr+AXVNADAByCsSzSVtfJYofd56ucrZnZIXu6BY1GN4/OeDQtIxXu9/Mz/utpEN3T2Wqpxva99tfFqttLZsenIKIwoz/ABZWY5YEP80uWa3VpQVE6uWFM+z3FXskzF3UOWsrqgNqTFbW2Yd0WMPFi9tSXtHge0E25WWiqpsu3uDvBAbLTvBPaxK3OKuP2QOOjhGVxW2EslNDhlZGSJjTyRteOLSRoVK3jHUYxOGYvg0ELmP31Qd6Wm5aBrb5WW5/qKxryNM2gXObKMjrIIaoNFo2fZqcfCOMj/MnT07rq4mATtaNANFIl66bCo/lgdljBZcw8I8lhnRY5p1tvhurpIJqKYXmelJNJCAKV00LKraUB1RG08CVtzo5CF6fj+Hm5vLU4z4onNPAhaPA5HDCoGg6NcQPK5Qhdf6c/wCRhRy7Qzkc4Bfv4l1DSShCYmSnEiW02nMopzloyRx1SQtMsXBxd0rjxzFbCo/llCEGBB90nusyI+FCEGuicRWSjktRjvgxCF7eNwPzTQlWKMX/AKR/+K5jGaeOvxA0VQLwQUMsjAPi3R1/FCFjN0wbH2bC2Cwc7Zj8yuxgA310IVx8MZ+WbLzWI7ihCnJ+tXD9oOSAUIXjes7oQhVH/9k="} alt='profile' />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Badge>
                                            <div className='dropdownInfo'>
                                                <h4>
                                                    <span>
                                                        <b>Meraj </b>
                                                        added to his favorite list
                                                        <b> Leather belt steve madden</b>
                                                    </span>
                                                </h4>
                                                <p style={{ color: "blue", marginBottom: 0, fontSize: "12px" }}>few seconds ago</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </div>
                                <div className='container'>

                                    <button className='btn btn-primary' style={{width:"100%", padding:"5px", marginTop:"5px", fontSize:"12px", textTransform:"capitalize"}}>View all notifications</button>
                                </div>
                                {/* <MenuItem onClick={handleNotificationDropClose} sx={{ width: 300 }} >
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    My Account
                                </MenuItem>
                                <MenuItem onClick={handleNotificationDropClose}>
                                    <ListItemIcon>
                                        < IoShieldCheckmark fontSize="medium" />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleNotificationDropClose} style={{ color: "red" }}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" style={{ color: "red" }} />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem> */}
                            </Menu>

                            <div className='myAccWrapper'>
                                <Button className='myAcc d-flex align-items-center p-0' onClick={handleMyAccDropOpen}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src={"data:image/jpeg;base64,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"} alt='profile' />
                                        </span>
                                    </div>
                                    <div className='userInfo'>
                                        <h4>Meraj Ali</h4>
                                        <p className='mb-0'>@ali1223</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleMyAccDropClose}
                                    onClick={handleMyAccDropClose}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleMyAccDropClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleMyAccDropClose}>
                                        <ListItemIcon>
                                            < IoShieldCheckmark fontSize="medium" />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleMyAccDropClose} style={{ color: "red" }}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" style={{ color: "red" }} />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;