import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Pose } from '../components/Pose';



document.querySelector('#root').innerHTML = render(
  <>
   <Header title="Jogíni" 
          domuText="Domů" 
           lekceText="lekce" 
           tymText="tým" 
           udalostiText="události" 
           kontaktText="kontakty"/>
  
  <div id="app" className="app container">
    <Intro heading="Vítejte mezi Jogíny" text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce." />
         
    <Pose image="https://raw.githubusercontent.com/Czechitas-podklady-WEB/cviceni-jogini/master/img/yoga-pose.jpg" />
  </div>
   </>
);



