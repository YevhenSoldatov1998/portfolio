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
        {id: 2, name: 'SPA', sort: 2},
        {id: 3, name: 'Web-site', sort: 3},
        {id: 1, name: 'Landing Page', sort: 1},
    ],
    items: [
        {
            id: 0,
            name: 'ArtLine',
            img: 'web-artline.jpg',
            fullImg: 'web-artline.jpg',
            description: 'Website create for ArtLine company',
            addedDate: 'December 14, 2019',
            href: 'http://artlineclassic.com/',
            fullText: 'Lorem ipsum dolor pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 3
        },
        {
            id: 2,
            name: 'TodoLists App',
            img: 'spa-todolist.jpg',
            fullImg: 'spa-todolist.jpg',
            description: 'app for create tasks',
            addedDate: 'November 12, 2019',
            href: 'https://yevhensoldatov1998.github.io/typesctiptTodolist/',
            fullText: 'This app created with: React JS, Redux, REST API, NodeJS , Express, Mongoose, MongoDB, Heroku, GIT, axios',
            sort: 2
        },
        {
            id: 3,
            name: 'Social Network',
            img: 'spa-network.jpg',
            fullImg: 'spa-network.jpg',
            href: 'https://yevhensoldatov1998.github.io/soc-network/',
            description: 'In the process of development. My SPA  for communication between clients',
            addedDate: 'July 1, 2019',
            fullText: 'This app created with: React JS, Redux, REST API, NodeJS , Express, Mongoose, MongoDB, Heroku, GIT, axios </br> Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 2
        },
        {
            id: 4,
            name: 'HiHaney',
            img: 'lp-webcam.jpg',
            fullImg: 'lp-webcam.jpg',
            href: 'https://yevhensoldatov1998.github.io/LPwork/',
            description: 'Landing is made to order to attract online models',
            addedDate: 'May 2, 2019',
            fullText: 'This app created t, eu consectetur  suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 1
        },
        {
            id: 5,
            name: 'Tron Empire',
            img: 'lp-tron.jpg',
            fullImg: 'lp-tron.jpg',
            href: 'https://tronempire.net/en/',
            description: 'Landing is made to order',
            addedDate: 'July 12, 2019',
            fullText: 'This app created t, eu consectetur  suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 1
        },
        {
            id: 1,
            name: 'Articles',
            img: 'spa-articles.jpg',
            fullImg: 'spa-articles.jpg',
            description: 'This App create for Good2code company',
            addedDate: 'December 14, 2020',
            href: '#',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 2
        },
        {
            id: 6,
            name: 'Taxi Sochi',
            img: 'web-taxi.jpg',
            fullImg: 'web-taxi.jpg',
            description: 'This LP create for Sochi company',
            addedDate: 'December 14, 2018',
            href: 'https://accelerator.taxi/',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 1
        },

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
            return {...state, isShowDetails: false};
        default:
            return state
    }
}
export default worksReducer