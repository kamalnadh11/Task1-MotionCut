import './App.css';
import a2 from './images/a2.jpg';
import a4 from './images/a4.jpg';
import a5 from './images/a5.jpeg';
import a6 from './images/a6.jpg';

const Card=()=>{
    return(
        <div className='cardc'>
        <div className='cardc1'>
            <img className='cimg' src={a2} alt='Apex'/>
            <div className='cardc2'>
            <h1>Apex Legends</h1>
            <p>Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts. It was released for PlayStation 4, Windows, and Xbox One in February 2019, for Nintendo Switch in March 2021, and for PlayStation 5 and Xbox Series X/S in March 2022. A mobile version of the game designed for touchscreens titled Apex Legends Mobile was released in May 2022 on Android and iOS. The game supports cross-platform play, excluding the aforementioned mobile platforms.</p>
            </div>
        </div>
        <div className='cardc1'>
          <div>
            <h1>Red Dead Redemption 2</h1>
            <p>Red Dead Redemption 2[a] is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan, an outlaw and member of the Van der Linde gang, who must deal with the decline of the Wild West while attempting to survive against government forces, rival gangs, and other adversaries. The game is presented through first- and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements include shootouts, robberies, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.</p>
            </div>
            <img className='cimg' src={a4} alt='Assassin'/>
        </div>
        <div className='cardc1'>
            <img className='cimg' src={a5} alt='Apex'/>
            <div className='cardc2'>
            <h1>Grand Theft Auto V</h1>
            <p>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas's open countryside and the fictional city of Los Santos, based on Los Angeles.</p>
            </div>
        </div>
        <div className='cardc1'>
          <div>
            <h1>Counter-Strike</h1>
            <p>Counter-Strike is a tactical first-person shooter game developed by Valve. It was initially developed and released as a Half-Life modification by Minh "Gooseman" Le and Jess Cliffe in 1999, before Le and Cliffe were hired and the game's intellectual property acquired. Counter-Strike was released by Valve for Microsoft Windows in 2000, and is the first installment in the Counter-Strike series. Several remakes and ports were released on Xbox, as well as OS X and Linux.</p>
            </div>
            <img className='cimg' src={a6} alt='Assassin'/>
        </div>

        </div>
        
    )
}
export default Card;