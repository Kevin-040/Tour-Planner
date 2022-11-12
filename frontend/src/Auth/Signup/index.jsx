import { useState,useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { CToaster } from '@coreui/bootstrap-react'
import { CToast } from '@coreui/bootstrap-react'
import { CToastHeader } from '@coreui/bootstrap-react'
import { CToastBody,  } from '@coreui/bootstrap-react'

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [statusFlag, setStatusFlag] = useState(0);

	const [toast, addToast] = useState(0)
	const toaster = useRef()
	const exampleToast = (
		<CToast autohide={false} visible={true}>
				<CToastHeader closeButton>
					<svg
						className="rounded me-2"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
						role="img"
					>
						<rect width="100%" height="100%" fill="#007aff"></rect>
					</svg>
					<strong className="me-auto">Alert</strong>
				</CToastHeader>
				<CToastBody>SignUp Successfully.</CToastBody>
			</CToast>
	)

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			
			// setTimeout(() => {  console.log("Loading"); }, 5000);
			navigate("/");
			setStatusFlag(1);
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
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
						<button type="submit" className={styles.green_btn} onClick={() => addToast(exampleToast)}>
							Sign Up
						</button>
						{/* <button onClick={() => addToast(exampleToast)}>Send a toast</button> */}
						<CToaster ref={toaster} push={toast} placement="bottom-end" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;