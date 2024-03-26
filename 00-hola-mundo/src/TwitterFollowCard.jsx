import {useState} from 'react';

export function TwitterFollowCard({children, formatUserName, userName, name, url, isFollowing}) {
    
    const [isFollow,setIsFollow] = useState(isFollowing);

    /* Equivalente a lo de arriba
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
    */
    const text = isFollow ? 'Unfollow' : 'Follow';
    
    const buttonClassName = isFollow 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    const handleClick= () => {
        setIsFollow(!isFollow);
    }

    // Mostrar el estado inicial isFollowing cuando se renderiza el componente
    // se tiene que refrescar el navegador, la prop se modifica el cambio se guarda en el estado
    // pero no se refleja en el componente, 
    console.log('------------------------------------')
    console.log('children', children);
    console.log('Name', name);
    console.log('isFollow', isFollow);
    console.log('isFollowing', isFollowing);
    console.log('------------------------------------')

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src= {url} 
                alt="Michel logo" 
                />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoName'>{children || name} </strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            
            <aside className='tw-followCard-aside'>
                
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
                
            </aside>
        </article>
    );
}
//https://mighty.tools/mockmind-api/content/human/49.jpg