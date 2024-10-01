export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex flex-col gap-8 row-start-2 justify-items-center">
          v̾i̾t̾r̾i̾o̾l̾i̾x̾
        </h1>
        <p>i make music and code and music code</p>
        <p><em>2024.09.30:</em> my latest song is <a
          href="https://soundcloud.com/vitriolix/haters"
          target="_blank">
          <b>
            <i>
              Haters
            </i>
          </b>
        </a>:
        </p>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1926365390&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://mastodon.social/@vitriolix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>mastodon</b>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/vitriolix.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>bluesky</b>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://twitter.com/vitriolix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>twitter</b>
        </a>
        {/*  <a*/}
        {/*    className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      aria-hidden*/}
        {/*      src="https://nextjs.org/icons/window.svg"*/}
        {/*      alt="Window icon"*/}
        {/*      width={16}*/}
        {/*      height={16}*/}
        {/*    />*/}
        {/*    Examples*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      aria-hidden*/}
        {/*      src="https://nextjs.org/icons/globe.svg"*/}
        {/*      alt="Globe icon"*/}
        {/*      width={16}*/}
        {/*      height={16}*/}
        {/*    />*/}
        {/*    Go to nextjs.org →*/}
        {/*  </a>*/}
      </footer>
    </div>
);
}
