import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ReflectionItemPageFooter(props) {
    return (
        <footer className='refl-footer'>
            <div className='wrapper'>
                <div className='footer-right'>
                    <button
                        title='delete'
                        onClick={e =>
                            {props.deleteReflection(e, props.id);
                            props.history.push("/reflections");
                        }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </footer>
    )
}