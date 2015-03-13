var ArtistListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.name)
        this.props.onListItemClicked(this.props.artist.name)
    },

    render: function() {

        var artist = this.props.artist

        return (
            <div className="artist row" >
                <div className="artistName six columns" onClick={this.handleClick}>
                    {artist.name}
                </div>
                <div className="six columns">
                    {artist.hotttnesss}
                </div>
            </div>
        )
  }
})
