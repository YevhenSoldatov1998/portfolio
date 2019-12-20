import FirstSectionReducer from "./FirstSectionReducer";

export let store = {
    _state: {
        header: {
            nav: [
                {id: 1, link: 'Skill'},
                {id: 2, link: 'Works'},
                {id: 3, link: 'Contact'}
            ]
        },
        sections: {

            switch: 'night',
            skill:{

            }
        }
    },

    _callSubscriber(){
    },
    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    onSwitchActiveDay(){
       this._state.sections.switch = "day"
    },


    dispatch(action){
        this._state.sections.switch = FirstSectionReducer(this._state.sections.switch , action);
        this._callSubscriber()
    }


}

window.store = store