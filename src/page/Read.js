import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import sanitizeHtml from 'sanitize-html'
import ReplyList from './ReplyList'

import './Read.css'

function Read() {
  const { no } = useParams(`/read/:no`)
  const [ list, setList ] = useState({})

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        method: 'GET',
        url: `http://3.36.234.106:1208/${no}`
      })
      if (data.success) {
        setList(data.document)
      }
    })()
  }, [no])

  return (
    <div className="Read">
      <div className='text'>
        <div className='title'>{list.title}</div>
        <div className='author'>{list.author}</div>
        <div className='datetime'>{moment(list.datetime).format("YY-MM-DD HH:mm:ss")}</div>   
      </div>
      <div className='contents' dangerouslySetInnerHTML={{ __html: sanitizeHtml(list.contents)}}></div>   
      <ReplyList replyList={list.reply} key={list.reply?.no}/>
    </div>
  )
}

export default Read
