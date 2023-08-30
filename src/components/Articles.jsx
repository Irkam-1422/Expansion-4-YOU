import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import styles from '../styles/Articles.module.css'
import { ArticleBox } from './articles/ArticleBox'

export const Articles = () => {

  const {loading, request, error, clearError} = useHttp()
  const [articles, setArticles] = useState([])
  
  const getArticles = useCallback(async () => {
    try {
      const fetched = await request(`/api/article`, 'GET', null)
      console.log(fetched)
      setArticles(fetched.articles)
    } catch (e) {}

  },[request])

  useEffect( () => {
    getArticles()
  },[getArticles])

  return (
    <div className={styles.cont}>
        <h1 className={styles.h1}>Articles</h1>
        {articles.map((article,i) => <ArticleBox revert={i%2!==0} article={article}/>)}
    </div>
  )
}
