import {useState} from 'react';

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, formatUserName, userName, name, url, isFollowing}) {
    
    const [isFollow,setIsFollow] = useState(isFollowing);

    const text = isFollow ? 'Following' : 'Follow';
    
    const buttonClassName = isFollow 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    const handleClick= () => {
        setIsFollow(!isFollow);
    }
    
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
                    
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Stop following</span>
                </button>
                
            </aside>
        </article>
    )
}

