import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import sanitizeHtml from 'sanitize-html'
import ReplyList from './ReplyList'

import './Read.css'

function Read() {
  const { no } = useParams(`/read/:no`)
  const [ document, setDocument ] = useState({})

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: `http://3.36.234.106:1208/${no}`
      })
      if (data.success) {
        setDocument(data.document)
      }
    })()
  }, [no])

  return (
    <div className="Read">
      <div className='text'>
        <div className='title'>{document.title}</div>
        <div className='author'>{document.author}</div>
        <div className='datetime'>{moment(document.datetime).format("YY-MM-DD HH:mm:ss")}</div>   
      </div>
      <div className='contents' dangerouslySetInnerHTML={{ __html: sanitizeHtml(document.contents)}}></div>   
      <ReplyList document={document} setDocument={setDocument}/>
    </div>
  )
}

export default Read
