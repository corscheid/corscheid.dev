import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <style jsx>{`
        .big-text {
          font-size: 4rem;
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
      <div className="big-text">
        &#60; &#47;&#62; &#123; &#125;
      </div>
      <p>
        Hi, I'm Corey and I'm a recent graduate with a Bachelor's Degree in Computer Science looking to start my career
        in the Saint Louis, Missouri area.
      </p>
      <p>
        I love learning new technologies as well as building and collaborating on open source projects. Much of my knowledge
        set pertaining to software development has risen from my insatiable drive to learn and tinker with modern technologies
        and frameworks outside of my university studies.
      </p>
      <p>
        A lot of the development I have done thus far has been for the <a href="https://LearnNavi.org/">LearnNa'vi</a> Community
		using the alias "Tirea Aean" (Na'vi for <em>'Blue Spirit'</em>) or "tirea" (<em>spirit</em>). Learning
        and teaching the Na'vi language from James Cameron's AVATAR has been a fun hobby for me since January 2010. It
        was also how I found my way towards choosing to become a Software Engineer as my career goal.
      </p>
      <p>
        Some of my favorite technologies to work with these days are <a href="https://reactjs.org/">React.js</a>,&nbsp;
        <a href="https://reactnative.dev/">React Native</a>, <a href="https://developer.android.com/">Android</a>,&nbsp;
        <a href="https://golang.org/">Golang</a>, and <a href="https://www.python.org/">Python</a>.
      </p>
    </Layout>
  )
}
