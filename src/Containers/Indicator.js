import Indicator from '../Components/Indicator';
import { connect } from 'react-redux';

const mapStateToProps = state => ( {
    totalLength: findLength ( state ),
} )

const findLength = state => {

    let len = 0;
    for ( let i in state.reminderList ) {
        for ( let j in state.reminderList[i] ) {
            len += state.reminderList[i][j].length;
        }
    }

    return len;
}

export default connect (
    mapStateToProps,
) ( Indicator );
