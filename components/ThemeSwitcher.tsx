import styles from '@/components/ThemeSwitcher.module.css'
import { ThemeContext } from '../lib/theme-context'

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ icon, toggle }) => (
        <>
          <div className={styles.toggle} onClick={toggle}>
            <i className={`${icon} ${styles.icon}`}></i>
            Theme
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  )
}
