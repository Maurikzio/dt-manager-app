import React from 'react';
import { connect } from 'react-redux';

const Titulars = ({titulars, titularToPlayers}) => {
    return (
        <section style={{background: 'rgba(0, 255, 0, .2)'}}>
            <h2>Titular players</h2>
            <div className='field'>
                {
                    titulars.map( titular => (
                        <article className='titular' key={titular.id}>
                            <div>
                                <img src={titular.photo} alt={titular.photo}/>
                                <button onClick={() => titularToPlayers(titular)}>X</button>
                            </div>
                            <p>{titular.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
        )
};

const mapStateToProps = state => ({
    titulars: state.titulars
});

const mapDispatchToProps = dispatch => ({
    titularToPlayers(titular){
        dispatch({ type: 'TITULAR_TO_PLAYERS', titular})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulars);