import styles from './index.scss?p6';
import React, {
    Component
}
from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles["root"]}>
				<div className={styles["loading"]}>
					<div className={styles["loading-move"]}></div>
				</div>
			</div>
        );
    }
}

export default Loading;
