import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopoverWrapper } from '~/Components/Popover';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        //Check level menu -> push item into history
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopoverWrapper className={cx('menu-popover')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopoverWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
