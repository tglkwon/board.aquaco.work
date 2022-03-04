import { useState, useRef } from 'react'
import axios from 'axios'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function ReplyWrite({ document, setDocument }) {
  const [ id, setId ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ reply, setReply ] =useState("")
  const replyCleaner = useRef()
  
  function onChangeCKEditor(event, editor) {
    const data = editor.getData()
    setReply(data)
  }

  async function ReplyWriteAxios() {
    const { data } = await axios({
      method:'POST',
      url: `http://3.36.234.106:1208/${document.no}`,
      data: {
        comment: reply,
        author: id,
        password
      }
    })
    if (data.success) {
      setId("")
      setPassword("")
      replyCleaner.current.editor.setData("")
      setDocument({...document, reply: data.reply})
    }
  }
  return (
    <div className='ReplyWrite'>
      <input className='id' type='text' value={id} onChange={event => {setId(event.target.value)}} placeholder='Id'></input>
      <input className='password' type='password' value={password} onChange={event => {setPassword(event.target.value)}} placeholder='Password'></input>
      <CKEditor editor={ ClassicEditor } className='contents' value={reply} onChange={onChangeCKEditor} ref={replyCleaner} />
      <button onClick={ReplyWriteAxios}>댓글쓰기</button>
    </div>
  )
}

export default ReplyWrite