import React from 'react';
import { connect } from 'react-redux';

import '../../styles/styles.css';

const Players = ({players, toTitulars, toAlternates}) => (
    <section style={{background: 'rgba(255, 255, 0, .2 )'}}>
        <h2>Players</h2>
        <div className='players-container'>
            {
                players.map( player => (
                    <article className='player' key={player.id}>
                        <img src={player.photo} alt={player.name} style={{width: '34px'}}/>
                        <h3>{player.name}</h3>
                        <div>
                            <button onClick={() => toTitulars(player)}>titular</button>
                            <button onClick={() => toAlternates(player)}>suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = (dispatch) => ({
    toTitulars(player){
        dispatch({ type: 'TO_TITULARS' , player })
    },
    toAlternates(player){
        dispatch({ type: 'TO_ALTERNATES', player })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);