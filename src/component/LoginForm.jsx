import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../features/authUserSlice'
import { login } from '../features/authUserApi'

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const connection = (event, email, password) => {
        event.preventDefault()
        login({ email, password })
            .then((data) => {
                dispatch(setToken(data.body.token))
                navigate('/user')
            })
            .catch((err) => {
                console.error('Erreur lors de la requête:', err.message || err)
                setText('Erreur lors de la requête:', err.message || err)
            })
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={(event) => connection(event, username, password)}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p className="sign-in-error-text">{text}</p>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                    Sign In
                </button>
            </form>
        </section>
    )
}
export default LoginForm
