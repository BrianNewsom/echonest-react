var DoctorListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.doctor)
        this.props.onListItemClicked(this.props.doctor.title)
    },

    render: function() {

        var doctor = this.props.doctor

        return (
            <div className="doctor row" >
                <div className="doctorName six columns" onClick={this.handleClick}>
                    {doctor.artist_name}
                </div>
                <div className="doctorCity six columns">
                    {doctor.title}
                </div>
            </div>
        )
  }
})
