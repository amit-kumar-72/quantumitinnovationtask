import { useState } from "react";
import axios from "axios";
import Card from "../component/card";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
   
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
   

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signin`, 
        {
          email: formData.email, 
          password: formData.password,
        }
      );

     
    //   alert("Login Successful!"); 
    //   console.log(response.data)
      toast.success("UserLogin Successfully!")
      localStorage.setItem("token",response.data.token)
      navigate("/user")
      return response.data;
      
    } catch (err) {
      
    //   console.error(err.response?.data?.message || "Login Failed");
    //   alert(err.response?.data?.message || "Login Failed"); 
    toast.error("UserLogin Failed")
      return null;
    }
  };

  return (
    <div>
      <Card
        login={true}
        handleSubmit={handleLogin}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Login;