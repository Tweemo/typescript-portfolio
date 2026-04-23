import styles from './pill.module.scss'

export default function Pill({ text }: { text: string }) {
  return (
    <span className={styles.pill}>
      <b>{text}</b>
    </span>
  )
}
