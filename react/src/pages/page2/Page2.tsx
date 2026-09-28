import { useCommon } from '../../context/CommonContext'
import styles from './Page2.module.css'

function Page2() {

  // Set common title
  const { commonTitle } = useCommon()

  // Set title
  const title = 'page 2'

  return (
    <div className="container">
      <h1 className="text-center text-capitalize display-1">
        {commonTitle}
      </h1>

      <h4 className={`${styles.pageTitle} text-center text-capitalize display-4`}>
        <i className="fa-solid fa-globe me-1"></i>
        <span>{title}</span>
      </h4>
    </div>
  )
}

export default Page2