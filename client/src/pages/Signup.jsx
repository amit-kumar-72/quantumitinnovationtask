import { useState } from "react";
import axios from "axios"; // ✅ Import axios
import Card from "../component/card";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup`,
        formData 
      );

     
    //   notification("Signup Successful!");
    //   console.log(response.data);
    toast.success("User Signup Successful!")
      navigate("/login"); 
      return response.data;
    } catch (err) {
      
    //   notification(err.response?.data?.message || "Signup Failed"); 

    //   console.error("Signup error:", err); 
      toast.error("User Signup Failed")
      return null;
    }
  };

  return (
    <div>
      <Card
        login={false}
        handleSubmit={handleSignup}
        handleChange={handleChange}
       
      />
    </div>
  );
}

export default Signup;