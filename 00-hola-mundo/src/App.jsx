import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {
    const format = (userName) =>`@${userName}`; 

    const human43 = {
        formatUserName: format,             
        name: 'Human 43', 
        userName: 'Human 43',
        url: 'https://mighty.tools/mockmind-api/content/human/43.jpg',
        isFollowing : true 
    };

    const human68 = {
        formatUserName: format,             
        
        userName: 'Human 68',
        url: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
        isFollowing : true 
    };

    
    return (
        <section className='App'>
        
        <TwitterFollowCard
            formatUserName= {format} 
            name= {'Human 49'} 
            userName={'Human 49'} 
            url={'https://mighty.tools/mockmind-api/content/human/49.jpg'}
            isFollowing = {false}
        >
            Esto es el hijo de Human 49
        </TwitterFollowCard>

        <TwitterFollowCard {...human43}/>        

        <TwitterFollowCard {...human68}> 
            Human 68
        </TwitterFollowCard> 

        

        <TwitterFollowCard
            formatUserName= {format} 
            name= {'Human a Human 28'} 
            userName={'Human 28'} 
            url={'https://mighty.tools/mockmind-api/content/human/28.jpg'}
        />


        </section>
    );
}


//Human 49
//@Human 49
//https://mighty.tools/mockmind-api/content/human/49.jpg

//https://mighty.tools/mockmind-api/content/human/43.jpg
//https://uifaces.co/
