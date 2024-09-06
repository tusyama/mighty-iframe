import { SizedBox } from "./sizedBox"
import { MightyWidget } from "mightyiframeintegration"

export const NewPage = () => {
    return <div>
        <h1>Tets Page</h1>
        <MightyWidget partnerId='Mintpad' percent='65%'>
          <button id="mindButton">
            Mintpad
          </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Mintpad' theme='dark'>
          <button id="mindButtonDark">
            Mintpad dark theme
          </button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId='Mintpad' theme='light'>
          <button id="mindButtonLight">
            Mintpad light theme
          </button>
        </MightyWidget>
    </div>
}