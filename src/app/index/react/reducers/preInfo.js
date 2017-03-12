import * as actionTypes from '../actionTypes';

let initialState = {
    isLoading: true
};

export function preInfo(state = {...initialState}, action) {
    switch (action.type) {
        case actionTypes.SET_PREINFO:
            return {...action.config, isLoading: false};
        default:
            return state;
    }
}

export function preStep(state = '1', action) {
    switch (action.type) {
        case actionTypes.SET_PRESTEP:
            return action.config;
        default:
            return state;
    }
}

let stepWithSelectedState = {
  'step1': 0,
  'step2': 0,
  'step2_1': 0,
  'step2_2': 0,
  'step2_3': 0,
  'step2_3_1': 0,
  'step3': 0
};

export function stepWithSelected(state = stepWithSelectedState, action) {
    switch (action.type) {
        case actionTypes.SET_STEPWITHSELECTED:
            state[action.config.name] = action.config.val;
            let newObj = JSON.parse(JSON.stringify(state));
            return newObj;
        default:
            return state;
    }
}

let submitInfo = {
  examScoreType: 0,
  examTargetType: 0,
  expectedExamDate: '2017-06-17',
  joinedExamType: 0,
  skillLevelType: 0
};

export function submitData(state = submitInfo, action) {
    switch (action.type) {
        case actionTypes.SET_SUBMITDATA:
            let originData = state,
                keys = Object.keys(action.config),
                keyLength = keys.length;
            for (let i = 0; i < keyLength; i++) {
              let key = keys[i];
              originData[key] = action['config'][key];
            }
            // let newObj = JSON.parse(JSON.stringify(state));
            return originData;
        default:
            return state;
    }
}

export function stepLastBefore(state = 'step_2_1', action) {
    switch (action.type) {
        case actionTypes.SET_STEPLASTBEFORE:
            return action.config;
        default:
            return state;
    }
}

export function enableSubmit(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_ENABLESUBMIT:
            return action.config;
        default:
            return state;
    }
}

export function isError(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_ISERROR:
            return action.config;
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_ISLOADING:
            return action.config;
        default:
            return state;
    }
}

export function isDoing(state = false, action) {
    switch (action.type) {
        case actionTypes.SET_ISDOING:
            return action.config;
        default:
            return state;
    }
}
