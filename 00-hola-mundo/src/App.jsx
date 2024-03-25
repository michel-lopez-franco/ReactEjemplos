import './App.css'

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src="https://mighty.tools/mockmind-api/content/human/49.jpg" 
                alt="Michel logo" 
                />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoName'>Human 49 </strong>
                    <span className='tw-followCard-infoUserName'>@Human 49</span>
                </div>
            </header>

            <aside className='tw-followCard-aside'>
                <button className='tw-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    );
}




//https://mighty.tools/mockmind-api/content/human/43.jpg
