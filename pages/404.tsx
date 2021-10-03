import Link from 'next/link';

function Notfound() {
  return (
    <section className='page_404'>
      <div className='four_zero_four_bg'>
        <h1>404</h1>
      </div>
      <div className='contant_box_404'>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <Link href='/'>
          <a className='link_404'>Go to Home</a>
        </Link>
      </div>
    </section>
  );
}

export default Notfound;
