import React, {useEffect,useCallback,useState,useRef} from 'react'
import styles from '../../styles/Articles.module.css'
import { useHttp } from "../../hooks/http.hook"
import { Link, useParams } from 'react-router-dom'


export const StudyInside = () => {
  const {loading, request, error, clearError} = useHttp()
  const [casestudy,setCaseStudy] = useState()
  const [article,setArticle] = useState(null)
  const header = useRef(null)
  const id = useParams().id 
  const [imgs,setImgs] = useState([])

  const getCaseStudy = useCallback(async () => {
    try {
      const fetched = await request(`/api/casestudy/${id.slice(1)}`, 'GET', null)
      setCaseStudy(fetched.casestudy)
      setArticle(fetched.article)
      fetchFileData(fetched.casestudy)
    } catch (e) {}

  },[request,id])

  const fetchFileData = async (article) => {
    const filenames = article.body.map(b =>  b.type == 'photo' ? b.text : null)
    //article.body.filter(b => b.type == 'photo').map(b => b.text)
    for (let filename of filenames) {
      console.log(filename)
      if (filename) {
        try {
          const response = await fetch(`/api/file/get/${filename}`);
          const arrayBuffer = await response.arrayBuffer(); 
          const base64String = btoa(
              new Uint8Array(arrayBuffer).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
              )
          );
          setImgs(prev => prev.concat([`data:image/png;base64,${base64String}`]))
          } catch (error) {
              console.error('Error fetching file data:', error);
          }
      } else {
        setImgs(prev => prev.concat([null]))
      }
    }
  };

  useEffect( () => {
    getCaseStudy()
  },[getCaseStudy])

  return (
    <div className={`${styles.articleOuterCont} ${styles.caseOuterCont}`} style={{background: '#000'}}>
      {casestudy && <>
      <div className={styles.caseHeader} ref={header}             
      //style={{ backgroundImage: `url(${require('../../assets/WhydoYOUneedDigitalMarketing.png')})` }}
>

            <div className={styles.headerCont}>
            <h2 className={styles.caseH2}>{casestudy.titleSmall}</h2>
            <hr className={`${styles.hr} ${styles.caseHr}`}/>
            <h1 className={styles.caseMainTitle}>{casestudy.titleBig}</h1>
            <hr className={`${styles.hr} ${styles.caseHr}`} style={{marginBottom: '2%'}}/>
            <div className={styles.hashes}>
              {casestudy.hashtags.map(h => <div className={styles.hash}>{h}</div>)}
            </div>
            </div>
      </div>
      <div className={`${styles.articleInnerCont} ${styles.caseCont}`}>
      {casestudy.body.map((elm,i) => { 
          if (elm.type == 'subtitle') return ( <><h2 className={styles.subtitle}>{elm.text}</h2><hr className={styles.hr}/></> )
          if (elm.type == 'paragraph') return ( <p>{elm.text}</p> )
          if (elm.type == 'photo') return ( <img src={imgs[i]} alt={`Uploaded File ${imgs[i]}`} style={{width: '100%'}} /> )
        })}
      </div> 
      </>}
      <div className={styles.footer} style={{backgroundImage: `url(${require('../../assets/footerImg.png')})`}}> 
              <div className={styles.LinkBtns}> 
                {article && <Link to={`/articles/:${article}`} className={styles.LinkBtn}>
                  {article.split('-').map((a,i) => i!==4 ? `${a} ` : <><br />{a} </>)}
                </Link>}
                <Link to={'/contact'} className={styles.LinkBtn}>Contact Us</Link>
                <Link to={'/articles'} className={styles.LinkBtn}>Articles</Link>
                <Link to={'/casestudies'} className={styles.LinkBtn}>Cases</Link>
                <Link to={'/'} className={styles.LinkBtn}>Home</Link>
              </div>
            </div>
    </div> 
  )
}
