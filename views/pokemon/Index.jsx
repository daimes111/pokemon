const React = require('react')
const Default = require('../layout/Default')

class Index extends React.Component {
    render(){
        const {pokemons} = this.props
        return(
            <Default title="Full Pokemon List">
                <ul>
                    {pokemons.map((pokemon) => {
                        const {name, _id} = pokemon
                        return(
                        <li key={_id}>
                            <a href={`/pokemon/${_id}`}>{name}</a>
                            <form method="POST" action={`/pokemon/${_id}?_method=DELETE`}>
                                <input type="submit" value={`Delete ${name}`}/>
                            </form>
                        </li>
                        )
                    })}
                </ul>
            </Default>
        )
    }
}

module.exports = Index