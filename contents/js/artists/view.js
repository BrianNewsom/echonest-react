var ArtistView = React.createClass({

    getInitialState: function() {
        return {artist: null}
    },

    render: function() {

        if (this.state.artist){
            var news = this.state.artist
            var newsMap = news.map(function (article){
                return (
                    <div>
                        <h4 className="artistName"> {article.name} </h4>
                        Summary: <i>{article.summary} </i>
                    </div>
               )
            })

            return (

                <div className="artistView" >
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
