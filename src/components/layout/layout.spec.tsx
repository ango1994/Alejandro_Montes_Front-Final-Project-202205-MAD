import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { iRouterItem } from '../../interfaces/iRouterItem';
import { store } from '../../store/store';

import { Layout } from './layout';

const HomePage = React.lazy(() => import('../../pages/home/home'));

const routerOptions: Array<iRouterItem> = [
    { path: '/home', label: 'Home', page: <HomePage></HomePage> },
];

describe('Given the component Layout', () => {
    describe('when it is called', () => {
        test('should have render its children', () => {
            let MockChildren: () => JSX.Element;
            MockChildren = function () {
                return (
                    <>
                        <p>test</p>
                    </>
                );
            };
            render(
                <MemoryRouter>
                    <Provider store={store}>
                        <Layout menuOptions={routerOptions}>
                            <MockChildren></MockChildren>
                        </Layout>
                    </Provider>
                </MemoryRouter>
            );
            const display = screen.getByText(/test/i);
            expect(display).toBeInTheDocument();
        });
    });
});
