import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = ({setToken,isLoggedIn,setIsLoggedIn}) => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const navigate = useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const res = await axios.post(url, data);
			console.log(res);

			// localStorage.setItem("token", JSON.stringify(res.data));
			window.alert("Login successfull !")
			console.log("SUccessfully Login")

			console.log(res.data)
			// console.log(res.data["X-auth-token"]);
			setToken(res.data["X-auth-token"])

			localStorage.setItem('Token', res.data["X-auth-token"]);

			setIsLoggedIn(true);
			navigate("/start");

			} catch (error) {
			if (
				error
			) {
				console.log(error)
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;