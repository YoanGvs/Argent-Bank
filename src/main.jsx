import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import '../src/style/main.scss'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import User from './pages/User.jsx'
import Edit from './pages/Edit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
            <Footer />
        </Router>
    </Provider>
)
