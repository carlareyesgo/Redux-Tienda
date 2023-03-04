import { useSelector } from 'react-redux'


export const App = () => {
  const {email} = useSelector(state => state.user)
 return(
  <div className='container'>
    <h1>Hola Mundo</h1>
    <p>El email en el store es: {email}</p>
  </div>
 )
}

