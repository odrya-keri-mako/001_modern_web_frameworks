import { useCommon } from '../../context/CommonContext'
import styles from './Page1.module.css'

function Page1() {

  // Set common title
  const { commonTitle } = useCommon()

  // Set title
  const title = 'page 1'

  return (
    <div className="container">
      <h1 className="text-center text-capitalize display-1">
        {commonTitle}
      </h1>

      <h4 className={`${styles.pageTitle} text-center text-capitalize display-4`}>
        <i className="fa-solid fa-face-smile me-1"></i>
        <span>{title}</span>
      </h4>
    </div>
  )
}

export default Page1