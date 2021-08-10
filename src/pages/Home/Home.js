import React, {useState} from 'react'
import "./Home.css"


const Test = () => {
    return (
        <span>.</span>
    )
}

export default function Home() {
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
    <div className="mainHome">
        <div className="mainHomeContent">
            <div className="mainHomeLineNumbers">
                {[...Array(lineCount)].map((number,index) => {
                    return (
                    <>
                    <div className="mainHomeLineNumber">
                        <span>{index+1}</span>
                        <span className="mainHomeLineNumberSpan" style={{width: scrollStats.scrollWidth}}></span>
                    </div>
                    </>
                    )
                })}
            </div>
            <div className="mainHomeContentDivTextarea">
                <textarea id="test" onChange={rowsCount} wrap="off" spellCheck="false" className="mainHomeContentText"></textarea>
            </div>
        </div>
    </div>
  )
}
