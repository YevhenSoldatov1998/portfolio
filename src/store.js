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
            skill:{

            }
        }
    },
    getState(){
        return this._state
    }

}