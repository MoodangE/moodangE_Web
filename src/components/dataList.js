import {atom} from 'recoil'

export const busState = atom({
    key: 'busState',
    default: {},
});

export const congestionState = atom({
    key: 'congestionState',
    default: {},
});