import './addprofile.css';
import { AiOutlinePlus, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { SlEnvolope } from 'react-icons/sl';
import * as React from 'react';
import { Tabs, Tab } from '@mui/material';
import TabPanel from '../Tabpanel';

const Addprofile = () => {
    const [value, setValue] = React.useState(0);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [instalink, setInstalink] = React.useState('');
    const [youtubelink, setYoutubelink] = React.useState('');
    const [profile, setProfile] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setValue(1); // Switch to the Contact tab
    };

    const handleSubmit = () => {
        if (!name) {
            alert("Enter Name")
            setProfile(false)
        }
        else if (!email) {
            alert("Enter Email")
            setProfile(false)
        }
        else if (!number) {
            alert("Enter Number")
            setProfile(false)
        }
        else {
            setProfile(true)
        }
    };

    return (
        <>
            <div>
                {profile ? (
                    <div className='add_container'>
                        <h3 className='user_name'>{name}</h3>

                        <div className="d-flex justify-content-between m-5">
                            <div className="d-flex">
                                <i className='card-icon' style={{ backgroundColor: "#E9F9EB" }}><BsWhatsapp style={{ color: "green" }} /></i>
                                <label className='lableName'>+91 {number}</label>
                            </div>
                            <div className="d-flex ">
                                <i className='card-icon' style={{ backgroundColor: "#FFE9EC" }}><AiOutlineInstagram style={{ color: "#FF4E64" }} /></i>
                                <label className='lableName'>{instalink}</label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between m-5">
                            <div className="d-flex">
                                <i className='card-icon' style={{ backgroundColor: "#EBE6F9" }}><SlEnvolope style={{ color: "#5C33CF" }} /></i>
                                <label className='lableName'>{email}</label>
                            </div>
                            <div className="d-flex">
                                <i className='card-icon' style={{ backgroundColor: "#FFE9EC" }}><AiOutlineYoutube style={{ color: "#FF4E64" }} /></i>
                                <label className='lableName'>{youtubelink}</label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="addCon">
                        <AiOutlinePlus data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                    </div>
                )}
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <Tabs centered value={value} onChange={handleChange} aria-label="disabled tabs example">
                                <Tab label="Basic" />
                                <Tab label="Contact" />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="nameInput" className="form-label">Enter Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            id="nameInput"
                                            placeholder='Eg. John Doe'
                                            required

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="emailInput" className="form-label">Enter Email*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="emailInput"
                                            placeholder='Eg. John@xyz.com'
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="numberInput" className="form-label">Enter Phone*</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            id="numberInput"
                                            placeholder='Eg. 9875812345'
                                            required
                                        />
                                    </div>
                                </form>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={handleNext}>Next</button>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="instalinkInput" className="form-label">Instagram Link</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={instalink}
                                            onChange={(e) => setInstalink(e.target.value)}
                                            id="instalinkInput"
                                            placeholder='Eg. instagram.com/username'
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="youtubelinkInput" className="form-label">Youtube Link</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={youtubelink}
                                            onChange={(e) => setYoutubelink(e.target.value)}
                                            id="youtubelinkInput"
                                            placeholder='Eg. youtube/username'
                                            required
                                        />
                                    </div>
                                </form>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addprofile;
