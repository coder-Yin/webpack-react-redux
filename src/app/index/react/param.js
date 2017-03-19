import bindActions from './bindActions';

let {getPreInfo} = bindActions;

import {reload} from '../business/';


export default function mapState(state) {

    let { isLoading, isError} = state;


    return {
        isLoading,
        isError,
        param_error: {
          fnReload: () => {
            location.href = location.href;
          }
        },
        param_content: {

        }
    };
}
