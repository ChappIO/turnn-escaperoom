import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export interface Props {
    goto: string
}

export function TranslateModal({goto}: Props) {
    const [hidden, setHidden] = useState(false);

    if (hidden) {
        return null;
    }

    return (
        <div className="translate-modal">
            <p>

                This page is in Dutch. Do you want to translate to English?
            </p>
            <div className="actions">
                <Link to={goto}>Translate</Link>
                <button onClick={() => setHidden(true)} className="cancel">Cancel</button>
            </div>
        </div>
    )
}
