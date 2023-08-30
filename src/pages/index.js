import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.whole}>
      <div className={styles.header}>
      <img src='logo.png' className={styles.logo}></img>
      <div className={styles.pages}>
        <p>Home</p>
        <p>Blog</p>
        <p>Single Post</p>
        <p>Pages</p>
        <p>Contact</p>
      </div>
      <div className={styles.searchsection}>
        <input type='text' placeholder='Search' className={styles.search}></input>
        <button className={styles.button}>?</button>
      </div>
      </div>
      <div className={styles.introduction}>
      <div className={styles.introductiontop}>
        <img src='chud.png' width='64px' className={styles.myface}></img>
        <div className={styles.name}>
        <p className={styles.nametop}>Pol&#40;tulgabat&#41;modir</p>
        <p className={styles.namebottom}>a student&#40;prisoner of hell&#41;</p>
        </div>
      </div>
        <p className={styles.description}>meet pol, a student and a boy with a love for uhh something and something. pol has nothing to showoff for and has 0 years of experience and some more text because i gotta make it fit for the uhh styles height thing it has to be 4 lines so asbdfadfbajkaskjkbfdibafblajbdfkbj ndfnlksfdnkl</p>
      </div>
    </div>
  )
}
