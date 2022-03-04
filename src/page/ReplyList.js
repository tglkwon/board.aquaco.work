import ReplyItem from './ReplyItem'
import ReplyWrite from './ReplyWrite'

import './ReplyList.css'

function ReplyList({ document, setDocument }) {
  return (
    <div className="ReplyList">
      <ReplyWrite document={document} setDocument={setDocument}/>
      <table className='List'>
        <tbody>
          {document.reply?.map(o => {
            return (<ReplyItem replyItem={o} key={o.no}/>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ReplyList