import React, {ReactElement} from 'react';

export interface Props {
    src: string
    header: string
}

export function HeaderImage({src, header}: Props): ReactElement {
    return (
        <div className="header-image">
            <img src={src} alt={header}/>
            <h2>{header}</h2>
        </div>
    );
}
