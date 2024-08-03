import { useEffect } from "react";
import { SizedBox } from "./sizedBox"

export const NewPage = () => {
    useEffect(() => {
        if (window.initSidebar) {
          window.initSidebar({selector: '#learnButton', partnerId: 'Magic_Ball', course: {courseId: '646ceccd9d546b90065bcac0', chapterId: '646cedd19d546b90065bcad8', lessonId: '646cee099d546b90065bcadf'}});
          window.initSidebar({selector: '#errorButton', partnerId: 'Magic_Ball12'});
          window.initSidebar({selector: '#wirex', partnerId:'Wirex'});
          window.initSidebar({selector: '#superchain', partnerId: 'Superchain'});
          window.initSidebar({selector: '#harvestButton', partnerId: 'Harvest_Labs'});
          window.initSidebar({selector: '#mindButton', partnerId:'Mintpad'});
          window.initSidebar({selector: '#mindButtonDark', partnerId:'Mintpad', theme: 'dark'});
          window.initSidebar({selector: '#mindButtonLight', partnerId:'Mintpad', theme: 'light'});
          // window.initSidebar({selector: '#mindButtonLightTest', partnerId:'Mintpad', theme: 'light'});
        }
      }, []);
    return <div>
        <h1>Tets Page</h1>
        
        <SizedBox heigth={10} width={10}/>
        <button id="errorButton">
          error button
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="harvestButton">
          Harvest Labs
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButton">
          Mintpad
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButtonDark">
          Mintpad dark theme
        </button>
        <SizedBox heigth={10} width={10}/>
        <button id="mindButtonLight">
          Mintpad light theme
        </button>
        <button id="mindButtonLightTest">
          Mintpad light theme
        </button>
    </div>
}