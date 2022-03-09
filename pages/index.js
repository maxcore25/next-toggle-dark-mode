import { useEffect, useState } from 'react';

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = event => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

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
