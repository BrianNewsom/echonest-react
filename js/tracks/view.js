var TrackView = React.createClass({

    getInitialState: function() {
        return {track: null}
    },

    render: function() {

        if (this.state.track){
            var news = this.state.track
            var newsMap = news.map(function (article){
                return (
                    <div>
                        <h4 className="trackName"> {article.name} </h4>
                        Summary: <i>{article.summary} </i>
                    </div>
               )
            })

            return (

                <div className="trackView" >
                    {newsMap}
                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
