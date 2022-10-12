const React = require('react')

class New extends React.Component {
    render() {
        return(
            <>
            <h1>Create a New Pokemon</h1>
            <form method="POST" action="/pokemon">
            <input type="text" name="name" placeholder="Pokemon Name" /><br />
            <input type="submit" value="Add Pokemon"/>
            </form>
            </>
        )
    }
}

module.exports = New