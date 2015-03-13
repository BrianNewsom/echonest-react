$( "#doctors" ).on( "click", function( event ) {
    var trackurl = 'http://developer.echonest.com/api/v4/song/search?api_key=QQELH8UNTWLVBRQIB&sort=song_hotttnesss-desc&bucket=song_hotttnesss'
    React.render(
        <DoctorList url={trackurl} />,
        document.getElementById('content')
    )
})

$( "#users" ).on( "click", function( event ) {
    React.render(
        <UserList url='data/users.json.data'/>,
        document.getElementById('content')
    )
})

$( "#restaurants" ).on( "click", function( event ) {
    React.render(
        <RestaurantList url='data/restaurants.json.data'/>,
        document.getElementById('content')
    )
})

