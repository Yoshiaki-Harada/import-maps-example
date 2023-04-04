import { customElement } from "solid-element"

customElement('mf1-component',{}, ()=>{
    return Mf1;
  })

const Mf1 = () => {
    return <div style="background: red;">MF1</div>
}

export default Mf1;