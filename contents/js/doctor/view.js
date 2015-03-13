var DoctorView = React.createClass({

    getInitialState: function() {
        return {doctor: null}
    },

    render: function() {

        if (this.state.doctor){
            var news = this.state.doctor
            var newsMap = news.map(function (article){
                return (
                    <div>
                        <h4 className="doctorName"> {article.name} </h4>
                        Summary: <i>{article.summary} </i>
                    </div>
               )
            })

            return (

                <div className="doctorView" >
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
