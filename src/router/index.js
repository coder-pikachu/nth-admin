import VueRouter from 'vue-router'
import PuzzleList from '@/components/PuzzleList'
import ShowPuzzle from '@/components/ShowPuzzle'
import AddPuzzle from '@/components/AddPuzzle'
import EditPuzzle from '@/components/EditPuzzle'

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'PuzzleList',
            component: PuzzleList
        },
        {
            path: '/show-puzzle/:id',
            name: 'ShowPuzzle',
            component: ShowPuzzle
        },
        {
            path: '/add-puzzle',
            name: 'AddPuzzle',
            component: AddPuzzle
        },
        {
            path: '/edit-puzzle/:id',
            name: 'EditPuzzle',
            component: EditPuzzle
        }
    ]
})