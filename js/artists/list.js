var ArtistList = React.createClass({displayName: 'artistList',

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
                    data: data.response.artists
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name){
        name = name
        var query = "http://developer.echonest.com/api/v4/artist/news?api_key=" + echonest.api_key + "&name=" + name + "&results=3&start=0";
        $.ajax({
            url: query,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                this.refs.artistView.setState({artist:data.response.news})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(query, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {

        var self = this

        var artists = this.state.data.map(function (artist) {

          return (
            <ArtistListItem artist={artist} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="artistPage">
                <div className="artistList six columns">
                    <div className="six columns">
                        <h4> Artist </h4>
                    </div>
                    <div className="six columns">
                        <h4> Hotness </h4>
                    </div>
                    {artists}
                </div>
                <div className="artistView six columns">
                    <ArtistView ref="artistView"/>
                </div>
            </div>
        )
    }
})
