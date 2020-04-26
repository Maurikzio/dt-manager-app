import React,{ useState } from 'react';
import { connect } from 'react-redux';

const PostForm = ({authors, totalPosts }) => {
    const [ author, setAuthor ] = useState(authors[0])

    function updateValue(e){
        setAuthor(e.target.value)
    }

    function submitValue(e){
        alert(`${author}, ${totalPosts}`);
        e.preventDefault();
    }
    return (
        <React.Fragment>
        <form onSubmit={submitValue}>
            <label>
                Select author:
                <select value={author} onChange={updateValue}>
                    {
                        authors.map((a, i) => (
                            <option value={a} key={i}>{a}</option>
                        ))
                    }
                </select>
            </label>
            <input type='submit' value='ADD'/>
        </form>
        </React.Fragment>
    )
}

const mapSetToProps = state => ({
    authors: [...new Set(state.posts.map(post => post.author.name))],
    totalPosts: state.posts.length
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapSetToProps, mapDispatchToProps)(PostForm);