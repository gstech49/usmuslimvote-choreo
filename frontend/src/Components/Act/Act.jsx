import { useEffect, useState } from "react";
import "./Act.css";
import axios from "axios";

const Act = () => {
  const [formData, setFormData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  // const [refresh, setRefresh] = useState(false);

  const endpoint = `${import.meta.env.VITE_API_URL}/forms/`;

  const fetchFormData = async () => {
    //console.log('fetching...')
    const response = await axios.get(endpoint);
    //console.log(response)
    const { data } = response;
    setFormData(data);
    //console.log(data)
    return data;
  };

  // const postForm = async () => {
  //   const firstName = "YusraTest";
  //   const middleName = "Mishal";
  //   const lastName = "Ghouri";
  //   const dob = "2004-11-17";
  //   const address = "phase2 DHA Karachi";
  //   const email = "ysratest@mymail.com";
  //   const cellPhoneNumber = "92123456789";
  //   const body = {
  //     firstName,
  //     middleName,
  //     lastName,
  //     dob,
  //     address,
  //     email,
  //     cellPhoneNumber,
  //   };
  //   try {
  //     const response = await axios.post(endpoint, body);
  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //     console.log(error);
  //   }
  // };

  const postForm = async () => {
    const body = {
      firstName,
      middleName,
      lastName,
      dob,
      address,
      email,
      cellPhoneNumber,
    };
    try {
      const response = await axios.post(endpoint, body);
      console.log(response.data);
      // Update state with new data if needed (optional)
      // setFormData((prevState) => [...prevState, response.data]);
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDob("");
      setAddress("");
      setEmail("");
      setCellPhoneNumber("");
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      console.log(error);
    }
  };

  const handleFormData = async (e) => {
    e.preventDefault(); //e is added just now
    const newFormData = await postForm();
    if (newFormData) {
      //setRefresh((prevState) => !prevState);
      setFormData((prevState) => [...prevState, newFormData]);
    }
    //....
  };

  useEffect(() => {
    fetchFormData();
  }, []);
  //[refresh]
  // const handleNavigateBack = () => {
  //   window.location.href = "http://localhost:5173/"; // Replace "/" with the actual URL of the previous page
  // };
  return (
    <div className="Act">
      {/* <button className="btn" onClick={handleNavigateBack}>
        Go Back
      </button> */}
      <h1>Our Act</h1>
      <h2>Please fill out the form below to get registered</h2>

      {/* <a href="https://www.usa.gov/register-to-vote">
        <button className="btn">Go and Register</button>
      </a> */}

      {/* A registration form starts here */}

      <form onSubmit={handleFormData}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="middleName">Middle Name:</label>
        <input
          type="text"
          id="middleName"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          placeholder="yyyy-mm-dd"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <label htmlFor="address">Address:</label>  
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>  
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="cellPhoneNumber">Cell Phone Number:</label>
        <input
          type="tel"
          id="cellPhoneNumber"
          value={cellPhoneNumber}
          onChange={(e) => setCellPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Register to Vote</button>
      </form>

      {/* A registrtion form ends here*/}

      <p>The list of registered muslim voters:</p>
      <ul>
        {formData.map((el) => (
          <li key={el.id}>{el.firstName}</li>
        ))}
      </ul>
      {/* <button onClick={handleFormData}>Register to Vote</button> */}
    </div>
  );
};

export default Act;
