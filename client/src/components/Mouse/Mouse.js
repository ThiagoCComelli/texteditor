import React,{useEffect, useRef} from 'react'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import './Mouse.css'

export default function Mouse({mouse}) {
    const mouseRef = useRef(null)
    
    useEffect(() => {
        try {
            mouseRef.current.style.left = mouse.mouseX + "px"
            mouseRef.current.style.top = mouse.mouseY + "px"
        } catch {

        }
    }, [mouse])

    return (
        <div ref={mouseRef} className="mainMouse">
            <TouchAppIcon className="mainMouseCursor"/>
        </div>
    )
}
