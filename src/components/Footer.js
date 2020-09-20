import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    const linkClass = "mb-2";
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-400 text-gray-600 py-12 md:py-24">
        <div className="limit md:flex">
          <div className="mr-24 pb-12" style={{ maxWidth: '180px' }}>
            <p className="mb-6">Hrvatsko društvo za istraživanje raka</p>
            <p>Croatian Association for Cancer Research</p>
          </div>
          <div className="flex flex-col uppercase font-black mr-12">
            <Link className={linkClass} to="/">
              O društvu
            </Link>
            <Link className={linkClass} to="/">
              Članstvo
            </Link>
            <Link className={linkClass} to="/">
              Aktivnosti
            </Link>
            <Link className={linkClass} to="/">
              Kontakt
            </Link>
          </div>
          <div className="flex flex-col uppercase">
            <Link className={linkClass} to="/">
              Sastanci
            </Link>
            <Link className={linkClass} to="/">
              Predavanja
            </Link>
            <Link className={linkClass} to="/">
              Konferencije
            </Link>
            <Link className={linkClass} to="/">
              Radionice
            </Link>
          </div>
        </div>
        <div className="limit pt-12 md:pt-24">
          <p>&copy; HDIR {year}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
