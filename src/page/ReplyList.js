import { useState } from 'react'
import axios from 'axios'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ReplyItem from './ReplyItem'

import './ReplyList.css'


function ReplyList({ replyList }) {
  const [ reply, setReply ] =useState("")

  function onChangeCKEditor(event, editor) {
    const data = editor.getData()
    setReply(data)
  }

  async function ReplyWriteAxios() {
    const { data } = await axios({
      method:'POST',
      url: "",
      data: {}
    })
    if (data.success) {
      
    }
  }

  return (
    <div className="ReplyList">
      <div className='ReplyWrite'>
        <CKEditor editor={ ClassicEditor } className='contents' value={reply} onChange={onChangeCKEditor} />
        <button onClick={ReplyWriteAxios}>댓글쓰기</button>
      </div>
      <table className='List'>
        <tbody>
          {replyList?.map(o => {
            return (<ReplyItem replyItem={o} key={o.no}/>)
          })}
        </tbody>
      </table>

    </div>
  )
}

export default ReplyList
