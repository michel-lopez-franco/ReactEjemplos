import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    const format = (userName) =>`@${userName}`; 

    const users = [ 
        {
            name: 'Human 49', 
            userName: 'Human 49',
            url: 'https://mighty.tools/mockmind-api/content/human/49.jpg',
            isFollowing : true 
        },
        {
            name: 'Human 43', 
            userName: 'Human 43',
            url: 'https://mighty.tools/mockmind-api/content/human/43.jpg',
            isFollowing : false 
        },
        {
            name: 'Human 68', 
            userName: 'Human 68',
            url: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
            isFollowing : false 
        },
        {
            name: 'Human 28', 
            userName: 'Human 28',
            url: 'https://mighty.tools/mockmind-api/content/human/28.jpg',
            isFollowing : true
        }
    ]

    //formatUserName: format
    
    
    return (
        <section className='App'>
        {
            users.map((user, index) => {
                return <TwitterFollowCard 
                    key={index}
                    name={user.name}
                    userName={user.userName}
                    url={user.url}
                    isFollowing={user.isFollowing}
                    formatUserName={format}
                />
            })
        }
        </section>
    );
}


//Human 49
//@Human 49
//https://mighty.tools/mockmind-api/content/human/49.jpg

//https://mighty.tools/mockmind-api/content/human/43.jpg
//https://uifaces.co/
