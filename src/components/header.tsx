import { Link } from 'gatsby'
import * as React from 'react'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <section className="header">
    <div className="container-reading">
      <Link to="/">{siteTitle}</Link>
    </div>
  </section>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
