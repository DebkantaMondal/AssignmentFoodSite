import React from 'react';
import "./Form.css";
import useForm from "./useForm";
import validate from "../ValidateInfo";
import Footer from './Footer';

function Signup() {
    const { handleChange, inputs, handleSubmit, errors } = useForm(validate);
    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form__row">

                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name (in english)*"
                            value={inputs.firstname}
                            onChange={handleChange}
                            className={`${errors.firstname} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        />

                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name (in english)*"
                            value={inputs.lastname}
                            onChange={handleChange}
                            className={`${errors.lastname} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        />

                        <input
                            type="date"
                            name="dob"
                            placeholder="Birth Date Format : DD/MM/YYYY *"
                            value={inputs.dob}
                            onChange={handleChange}
                            className={`${errors.dob} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        />
                        <select
                            type="text"
                            name="gender"
                            placeholder="Select Gender*"
                            value={inputs.gender}
                            onChange={handleChange}
                            className={`${errors.gender} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Trans-Gender">Trans-Gender</option>
                            <option value="Others">Others</option>
                        </select>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={inputs.email}
                            onChange={handleChange}
                            className={`${errors.email} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Type Full Address*"
                            value={inputs.address}
                            onChange={handleChange}
                            className={`${errors.email} ? "error" : "success"`}
                            autoComplete="off"
                        />
                        <input
                            type="number"
                            name="phone"
                            placeholder="+91 9772101320"
                            value={inputs.phone}
                            onChange={handleChange}
                            className={`${errors.phone} ? "error" : "success"`}
                            onBlur={handleSubmit}
                            autoComplete="off"
                        />


                        <button>SUBMIT</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Signup;