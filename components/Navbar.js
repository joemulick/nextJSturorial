import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/get-involved">
          <a style={linkStyle}>get-involved</a>
        </Link>
    </div>
)

export default Navbar