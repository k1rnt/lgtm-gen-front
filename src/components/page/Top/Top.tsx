import Head from 'next/head'

export const Top = () => {
  return (
    <div>
      <Head>
        <title>lgtm-gen</title>
        <meta name="description" content="画像を加工してLGTMにします" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </main>
    </div>
  )
}
