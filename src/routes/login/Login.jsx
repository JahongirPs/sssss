import './Login.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { AiOutlineLoading } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { instance } from '../../api/axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const form = useRef()
	const navigate= useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isPasswordOpen, setIsPasswordOpen] = useState(false)
	const dispatch= useDispatch()

	function loginUser(e) {
		e.preventDefault()

		setIsLoading(true)
		instance
			.post('/auth/login', {
				username,
				password,
			})
			.then(response => {
				if (response.data.token) {
					setIsLoading(false)
					dispatch({type:"@LOGIN__ADMIN" , payload:response.data})
					navigate('/admin')
				}
			})
			.catch(err => {
				setIsLoading(false)
			})
		setPassword('')
		setUsername('')
	}

	return (
		<div className='login'>
			<div className='login-main'>
				<form ref={form} onSubmit={loginUser}>
					<h1>Login</h1>
					<input
						autoComplete='username'
						type='text'
						placeholder='Your username'
						value={username}
						required
						onChange={e => setUsername(e.target.value)}
					/>
					<div className='password-wrapper'>
						<input
							autoComplete='current-password'
							type={isPasswordOpen ? 'text' : 'password'}
							placeholder='Your password'
							value={password}
							required
							minLength={8}
							onChange={e => setPassword(e.target.value)}
						/>
						{isPasswordOpen ? (
							<FiEyeOff onClick={() => setIsPasswordOpen(false)} />
						) : (
							<FiEye onClick={() => setIsPasswordOpen(true)} />
						)}
					</div>
					<button disabled={isLoading ? true : false}>
						{' '}
						{isLoading && <AiOutlineLoading className='loading-icon' />}{' '}
						{isLoading ? '' : 'Login'}
					</button>
				</form>
			</div>
			<div className='login-image'>
				<img
					src='https://scalebranding.com/wp-content/uploads/2021/07/Cyber-Security-Logo-01.jpg'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Login
