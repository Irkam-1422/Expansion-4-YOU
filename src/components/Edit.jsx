import React, {useState, useRef, useEffect, useContext} from 'react'
import styles from '../styles/Edit.module.css'
import { Header } from './main/Header'
import { Overview } from './main/Overview'
import { Welcoming } from './main/Welcoming'
import { About as MainAbout } from './main/About'
import { Services as MainServices } from './main/Services'
import { Feedback } from './main/Feedback'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContex';import { useHttp } from '../hooks/http.hook'


const home = [
    {page: <Header/>, value: 'Header'},
    {page: <Overview/>, value: 'Warning'},
    {page: <Welcoming/>, value: 'Welcoming'},
    {page: <MainAbout/>, value: 'About'},
    {page: <MainServices/>, value: 'Services'},
    {page: <Feedback/>, value: 'Feedback'}
]

export const Edit = ({returnActivity,returnGivenPage,returnPage}) => {

  const {loading, request, error, clearError} = useHttp()  
  const auth = useContext(AuthContext)  
  const navigate = useNavigate()
  const [pages,setPages] = useState([])  


  useEffect(() => {

    returnActivity('')

    const getPages = async () => {
      const data = await request('/api/content/', 'GET', null)
      setPages(data.pages)
    }
    getPages()

  },[])

  const handleLogOut = () => {
    navigate('/')
    setTimeout(() => {
      auth.logout()
    },100)
  }

  const handlePageBtnClick = (p) => {
    navigate('/edit-content')
    returnActivity('Edit Content')
    returnPage(p) 
    returnGivenPage(p)
  }

  return (
    <>
    <div className={styles.cont}>
      <div className={styles.editContentCont}>
        <Link to={`/edit-content`} className={styles.btn} onClick={() => returnActivity('Edit Content')}>Edit Content</Link>
        <div className={styles.editContentBtnsCont}>
          {pages.map(p => p.parent=='services' ? '' 
          : <div className={styles.serviceBtn} onClick={() => handlePageBtnClick(p.page)}>{p.page}</div> )}  
        </div>        
      </div> 
        <div className={styles.btnsCont}>
            <Link to={'/articles'} className={styles.btn} onClick={() => returnActivity('Add Article')}>+ Add Article</Link>
            <Link to={'/casestudies'} className={styles.btn} onClick={() => returnActivity('Add Case Study')}>+ Add Case Study</Link> 
            <Link to={'/'} className={styles.btn} onClick={handleLogOut} style={{color: '#dedede'}}>Log Out</Link>
        </div>
    </div>
    </>
  )
}
