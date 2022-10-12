const React = require('react')

class New extends React.Component {
    render() {
        return(
            <>
            <h1>Create a New Pokemon</h1>
            <form method="POST" action="/logs"></form>
            <input type="text" name="name" placeholder="Pokemon Name" />
            <input type="submit" value="Add Pokemon"/>
            </>
        )
    }
}

module.exports = New