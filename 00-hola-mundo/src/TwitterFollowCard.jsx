

export function TwitterFollowCard({children, formatUserName, userName, name, url, isFollowing}) {
    
    //const addAt = (userName) =>`@${userName}`; 
    
    function handleFollowClick(e) {
        alert(`¡Reproduciendo ${JSON.stringify(e) }!`);
    }

    const isFollow = (isFollowing) => {
        
        if (isFollowing){
        
            return (
            <button className='tw-followCard-button' onClick={handleFollowClick}>
            Follow
            </button>)
        } else {
            return (
            <button className='tw-followCard-button' onClick={handleFollowClick}>
            Unfollow
            </button>
            )
        }

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
                
            {isFollow(isFollowing)}
                
            </aside>
        </article>
    );
}
//https://mighty.tools/mockmind-api/content/human/49.jpg