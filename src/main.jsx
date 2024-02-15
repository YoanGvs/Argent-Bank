import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/style/main.scss'
import { store}  from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as router, Routes, Route } from 'react-router-dom'

 
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <App />
    </Provider>,
)
