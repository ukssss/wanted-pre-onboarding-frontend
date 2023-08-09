import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../header/header';

interface BaseLayoutProps {}

const BaseLayout = ({ ...restProps }: BaseLayoutProps) => {
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
