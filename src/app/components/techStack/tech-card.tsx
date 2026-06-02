import clsx from 'clsx'
import styles from './tech-card.module.scss'

export type TechSize = 'sm' | 'md' | 'lg'
export type TechGradient =
  | 'blue'
  | 'cyan'
  | 'pink'
  | 'green'
  | 'purple'
  | 'orange'
  | 'red'
  | 'teal'
  | 'indigo'
  | 'rose'
  | 'amber'
  | 'lime'
  | 'sky'

interface TechCardProps {
  name: string
  size?: TechSize
  gradient: TechGradient
}

export default function TechCard({ name, size = 'md', gradient }: TechCardProps) {
  return (
    <div
      className={clsx(styles.card, styles[size], styles[`gradient-${gradient}`])}
    >
      <span className={styles.label}>{name}</span>
    </div>
  )
}
