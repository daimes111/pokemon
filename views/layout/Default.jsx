const React = require('react')

class Default extends React.Component{
    render(){
        const {title, pokemon } =this.props 
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Check Full Pokemon List</a>
                        <a href="/pokemon/new">Catch a New Pokemon</a>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page</a> : '' }
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}> {pokemon.name} Show Page</a> : '' }
                    </nav>
                    <h1>{title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default