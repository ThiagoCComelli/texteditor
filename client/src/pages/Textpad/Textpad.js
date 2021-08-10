import React, {useState} from 'react'
import "./Textpad.css"

export default function Textpad(props) {
  const [lineCount,setLineCount] = useState(1)
  const [scrollStats, setScrollStats] = useState({scrollWidth: "100vw", scrollHeigth: null})

  const rowsCount = (e) => {
    let value = e.target.value
    let count = value.split(/\r\n|\r|\n/).length

    e.target.style.width = e.target.scrollWidth + "px"
    setScrollStats({...scrollStats,scrollWidth:e.target.scrollWidth*1.025 + "px"})

    if (count !== lineCount) {
      e.target.style.height = (count*20 + 20) + "px"
      setLineCount(count)
    }
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
                <textarea onChange={rowsCount} wrap="off" spellCheck="false" className="mainTextpadContentText"></textarea>
            </div>
        </div>
    </div>
  )
}
