import React, { useContext, useEffect, useState } from 'react';
import './MessageSender.css'
import firebase from 'firebase'

// icons
import { Avatar } from '@material-ui/core'
// import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'
import { Button } from '@material-ui/core';

import {

    Card,
    CardHeader,
    CardMedia,
    CardContent,
    // CardActions,
    // Collapse,
    // IconButton,
    Typography,
    // red,
    Grid,
    Box
}
    from '@material-ui/core';

// context api
// import { useStateValue } from '../../../state/Provider'
import { AuthContext } from '../../Auth/Auth';


// database
import firebase2 from '../../firebase'
const db = firebase2.firestore();

const MessageSender = () => {
    // console.log(useStateValue())
    // const [{ currentUser }, dispatch] = useStateValue();
    const { currentUser } = useContext(AuthContext);

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // send data to database
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: currentUser.photoURL,
            username: currentUser.displayName,
            image: imageUrl
        })

        // clear form
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="messageSender">
            <Grid container spacing={4} >
                <Grid item sm={0} md={2} ></Grid>

                <Grid item sm={12} md={8} >
                    <Card>
                        <div className="messageSenderTop">
                            <Avatar src={currentUser.photoURL} className="postAvatar">
                                {currentUser.displayName.charAt(0)}
                            </Avatar>
                            <form>
                                <input
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    className="messageSenderInput"
                                    // placeholder={`Post an requirement or opportunity, ${currentUser.displayName}?`}
                                    placeholder={`Post a requirement or an opportunity`}
                                />
                                <input
                                    value={imageUrl}
                                    onChange={e => setImageUrl(e.target.value)}
                                    className="messageImageInput"
                                    placeholder={"Public Image URL (Optional)"} />
                                {/* <button onClick={handleSubmit} type="submit">Hidden submit</button> */}
                            </form>
                            <Button variant="contained" onClick={handleSubmit} type="submit" color="blue" > Submit</Button>
                            {/* <Button sx = {{ backgroundcolor : "blue"}}>submit</Button> */}

                        </div>
                    </Card>
                </Grid>

                {/* <Grid item sm={0} md = {2} ></Grid> */}


            </Grid>
        </div>
        // <div className="messageSender">
        //     <div className="messageSenderTop">
        //         <Avatar src={user.photoURL} />
        //         <form>
        //             <input 
        //                 value={input} 
        //                 onChange={e => setInput(e.target.value)} 
        //                 className="messageSenderInput" 
        //                 placeholder={`Share your climate experience, ${user.displayName}?`} 
        //             />
        //             <input
        //                 value={imageUrl}
        //                 onChange={e => setImageUrl(e.target.value)} 
        //                 placeholder={"Image URL (Optional)"} />
        //             {/* <button onClick={handleSubmit} type="submit">Hidden submit</button> */}
        //         </form>
        //         <Button variant="contained" onClick={handleSubmit} type="submit" color="blue" > Submit</Button>
        //         {/* <Button sx = {{ backgroundcolor : "blue"}}>submit</Button> */}

        //     </div>

        //     {/* <div className="messageSenderBottom">
        //         <div className="messageSenderOption">
        //             <Videocam style={{color: 'red'}} />
        //             <h3>Live Video</h3>
        //         </div>

        //         <div className="messageSenderOption">
        //             <PhotoLibrary style={{color: 'green'}} />
        //             <h3>Photo/Video</h3>
        //         </div>

        //         <div className="messageSenderOption">
        //             <InsertEmoticon style={{color: 'orange'}} />
        //             <h3>Feeling/Activity</h3>
        //         </div>
        //     </div> */}
        // </div>
    )
}

export default MessageSender;
