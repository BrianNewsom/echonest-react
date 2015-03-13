var DoctorList = React.createClass({displayName: 'DoctorList',

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
                this.refs.doctorView.setState({doctor:data.response.news})
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(query, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {

        var self = this

        var doctors = this.state.data.map(function (doctor) {

          return (
            <DoctorListItem doctor={doctor} onListItemClicked={self.handleListItemClicked}/>
            )
        })

        return (
            <div className="doctorPage">
                <div className="doctorList six columns">
                    <div className="six columns">
                        <h4> Artist </h4>
                    </div>
                    <div className="six columns">
                        <h4> Song </h4>
                    </div>
                    {doctors}
                </div>
                <div className="doctorView six columns">
                    <DoctorView ref="doctorView"/>
                </div>
            </div>
        )
    }
})
