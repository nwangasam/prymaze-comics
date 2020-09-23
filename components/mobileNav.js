import Link from 'next/link';
import { motion } from 'framer-motion';
import { ease } from '../animation/animation';

export default function MobileNav({ open, link, setOpen }) {
  return (
    <motion.div
      className={`mobile-nav ${open ? 'show' : ''}`}
      onClick={() => setOpen(false)}
      initial={{ y: '-100%' }}
      animate={{ y: '0' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.1, ease }}
    >
      <Link href='/'>
        <a className={`mobile-nav__links ${link === '/' ? 'active' : ''}`}>
          Home
        </a>
      </Link>
      <Link href='/news'>
        <a className={`mobile-nav__links ${link === '/news' ? 'active' : ''}`}>
          Sports
        </a>
      </Link>
      <Link href='/comics'>
        <a
          className={`mobile-nav__links ${link === '/comics' ? 'active' : ''}`}
        >
          Comics
        </a>
      </Link>
    </motion.div>
  );
}
