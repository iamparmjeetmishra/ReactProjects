import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './i18n'
import { useTranslation } from 'react-i18next'

function App() {

  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {t("viteReactLine")}
      </p>
      <div>
        <p>{t('direction.right')}</p>
        <h2>{t('correctness.right') }</h2>
      </div>
    </>
  )
}

export default App
