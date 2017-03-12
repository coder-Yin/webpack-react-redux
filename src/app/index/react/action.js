import * as actionTypes from './actionTypes';
import * as model from './model';

export function setPreStep(response) {
    return {
        type: actionTypes.SET_PRESTEP,
        config: response
    };
}

export function setStepWithSelected(response) {
    return {
        type: actionTypes.SET_STEPWITHSELECTED,
        config: response
    };
}

export function setStepLastBefore(response) {
    return {
        type: actionTypes.SET_STEPLASTBEFORE,
        config: response
    };
}

export function setEnableSubmit(response) {
    return {
        type: actionTypes.SET_ENABLESUBMIT,
        config: response
    };
}

export function setPreInfo(response) {
    return {
        type: actionTypes.SET_PREINFO,
        config: response
    };
}

export function setIsError(config) {
    return {
        type: actionTypes.SET_ISERROR,
        config
    };
}

export function setIsLoading(config) {
    return {
        type: actionTypes.SET_ISLOADING,
        config
    };
}

export function setSubmitData(config) {
    return {
        type: actionTypes.SET_SUBMITDATA,
        config
    };
}

export function setIsDoing(config) {
    return {
        type: actionTypes.SET_ISDOING,
        config
    };
}
