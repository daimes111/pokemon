const React = require('react')
const Default = require('../layout/Default')
// const pokeImg = {

// }


class Show extends React.Component {
    render(){
        const { name, _id, imgLink  } = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
      
        return(
            <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
               
                <div><img src={`${imgLink}`} alt="Pokemon Image" className="image"/></div>

            </Default>
        )
    }
}

module.exports = Show