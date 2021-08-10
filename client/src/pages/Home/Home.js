import React, {useRef} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { putNotification } from '../../actions';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./Home.css"

export default function Home() {
    const textpadValue = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()

    const goToTextpad = () => {
        if (textpadValue.current.value !== "") {
            dispatch(putNotification({title: `Textpad "${textpadValue.current.value}" encontrado!`, description: "Entrada com sucesso na seção"}))
            history.push(`/textpad/${textpadValue.current.value}`)
        } else {
            dispatch(putNotification({title: `Nome vazio!`, description: "Coloque um nome valido"}))
        }
    }

    return (
        <div className="mainHome">
            <div className="mainHomeTitle">
                <h1>Textpad/</h1>
                <span>Share with  your friends ideas and notes</span>
            </div>
            <div className="mainHomeFind">
                <input ref={textpadValue} placeholder="Leave blank for a new Textpad..."/>
                <ArrowForwardIcon onClick={goToTextpad} className="mainHomeFindButton" />
            </div>
        </div>
    )
}
