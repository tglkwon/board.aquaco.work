import moment from 'moment'

import './ReplyItem.css'


function ReplyItem({ replyItem }) {
  return (
    <tr>
      <td className='replyNo'>{replyItem.no}</td>
      <td className='replyContents'>{replyItem.contens}</td>
      <td className='replyAuthor'>{replyItem.author}</td>
      <td className='replyDatetime'>{moment(replyItem.datetime).format("YY-MM-DD HH:mm:ss")}</td>
    </tr>
  )
}

export default ReplyItem
