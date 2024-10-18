import './App.css'
import Stylesheet from './components/Stylesheet'

function App() {
  return (
    <>
      <Stylesheet primary={true} />
      <p className='error'> There was an error in the component. styled by default error class</p>
    </>
  )
}

export default App
