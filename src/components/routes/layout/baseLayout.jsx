import { Outlet } from 'react-router-dom';
import Header from '../../header/header';

const BaseLayout = () => {
    return (
        <>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default BaseLayout;
