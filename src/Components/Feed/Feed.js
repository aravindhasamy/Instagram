import React,{useState} from 'react';
import Modal from 'react-modal';
import afterLike from "../../assets/images/after_like.png";
import beforeLike from "../../assets/images/before_like.png";
import commentIcon from "../../assets/images/comment.png";
import shareIcon from "../../assets/images/share.png";
import saveIcon from "../../assets/images/save.png";
import styles from "./Feed.module.css";

const Feed = (props) =>{

  
    const [comment, setComment] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [like, setLike] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    console.log("comment", comment)

    const commentHandler = () =>{
        setComment([...comment,commentText])
        setCommentText("")
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:"400px",
          width:"400px"
        },
      };

      const images = [
          {url:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"},
          {url:"https://www.jquery-az.com/html/images/banana.jpg"},
          {url:"https://cdn.pixabay.com/photo/2021/04/12/08/10/coffee-6171744_960_720.jpg"},
          {url:"https://www.gstatic.com/webp/gallery/1.jpg"},
          {url:"https://www.gstatic.com/webp/gallery/4.jpg"}
      ]

    return(
        <div className={styles.feedContainer}>
            <div className={styles.feedInnerContainer}>
                <div style={{height:"50px", width:"50px", borderRadius:"100px",
                //  backgroundColor:"lightgray"
                 }}>
               <img style={{height:"50px", width:"50px", borderRadius:"100px",}} src={props.caption.image_url}/>

                </div>
                <div style={{paddingLeft:"10px", display:"flex", fontWeight:"bold"}}>
                <p>{props.caption.user.username}</p>
                </div>
            </div>
            <div className={styles.feedBodyOne}>
            <img  style={{height:"100%", width:"100%"}} src={props.caption.image_url}/>
            </div> 

            <div className={styles.feedBodyTwo}>
                {/* <p>{props.caption.caption.text}</p> */}
                <div className={styles.feedBodyThree}>
                    <div className={styles.feedBodyFour}>
                    <div style={{
                        marginLeft:"20px",
                         cursor:"pointer"
                         }} onClick={()=>{setLike(!like)}}>
                    {/* <p>Like</p> */}
                    {!like ? <img src={beforeLike} style={{height:"25px", width:"25px"}} />:
                    <img src={afterLike} style={{height:"25px", width:"25px"}}/>}
                    </div>
                    <div className={styles.feedBodyFive}>
                        {/* <p style={{marginRight:"5px"}}>{comment.length}</p> */}
                        <img src={commentIcon} style={{height:"25px", width:"25px"}}/>
                    </div>
                    <div className={styles.feedBodySix}>
                    <img src={shareIcon} style={{height:"25px", width:"25px"}}/>
                    </div>
                    </div>

                    <div className={styles.feedBodySeven}>
                    <img src={saveIcon} style={{height:"25px", width:"25px"}}/>

                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", height:"auto",
                //  backgroundColor:"blue"
                 }}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{marginLeft:"20px"}}>
                        <p style={{fontWeight:"bold"}}>{props.caption.user.username}</p>
                    </div>
                    <div style={{marginLeft:"10px"}}>
                        <p>{props.caption.caption.text}</p>
                    </div>
                    </div>

                    <div className={styles.feedBodyNine} >
                        {comment.length === 1 ? 
                        <p style={{ cursor:"pointer"}} onClick={()=>{setIsModalOpen(true)}}>View {comment.length} comment</p> :
                        comment.length === 0 ?
                        <p style={{ cursor:"pointer"}} onClick={()=>{setIsModalOpen(true)}}>View {comment.length} comment</p>:
                        <p style={{ cursor:"pointer"}} onClick={()=>{setIsModalOpen(true)}}>View all {comment.length} comments</p>
                        
                          
                        }
                    </div>

                    <div className={styles.commentBodyOne}>
                   <div style={{display:"flex", flexDirection:"row"}}>
                   <input name= "comment" value={commentText}
                    onChange={(e)=>{setCommentText(e.target.value)}} 
                    className={styles.commentBox}
                    placeholder={"Add a Comment..."}/>
                   </div>
                   <div style={{
                       marginLeft:"10px", 
                   marginRight:"10px", 
                   display:"flex"}}>
                    <input type={"button"}
                     className={styles.commentButton}
                         onClick={commentHandler} 
                         value={"Post"} disabled={commentText === "" ? true : false} />
                   </div>
                </div>

                </div>

                
            </div>
                
                <Modal 
                isOpen={isModalOpen}
                style={customStyles}
                >
                    <div style={{display:"flex", flexDirection:"column", overflow:"hidden"}}>
                    <div>
                    <h2>Comments</h2>
                    </div>

                    <div style={{height:"300px"}}>
                        {
                            comment.length !== 0 ?
                            <div>
                            { comment.map((item)=>{
                                return(
                                    <div style={{borderBottom:"1px solid lightgray"}}>
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                            </div>
                            :
                            <div className={styles.modalStyle}>
                                <h3>No Comments...</h3>
                            </div>
                        }
                        
                        
                    </div>

                    <div>
                    <input type={"button"} value={"Close"} onClick={()=>{setIsModalOpen(false)}} />
                    </div>
                    </div>
                </Modal>
        </div>
    )
}

export default Feed;