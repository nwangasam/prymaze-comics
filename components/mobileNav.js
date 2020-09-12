import Link from 'next/link';

export default function MobileNav({ open, link, setOpen }) {
    return (
        <div className={`mobile-nav ${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
            <Link href='/'>
              <a className={`mobile-nav__links ${
                    link === '/' ? 'active' : ''
                  }`}>Home</a>
            </Link>
            <Link href='/news'>
              <a className={`mobile-nav__links ${
                    link === '/news' ? 'active' : ''
                  }`}>Sports</a>
            </Link>
            <Link href='/comics'>
              <a className={`mobile-nav__links ${
                    link === '/comics' ? 'active' : ''
                  }`}>Comics</a>
            </Link>
        </div>
    )
}