import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1>Contact</h1>
      <p>Let's get in touch! Here's how you can reach me:</p>
      <ul style={{ listStyleType: 'initial' }}>
        <li>Twitter: <a href="https://twitter.com/corscheid">@corscheid</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/corscheid">corscheid</a></li>
        <li>Email: <a href="mailto:corscheid@gmail.com">corscheid@gmail.com</a></li>
        <li>Keybase: <a href="https://keybase.io/corscheid">corscheid</a></li>
      </ul>
    </Layout>
  );
}
