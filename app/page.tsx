import library from "../library.json"

function getArtistById(id: string) {
  // console.log("artist id: " + id)
  for (const i in library.artists) {
    const artist = library.artists[i]
    // console.log("artist: " + JSON.stringify(artist))
    if (artist.id == id) return artist
  }
  return library.artists[0]
}
export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex flex-col gap-8 row-start-2 justify-items-center">
          ҉v҉i҉t҉r҉i҉o҉l҉i҉x҉
        </h1>
        <p>i make <a href="https://soundcloud.com/vitriolix"><b>music</b></a> and <a href="https://github.com/vitriolix"><b>code</b> and music code</a></p>

        {library.songs.map((song, index) => (
          <p key={index} width="100%" height="166">
            <a href={"https://soundcloud.com/" + getArtistById(song.artists[0].id).slug + "/" + song.slug}>{getArtistById(song.artists[0].id).name} - {song.title} →</a>
            <iframe width="500" height="166" scrolling="no" frameBorder="no" allow="autoplay" key={index}
                  src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + song.soundcloud_id + "&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe>
          </p>
        ))}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://mastodon.social/@vitriolix"
          target="_blank"
          rel="noopener noreferrer">
          <b>mastodon</b>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/vitriolix.bsky.social"
          target="_blank"
          rel="noopener noreferrer">
          <b>bluesky</b>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/vitriolix"
          target="_blank"
          rel="noopener noreferrer">
          <b>twitter (RIP)</b>
        </a>
        |
        <p>copyright 2024 <a href={"https://joshsteiner.com/"}><b>Josh Steiner</b></a></p>
      </footer>
    </div>
);
}
