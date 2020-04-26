import { createStore } from 'redux';

import luke from './assets/avatars/luke-skywalker.png'
import avatar from './assets/avatars/avatar.png'

const img = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/560x0.jpg?fit=scale";

const initialState = {
    players: [
        {id:1, name: 'Luke', photo: avatar},
        {id:2, name: 'Beto', photo: avatar},
        {id:3, name: 'Juan', photo: avatar},
        {id:4, name: 'Alejo', photo: avatar},
    ],
    titulars: [],
    alternates: [],
    posts:[
        {   
            id: 0,
            author: { name: 'Anakin', photo: avatar, nickname:'@dart_vader' },
            date: '21-April-2020',
            content:{text: 'WTF? Who is ray? Why she is Skywalker? Luke..?', picture: img},
            comments: {total: 150, selected: false},
            likes: { total: 100, selected: true,},
            shares: {total: 300, selected: true}
        },
        {   
            id: 1,
            author:{name: 'Ray', photo: avatar, nickname:'@ray_vader' },
            date: '21-April-2020',
            content:{text: 'WTF? Who is ray? Why she is Skywalker? Luke..?', picture: img},
            comments: {total: 150, selected: false},
            likes: { total: 100, selected: true,},
            shares: {total: 300, selected: true}
        },
        {   
            id: 2,
            author:{name: 'Han', photo: avatar, nickname:'@han_solo' },
            date: '21-April-2020',
            content:{text: 'WTF? Who is ray? Why she is Skywalker? Luke..?', picture: img},
            comments: {total: 150, selected: false},
            likes: { total: 100, selected: true,},
            shares: {total: 300, selected: true}
        },
        {   
            id: 4,
            author: { name: 'Anakin', photo: avatar, nickname:'@dart_vader' },
            date: '22-April-2020',
            content:{text: 'I am lost help', picture: img},
            comments: {total: 10, selected: false},
            likes: { total: 10, selected: true,},
            shares: {total: 30, selected: true}
        },
    ]
};

const reducerTrainer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'TO_TITULARS':
            return {
                ...state, //el estado como estaba hace un momento
                titulars: state.titulars.concat(action.player), //pero modificaremos titulares
                players: state.players.filter(player => player.id !== action.player.id) //y players
            }
        case 'TO_ALTERNATES':
            return {
                ...state, 
                alternates: state.alternates.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case 'TITULAR_TO_PLAYERS':
            return {
                ...state, 
                titulars: state.titulars.filter(titular => titular.id !== action.titular.id),
                players: state.players.concat(action.titular)
            }
        case 'ALTERNATE_TO_PLAYERS':
            return {
                ...state, 
                alternates: state.alternates.filter( alternate => alternate.id !== action.alternate.id),
                players: state.players.concat(action.alternate)
            }
        case 'TO_COMMENT':
            return {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.post.id){
                        p = Object.assign(p, p.comments.selected = !p.comments.selected)
                        return (p.comments.selected) ? Object.assign(p, p.comments.total += 1) : Object.assign(p, p.comments.total -= 1)
                    }
                    return p;
                })
            }
        case 'TO_SHARE':
            return {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.post.id){
                        p = Object.assign(p, p.shares.selected = !p.shares.selected)
                        return (p.shares.selected) ? Object.assign(p, p.shares.total += 1) : Object.assign(p, p.shares.total -= 1)
                    }
                    return p;
                })
            }
        case 'TO_LIKE':
            return {
                ...state,
                posts: state.posts.map(p => {
                    if(p.id === action.post.id){
                        p = Object.assign(p, p.likes.selected = !p.likes.selected)
                        return (p.likes.selected) ? Object.assign(p, p.likes.total += 1) : Object.assign(p, p.likes.total -= 1)
                    }
                    return p;
                })
            }
    }
    return state;
};

export default createStore(reducerTrainer)