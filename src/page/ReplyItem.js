import moment from 'moment'
import sanitizeHtml from 'sanitize-html'

import './ReplyItem.css'

function ReplyItem({ replyItem }) {
  return (
    <tr>
      <td className='replyNo'>{replyItem.no}</td>
      <td className='replyContents' dangerouslySetInnerHTML={{ __html: sanitizeHtml(replyItem.comment )}}></td>
      <td className='replyAuthor'>{replyItem.author}</td>
      <td className='replyDatetime'>{moment(replyItem.datetime).format("YY-MM-DD HH:mm:ss")}</td>
    </tr>
  )
}

export default ReplyItem
