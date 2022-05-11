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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/921f676f960b3c2844593adaa03c5726~c5_300x300.webp?x-expires=1652410800&x-signature=A2Ma%2BghxyYPQ90JFH42%2BC1K7puA%3D"
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
