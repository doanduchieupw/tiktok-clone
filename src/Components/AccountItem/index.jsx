import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/7047869892715872257.jpeg?x-expires=1652756400&x-signature=fXcr6xzZvMxblu1f1LEKU927EIM%3D"
                alt="Avatar"
            />

            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>doanduchieu.pw</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Doan Duc Hieu</span>
            </div>
        </div>
    );
}

export default AccountItem;
