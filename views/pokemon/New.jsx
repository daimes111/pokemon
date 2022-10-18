const React = require('react')
const Default = require('../layout/Default')


class New extends React.Component {
    render() {
        return(
            <Default title="Catch a New Pokemon">
                <form method="POST" action="/pokemon">
                <input type="text" name="name" placeholder="Pokemon Name" /><br />
                <input type="text" name="imgLink" placeholder="Pokemon image Link" /><br />
                <input type="submit" value="Add Pokemon"/>
                </form>
            </Default>
        )
    }
}

module.exports = New