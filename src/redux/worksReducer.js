const SORT = 'SORT';
const SHOW_DETAIL = 'SHOW_DETAIL';
const HIDE_DETAIL = 'HIDE_DETAIL';

export const sortItems = (currentSort) => ({type: SORT, currentSort});
export const showDetail = (item) => ({type: SHOW_DETAIL, item});
export const hideDetail = () => ({type: HIDE_DETAIL});

let initialState = {
    title: 'Works',
    categories: [
        {id: 0, name: 'All', sort: 'All'},
        {id: 1, name: 'Landing Page', sort: 1},
        {id: 2, name: 'SPA', sort: 2},
        {id: 3, name: 'Web-site', sort: 3},
    ],
    items: [
        {
            id: 1,
            name: 'LP for company',
            img: 'https://www.websitedesignbarnsley.com/wp-content/uploads/2018/09/online-course-landing-page-free-img-400x400.jpg',
            description: 'This LP create for Lorem ipsum antium, quis.',
            sort: 1
        },
        {
            id: 2,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            sort: 2
        },
        {
            id: 3,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            sort: 3
        },
        {
            id: 4,
            name: 'LP for company',
            img: 'https://www.websitedesignbarnsley.com/wp-content/uploads/2018/09/online-course-landing-page-free-img-400x400.jpg',
            description: 'This LP create for Lorem ipsum antium, quis.',
            sort: 1
        },
        {
            id: 5,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            sort: 2
        },
        {
            id: 6,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            sort: 3
        },
        {
            id: 7,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            sort: 2
        },
        {
            id: 8,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            sort: 3
        }
    ],
    itemsDetail: {
        id: null,
        name: null,
        img: null,
        description: null,
        sort: null
    },
    currentSort: 'All',
    isShowDetails: false,
};
const worksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT:
            return {...state, currentSort: action.currentSort};
        case SHOW_DETAIL:
            return {...state, itemsDetail: action.item, isShowDetails: true};
        case HIDE_DETAIL:
            return {...state, isShowDetails: false}
        default:
            return state
    }
}
export default worksReducer