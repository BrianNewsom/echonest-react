var TrackListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.track)
        this.props.onListItemClicked(this.props.track.title)
    },

    render: function() {

        var track = this.props.track

        return (
            <div className="track row" >
                <div className="trackName six columns" onClick={this.handleClick}>
                    {track.artist_name}
                </div>
                <div className="trackCity six columns">
                    {track.title}
                </div>
            </div>
        )
  }
})
