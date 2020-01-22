import React from 'react';

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
                        Delete
                    </button>
                </div>
            </div>
        </footer>
    )
}