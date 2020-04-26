import React from 'react';
import { connect } from 'react-redux';

const Alternates = ({alternates, alternateToPlayers}) => {
    return (
        <section style={{background: 'rgba(255, 0, 0, .2)'}}>
            <h2>Alternate players</h2>
            <div className='field'>
                {
                    alternates.map( alternate => (
                        <article className='titular' key={alternate.id}>
                            <div>
                                <img src={alternate.photo} alt={alternate.photo}/>
                                <button onClick={() => alternateToPlayers(alternate)}>X</button>
                            </div>
                            <p>{alternate.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
};

const mapStateToProps = state => ({
    alternates: state.alternates
});

const mapDispatchToProps = dispatch => ({
    alternateToPlayers(alternate){
        dispatch({type: 'ALTERNATE_TO_PLAYERS', alternate})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternates);