import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tova Jertfelt Frontend</title>
        <meta 
        name="title" 
        content="Tova Jertfelt Frontend"></meta>
        <meta 
        name="description" 
        content="Mitt namn är Tova Jertfelt. Jag älskar programmering!
        Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet.
        Sedan hösten 2021 går jag på Nackademins YH-utbildning för frontend-programmering. Studierna är fokuserade på javascript och webben, med kurser som går igenom CMS, javascript, HTML och CSS (samt tex SASS), grafikverktyg och att jobba i projekt. Jag själv gillar agila projekt, det är jag van med sedan tidigare i livet."/>
        <link rel="icon" 
        href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
