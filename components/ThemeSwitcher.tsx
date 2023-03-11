'use client'

import styles from '@/components/ThemeSwitcher.module.css'
import { useTheme } from '../lib/theme-context'

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme()

  return (
    <div className={styles.container} onClick={toggle}>
      <span className={styles.label}>Dark mode</span>
      <div className={styles.slide}>
        <label>
          <input
            type="checkbox"
            name="dark-mode"
            className={styles.checkbox}
            checked={theme === 'dark'}
            readOnly
          />
          <div className={styles.handle} />
        </label>
      </div>
    </div>
  )
}
