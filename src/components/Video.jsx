import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

class Video extends Component {
    render() { 
        return ( 
            <div class='video'>
            <div class='container'>
                <h1 align='center'>Video</h1>
                <div class='row'>
                    <div class='col-sm-4'>
                        <div class='video-card'>
                            <ReactPlayer url='https://www.youtube.com/watch?v=raXwhCMdOzE&feature=emb_logo' class='card-img-top img-fluid' controls={true}></ReactPlayer>
                        </div>
                    </div>

                    <div class='col-sm-4'>
                        <div class='video-card'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=QqrC5uLl2ik&feature=emb_title' class='card-img-top img-fluid'></ReactPlayer>
                        </div>
                    </div>

                    <div class='col-sm-4'>
                        <div class='video-card'>
                        <ReactPlayer url='https://www.youtube.com/watch?time_continue=1&v=uaewrFz7Qp8&feature=emb_title'class='card-img-top img-fluid'></ReactPlayer>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
         );
    }
}
 
export default Video;