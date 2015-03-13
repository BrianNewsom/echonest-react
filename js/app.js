$( "#doctors" ).on( "click", function( event ) {
    var trackurl = 'http://developer.echonest.com/api/v4/song/search?api_key=QQELH8UNTWLVBRQIB&sort=song_hotttnesss-desc&bucket=song_hotttnesss'
    React.render(
        <TrackList url={trackurl} />,
        document.getElementById('content')
    )
})

$( "#restaurants" ).on( "click", function( event ) {
    var queryString = 'http://developer.echonest.com/api/v4/artist/top_hottt?api_key=' + echonest.api_key + '&format=json&results=12&start=0&bucket=hotttnesss'
    React.render(
        <ArtistList url={queryString}/>,
        document.getElementById('content')
    )
})

