import styles from "../App.module.css";

type BoxProps = {
    title: string,
    data: string,
    description: string
}

const Box: React.FC<BoxProps> = ({title, data, description}) => {
    return <div className={styles.box} id={styles.box}>
    <h2 className={styles.boxTitle}>{title}</h2>
    <div className={styles.data}>
      {data}
      <div className={styles.boxDesc}>{description}</div>
    </div>
  </div>
}

export default Box;