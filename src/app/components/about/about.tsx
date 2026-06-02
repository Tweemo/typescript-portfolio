import styles from './about.module.scss'

const cards = [
  {
    icon: '🧑🏻‍💻',
    title: 'Full-Stack Engineering',
    body: 'Comfortable across the stack, tackling any challenges along the way.',
  },
  {
    icon: '👥',
    title: 'User-Focused',
    body: 'Obsessed with usability, clear navigation, and experiences that feel effortless to use.',
  },
  {
    icon: '🚀',
    title: 'Growth-Minded Leadership',
    body: 'Building efficient systems, fostering teams where everyone can learn and excel.',
  },
]

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div key={i} className={styles.card} data-variant={i + 1}>
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
