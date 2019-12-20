import SwitchReducer from "./SwitchReducer";
import SunsetReducer from "./SunsetReducer";

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
            position: {
                x: 0,
            },
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
        this._state.sections.switch = SwitchReducer(this._state.sections.switch , action);
        SunsetReducer(action)
        this._callSubscriber()
    }


}

window.store = store