const SET_PHOTOS_SLIDER = 'SET_PHOTOS_SLIDER'
const SET_LIFESTYLE_DATA = 'SET_LIFESTYLE_DATA'
const SET_COMMENTS = 'GET_COMMENTS'
const SET_COMMENT = 'SET_COMMENT'
const initialState = {
    photosSlider: null,
    lifestyleData: [],
    comments: [],
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS_SLIDER:
            return {
                ...state,
                photosSlider: action.payload,
            }
        case SET_LIFESTYLE_DATA:
            return {
                ...state,
                lifestyleData: action.payload,
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        case SET_COMMENT:
            return {
                ...state,
                comments: [...state.comments,
                    {
                        id: 5,
                        name: 'John Doe',
                        photo: 'ava_1.jpg',
                        comment: action.payload,
                    }
                ]
            }
        default:
            return state
    }
}
const setPhotosSlider = (payload) => {
    return {type: SET_PHOTOS_SLIDER, payload}
}
const setLifestyleData = (payload) => {
    return {type: SET_LIFESTYLE_DATA, payload}
}
const setComments = (payload) => {
    return {type: SET_COMMENTS, payload}
}
export const setComment = (payload) => {
    return {type: SET_COMMENT, payload}
}
export const getPhotosSlider = () => {
    return (dispatch) => {
        //get data from API
        const response = [
            {id: 1, url: 'slide_1.jpg', title: 'slide_1'},
            {id: 2, url: 'slide_2.jpg', title: 'slide_2'},
            {id: 3, url: 'slide_3.jpg', title: 'slide_3'},
        ]
        dispatch(setPhotosSlider(response))
    }
}
export const getLifestyleData = () => {
    return (dispatch) => {
        //get data from API
        const response = [
            {
                id: 1,
                photo: 'lifestyle_1.jpg',
                title: 'More than just a music festival',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 2,
                photo: 'lifestyle_2.jpg',
                title: 'Life tastes better with coffee',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 3,
                photo: 'lifestyle_3.jpg',
                title: 'American dream',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 4,
                photo: 'lifestyle_4.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 5,
                photo: 'lifestyle_1.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 6,
                photo: 'lifestyle_2.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 7,
                photo: 'lifestyle_3.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            }, {
                id: 8,
                photo: 'lifestyle_4.jpg',
                title: 'More than just a music festival',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 9,
                photo: 'lifestyle_1.jpg',
                title: 'Life tastes better with coffee',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 10,
                photo: 'lifestyle_2.jpg',
                title: 'American dream',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 11,
                photo: 'lifestyle_3.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 12,
                photo: 'lifestyle_4.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 13,
                photo: 'lifestyle_1.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            },
            {
                id: 14,
                photo: 'lifestyle_2.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            }
            ,
            {
                id: 15,
                photo: 'lifestyle_3.jpg',
                title: 'A day exploring the Alps',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consequuntur expedita quo! Adipisci commodi iusto odio provident. Hic in laudantium odit pariatur sint voluptatem.'
            }
        ]
        dispatch(setLifestyleData(response))
    }
}
export const getComments = () => {
    return (dispatch) => {
        //get data from API
        const response = [
            {
                id: '1',
                name: 'John Doe',
                photo: 'ava_1.jpg',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cumque dolorum enim eos error eum, excepturi ipsa molestiae mollitia nesciunt nihil non possimus, praesentium quae sunt veritatis vero vitae?',
            },
            {
                id: '2',
                name: 'Jane Doe',
                photo: 'ava_2.jpg',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cumque dolorum enim eos error eum, excepturi ipsa molestiae mollitia nesciunt nihil non possimus, praesentium quae sunt veritatis vero vitae?',
            },
            {
                id: '3',
                name: 'John Doe',
                photo: 'ava_1.jpg',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cumque dolorum enim eos error eum, excepturi ipsa molestiae mollitia nesciunt nihil non possimus, praesentium quae sunt veritatis vero vitae?',
            },
            {
                id: '4',
                name: 'Jane Doe',
                photo: 'ava_2.jpg',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cumque dolorum enim eos error eum, excepturi ipsa molestiae mollitia nesciunt nihil non possimus, praesentium quae sunt veritatis vero vitae?',
            },
        ]
        dispatch(setComments(response))
    }
}
export default commonReducer