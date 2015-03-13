var TrackList = React.createClass({displayName: 'trackList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                this.setState({
                    data: data.response.songs
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name){
        name = name || 'ed sheeran'
        var query = "http://developer.echonest.com/api/v4/artist/news?api_key=" + echonest.api_key + "&name=" + name + "&results=3&start=0";
        $.ajax({
            url: query,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                this.refs.trackView.setState({track:data.response.news})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(query, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {

        var self = this

        var tracks = this.state.data.map(function (track) {

          return (
            <TrackListItem track={track} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="trackPage">
                <div className="trackList six columns">
                    <div className="six columns">
                        <h4> Artist </h4>
                    </div>
                    <div className="six columns">
                        <h4> Song </h4>
                    </div>
                    {tracks}
                </div>
                <div className="trackView six columns">
                    <TrackView ref="trackView"/>
                </div>
            </div>
        )
    }
})
