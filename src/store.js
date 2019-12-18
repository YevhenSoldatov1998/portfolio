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
    onSwitchActiveDay(){
       this._state.sections.switch = "day"
    },
    onSwitch(){
        this._state.sections.switch = this._state.sections.switch === 'day'?'night':'day';
        this._callSubscriber()
    },
    mouseMoved(currentX){
       this._state.sections.position.x = currentX;
       this._callSubscriber()
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        alert("hello")
    },
    subscribe(observer){
        this._callSubscriber = observer
    }

}
window.store = store