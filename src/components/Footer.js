import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    const linkClass = "mb-2";
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-400 text-gray-600 py-12 md:py-24">
        <div className="limit md:flex">
          <div className="mr-24 pb-12" style={{ maxWidth: '250px' }}>
            <p className="mb-6" style={{ maxWidth: '180px' }}>Hrvatsko društvo za istraživanje raka</p>
            <p className="mb-6" style={{ maxWidth: '180px' }}>Croatian Association for Cancer Research</p>
            <p className="text-sm">Ruđer Bošković Institute</p>
            <p className="text-sm">Bijenička 54</p>
            <p className="text-sm">10000 Zagreb</p>
            <p className="text-sm mb-6">Croatia</p>
            <p className="text-sm mb-6">IBAN: <span className="font-number font-light">HR5023600001102084564</span> (Zagrebačka banka)</p>
            <p className="text-sm">Tel: <a href="tel:+385-1-4571-292" className="font-number font-light">+385-1-4571-292</a></p>
            <p className="text-sm">Fax: <a href="tel:+385-1-4561-1010" className="font-number font-light">+385-1-4561-1010</a></p>
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
          <p>&copy; HDIR <span className="font-number font-light">{year}</span></p>
        </div>
      </footer>
    )
  }
}

export default Footer
