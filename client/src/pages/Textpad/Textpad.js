import React, {useRef, useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import "./Textpad.css"

export default function Textpad(props) {
  const socket = useSelector(state => state.socket)
  const textareaRef = useRef(null)
  const [lineCount,setLineCount] = useState(1)
  const [scrollStats, setScrollStats] = useState({scrollWidth: "100vw", scrollHeigth: null})

  const rowsCount = (e,emit) => {
    let value = e.value
    let count = value.split(/\r\n|\r|\n/).length

    e.style.width = e.scrollWidth + "px"
    setScrollStats({...scrollStats,scrollWidth:e.scrollWidth*1.025 + "px"})

    if (count !== lineCount) {
      e.style.height = (count*20 + 20) + "px"
      setLineCount(count)
    }

    if(emit) {
      socketEmit()
    }
  }

  const socketEmit = () => {
    socket.emit("sendMessage", {message: textareaRef.current.value, roomId:props.match.params.textpadId})
  }

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', props.match.params.textpadId)

      socket.on("message", (message) => {
        textareaRef.current.value = message
        rowsCount(textareaRef.current, false)
      })
    }
    
  }, [socket])
  
  if(socket === null) {
    return <></>
  }

  return (
    <div className="mainTextpad">
        <div className="mainTextpadContent">
            <div className="mainTextpadLineNumbers">
                {[...Array(lineCount)].map((number,index) => {
                    return (
                    <React.Fragment key={index}>
                      <div className="mainTextpadLineNumber">
                          <span>{index+1}</span>
                          <span className="mainTextpadLineNumberSpan" style={{width: scrollStats.scrollWidth}}></span>
                      </div>
                    </React.Fragment>
                    )
                })}
            </div>
            <div className="mainTextpadContentDivTextarea">
                <textarea ref={textareaRef} onKeyUp={(e) => {rowsCount(e.target,true)}} wrap="off" spellCheck="false" className="mainTextpadContentText"></textarea>
            </div>
        </div>
    </div>
  )
}
