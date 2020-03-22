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
            fullImg: 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
            description: 'This LP create for Lorem ipsum antium, quis.',
            addedDate: 'September 14, 2018',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 1
        },
        {
            id: 2,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            addedDate: 'September 14, 2018',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            sort: 2
        },
        {
            id: 3,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            fullText: 'Sed vitae urna tellus. Vivamus eu bibendum ex. Nullam laoreet, ex in ullamcorper porttitor, mauris tortor eleifend dolor, a posuere urna est sed erat. Mauris eu congue leo. Nullam est mauris, iaculis et odio vel, faucibus volutpat leo. In metus leo, porttitor sed lectus sit amet, hendrerit placerat diam. Mauris mi dolor, tempus at vulputate vitae, condimentum ut diam. Nulla facilisi. Nam mollis, erat nec laoreet convallis, quam eros sollicitudin libero, in pellentesque neque purus nec nisl.Sed vitae urna tellus. Vivamus eu bibendum ex. Nullam laoreet, ex in ullamcorper porttitor, mauris tortor eleifend dolor, a posuere urna est sed erat. Mauris eu congue leo. Nullam est mauris, iaculis et odio vel, faucibus volutpat leo. In metus leo, porttitor sed lectus sit amet, hendrerit placerat diam. Mauris mi dolor, tempus at vulputate vitae, condimentum ut diam. Nulla facilisi. Nam mollis, erat nec laoreet convallis, quam eros sollicitudin libero, in pellentesque neque purus nec nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
            sort: 3
        },
        {
            id: 4,
            name: 'LP for company',
            img: 'https://www.websitedesignbarnsley.com/wp-content/uploads/2018/09/online-course-landing-page-free-img-400x400.jpg',
            description: 'This LP create for Lorem ipsum antium, quis.',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
            sort: 1
        },
        {
            id: 5,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            fullText: 'Morbi mollis ante turpis. Maecenas ut magna consequat, suscipit velit at, consectetur quam. Suspendisse maximus tempor felis, at ornare sapien pulvinar at. In eros purus, bibendum vitae egestas et, dignissim vitae mauris. Fusce egestas tempus auctor. Vivamus at lectus quis nulla vulputate efficitur. Nam luctus rutrum erat ac lobortis. Duis convallis libero ac tellus fermentum venenatis. Donec molestie, dui vel sagittis pharetra, quam erat accumsan dolor, non egestas libero orci eget odio. Maecenas in semper felis. Maecenas maximus euismod felis, posuere tincidunt lorem auctor eget. Morbi quis elit eu nisi malesuada commodo vel eget nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae tortor vel sem eleifend mattis et sit amet elit. Donec tempor lacinia dolor, ac pulvinar odio viverra non.Morbi mollis ante turpis. Maecenas ut magna consequat, suscipit velit at, consectetur quam. Suspendisse maximus tempor felis, at ornare sapien pulvinar at. In eros purus, bibendum vitae egestas et, dignissim vitae mauris. Fusce egestas tempus auctor. Vivamus at lectus quis nulla vulputate efficitur. Nam luctus rutrum erat ac lobortis. Duis convallis libero ac tellus fermentum venenatis. Donec molestie, dui vel sagittis pharetra, quam erat accumsan dolor, non egestas libero orci eget odio. Maecenas in semper felis. Maecenas maximus euismod felis, posuere tincidunt lorem auctor eget. Morbi quis elit eu nisi malesuada commodo vel eget nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae tortor vel sem eleifend mattis et sit amet elit. Donec tempor lacinia dolor, ac pulvinar odio viverra non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
            sort: 2
        },
        {
            id: 6,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
            sort: 3
        },
        {
            id: 7,
            name: 'React APP',
            img: 'https://sisir.me/wp-content/uploads/2018/10/React.js-400x400.jpg',
            description: 'This ReactAPP create for Lorem ipsum antium, quis.',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
            sort: 2
        },
        {
            id: 8,
            name: 'Web site',
            img: 'https://www.viacon.in/wp-content/uploads/2019/07/snovio-400x400-new-1.jpg',
            description: 'This Website create for Lorem ipsum antium, quis.',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.',
            addedDate: 'September 14, 2018',
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
            return {...state, isShowDetails: false};
        default:
            return state
    }
}
export default worksReducer