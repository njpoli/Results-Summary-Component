function Footer() {
  return (
    <div className='hidden absolute bottom-0 short:inline' role='contentinfo'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        className='font-bold underline hover:decoration-2'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.github.com/njpoli'
        className='font-bold underline hover:decoration-2'
      >
        njpoli
      </a>
      .
    </div>
  );
}

export default Footer;
