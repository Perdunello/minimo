import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {getComments, setComment} from "../redux/commonReducer";
import Preloader from "./Preloader";

const Comments = () => {
    const comments = useSelector(state => state.common.comments)
    const dispatch = useDispatch()
    const ref = useRef()
    useEffect(() => {
        dispatch(getComments())
    }, [])

    const sendComment = (e) => {
        if (e.keyCode === 13) {
            dispatch(setComment(ref.current.value))
            ref.current.value = ''
        }
    }

    if (!comments) {
        return <div style={{display: 'flex', justifyContent: 'center'}}><Preloader/></div>
    }
    return <div style={{width: '85%', margin: '130px auto'}}>
        <div style={{fontSize: '14px'}}>{comments.length} COMMENTS</div>
        {comments.map(com => {
            return <div key={com.id} style={{display: 'flex', marginTop: '30px'}}>
                <img style={{width: '70px', height: '70px', objectFit: 'cover', borderRadius: '50%', padding: '10px'}}
                     src={com.photo} alt=""/>
                <div style={{paddingLeft: '20px'}}>
                    <div style={{color: 'black'}}>{com.name}</div>
                    <div style={{margin: '20px 0'}}>{com.comment}</div>
                    <div style={{marginTop: '20px',cursor:'pointer'}}>REPLY</div>
                </div>
            </div>
        })}
        <div style={{display: 'flex', marginTop: '30px'}}>
            <img src="ava_1.jpg" alt="hut"
                 style={{width: '70px', height: '70px', objectFit: 'cover', borderRadius: '50%'}}/>
            <input ref={ref} onKeyDown={sendComment} type="text" placeholder='Enter yor comment hear...'
                   style={{width: '100%', marginLeft: '30px', fontSize: '16px', border: '1px solid gray',padding:'20px'}}/>
        </div>
    </div>
}

export default Comments