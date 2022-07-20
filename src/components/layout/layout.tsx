import { ReactNode } from 'react';
import { iRouterItem } from '../../interfaces/iRouterItem';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({
    children,
    menuOptions,
}: {
    children: ReactNode;
    menuOptions: Array<iRouterItem>;
}) {
    const template = (
        <>
            <Header />
            <main>{children}</main>
            <Footer menuOptions={menuOptions} />
        </>
    );
    return template;
}
