import styles from "./Error.module.css"


type ErrorProps = {
    children: React.ReactNode;
}

function Error({children}: ErrorProps) {
  return (
    <p className={styles.error}>{children}</p>
  )
}

export default Error