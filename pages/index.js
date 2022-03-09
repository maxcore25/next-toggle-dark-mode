import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <>
      <div className='container'>
        <nav>
          <div className='mybrand'>My Personal Site</div>
          <div>
            {darkTheme !== undefined && (
              <form action='#'>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className='slider'></span>
                </label>
              </form>
            )}
          </div>
        </nav>
        <section>
          <div className='heroSection'>
            <h1>👋 Hello World</h1>
            <h3>I am a web developer</h3>
            <p>
              You can find me on
              <span>
                <a
                  href='https://github.com/maxcore25'
                  target='_blank'
                  rel='noreferrer'>
                  GitGub
                </a>
              </span>
              Lorem ipsum dolor sit amet
            </p>
            <button className='primary-btn'>Connect with me</button>
          </div>
        </section>
      </div>
    </>
  );
}
