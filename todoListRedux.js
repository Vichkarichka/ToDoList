export const types = {
    ADD: 'ADD_TODO',
    REMOVE: 'REMOVE_TODO',
};

export function add(item) {
    return {
        type: types.ADD,
        payload: item,
    }
}

export function remove(item) {
    return {
        type: types.REMOVE,
        payload: item,
    }
}

const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship Index'],
};

export const reducer = (state = initialState, action) => {
    const {todos} = state;
    const {type, payload} = action;

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos],
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload),
            }
        }
    }
    return state;
};