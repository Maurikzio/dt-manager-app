import React from 'react';
import { connect } from 'react-redux';

const Posts = ({ posts, toComment, toShare, toLike }) => {
    return(
        <React.Fragment>   
        {
            posts.map(post => (
                <div key={post.id} style={{width: '600px', backgroundColor: 'orange', display:'flex', margin: '10px auto'}}>
                    <div>
                        <img src={post.author.photo}/>
                    </div>
                    <section>
                        <div style={{display:'flex', background:'pink'}}>
                            <p>{post.author.name}</p>
                            <p>{post.author.nickname}</p>
                            <p>{post.date}</p>
                        </div>
                        <div style={{border: '1px solid white'}}>
                            <p>{post.content.text}</p>
                            <img src={post.content.picture} />
                        </div>
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <div>
                                <button onClick={() => toComment(post)}>Comment</button>
                                <span>{post.comments.total}</span>
                            </div>
                            <div>
                                <button onClick={() => toShare(post)}>Share</button>
                                <span>{post.shares.total}</span>
                            </div>
                            <div>
                                <button onClick={() => toLike(post)}>like</button>
                                <span>{post.likes.total}</span>
                            </div>
                        </div>
                    </section>
                </div>
            ))
        }
        </React.Fragment>
    )
}
const mapSetToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch =>({
    toComment(post){
        dispatch({ type: 'TO_COMMENT', post })
    },
    toShare(post){
        dispatch({ type: 'TO_SHARE', post })
    },
    toLike(post){
        dispatch({ type: 'TO_LIKE', post })
    }
});

export default connect(mapSetToProps, mapDispatchToProps)(Posts);