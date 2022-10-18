const React = require('react')
const Default = require('../layout/Default')

class Edit extends React.Component {
    render(){
        const {name, _id, imgLink} = this.props.pokemon 
        return(
            <Default title={`Edit ${name}`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    <a>Name: </a><input type="text" name= "name" defaultValue={name}/><br />
                    <a>Photo URL: </a><input type="text" name= "imgLink" defaultValue={imgLink}/><br />
                    <input type="submit" value="Edit Pokemon"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit