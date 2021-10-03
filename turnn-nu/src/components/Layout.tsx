import React, {ReactElement, ReactNode} from 'react';
import logo from "../images/nu_logo.svg";

export interface Props {
    children?: ReactNode;
}

export function Layout({children}: Props): ReactElement {

    return (
        <div className="layout">
            <header>
                <div className="topbar">
                    <div>
                        <img alt="Nu.nl" src={logo} />
                        <h1>NU.nl</h1>
                    </div>
                </div>
                <div className="subbar">
                    <span>
                        Voorpagina
                    </span>
                    <span>
                        Net binnen
                    </span>
                    <span>
                        Populair
                    </span>
                    <span>
                        Meer
                    </span>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
