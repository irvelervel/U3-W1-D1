// creeremo ora questo componente React come CLASSE
// i componenti a classe sono un po' più lunghi da scrivere ma sbloccano
// superpoteri aggiuntivi

import { Component } from 'react'
// questo Component è il principale componente a classe definito nella libreria
// di React
// tutti i miei componenti a classe devono derivare da lui!

class Hello extends Component {
  // ci siamo quasi, l'unica cosa che manca è un METODO OBBLIGATORIO
  // nei componenti a classe, che si chiama "render()"
  render() {
    return <p>Strapazzami di {this.props.topogigio}</p>
  }
}

export default Hello
