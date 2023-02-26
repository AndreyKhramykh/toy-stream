/* eslint-disable */ 
import {defineStore} from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        posts: [
            {
                id: 1,
                name: 'Andrey'
            },
            {
                id: 2,
                name: 'Dima'

            },
            {
                id: 3,
                name: 'Zhenya'

            },
            {
                id: 4,
                name: 'Vova'

            },

        ]
    }),
});
