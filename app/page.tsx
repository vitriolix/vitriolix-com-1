import library from "../library.json"
import ReactPlayer from 'react-player'

type Artist = { id: string, name: string }
type Album = { id: string, title: string, year: number, songs: Song[], artists: Artist[], service: string, url: string, slug: string, released: boolean }
type Song = { soundcloud_id: number, title: string, url: string, slug: string, artists: Artist[], year: number, service: string, album: string, released: boolean}

type AlbumProps = { album: Album }
type SongProps = { song: Song }
type LogProps = { message: string }


function SongEmbed(props: SongProps) {
  if (props.song.service === "soundcloud") {
    return (<SoundCloud song={props.song as Song}/>)
  } else if (props.song.service === "archive_org") {
    // return (<ArchiveOrgAlbum album={props.song.album as Album}/>)
    return <div />
  }
}

function AlbumEmbed(props: AlbumProps) {
  console.log("album: " + JSON.stringify(props.album))
  if (props.album.service === "soundcloud") {
    return (<SoundCloudAlbum album={props.album as Album}/>)
  } else if (props.album.service === "archive_org") {
    return (<ArchiveOrgAlbum album={props.album as Album}/>)
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Log(props: LogProps) {
  console.log(props.message)
  return ""
}

function SoundCloud(props: SongProps) {
  // console.log("props.song.soundcloud_id: " + props.song.soundcloud_id)
  return (
    <div>
      <a href={props.song.url}
         target="_blank">{getArtistById(props.song.artists[0].id).name}: {props.song.title} ({props.song.year}) →</a>
      <iframe width="500" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + props.song.soundcloud_id + "&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe>

    </div>
  )
}

function SoundCloudAlbum(props: AlbumProps) {
  // console.log("props.song.soundcloud_id: " + props.song.soundcloud_id)
  return (
    <div>
      <a href={props.album.url}
         target="_blank">{getArtistById(props.album.artists[0].id).name}: {props.album.title} ({props.album.year}) →</a>
      {/*<iframe width="500" height="166" scrolling="no" frameBorder="no" allow="autoplay"*/}
      {/*        src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + props.song.soundcloud_id + "&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe>*/}
      <iframe height="300" width="500px" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1915997203%3Fsecret_token%3Ds-2tuvm0pbFqI&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div
        style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",fontWeight: 100}}>
        <a href="https://soundcloud.com/vitriolix" title="vitriolix" target="_blank"
           style={{color: "#cccccc", textDecoration: "none"}}>vitriolix</a> · <a
        href="https://soundcloud.com/vitriolix/sets/magnificent-quarters/s-2tuvm0pbFqI" title="Magnificent Quarters"
        target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Magnificent Quarters</a>
      </div>
    </div>
  )
}


function ArchiveOrgAlbum(props: AlbumProps) {
  return (
    <div>
      {/*<a href={props.song.url} target={"_blank"}>Blue Vitriol: The Beach EP (2000) →</a>*/}
      <a href={"https://archive.org/details/" + props.album.slug}
         target="_blank">{getArtistById(props.album.artists[0].id).name}: {props.album.title} ({props.album.year}) →</a>
      <img src={"https://ia800208.us.archive.org/11/items/XPR.MP3.001_Blue_Vitriol_-_The_Beach_EP_1999/Blue_Vitriol_The_Beach_EP_1999__Front_Cover.jpg"} width={"500px"} />
      <iframe src={"https://archive.org/embed/" + props.album.slug} width="500" height="60" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

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

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="flex flex-col gap-8 row-start-2 justify-items-center">
          ҉v҉i҉t҉r҉i҉o҉l҉i҉x҉
        </h1>
        <p>i make <a href="https://soundcloud.com/vitriolix"><b>music</b></a> and <a
          href="https://github.com/vitriolix"><b>code</b> and music code</a></p>

        <b>Songs</b>

        {library.songs.map((song, index) => (
          song.released &&
          <div key={index}>
            <SongEmbed song={song as Song}/>
          </div>
        ))}

        <b>Albums / EPs</b>

        {library.albums.map((album, index) => (
          album.released &&
          <div key={index}>
            <AlbumEmbed album={album} />
          </div>
        ))}

        {/*<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />*/}

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
