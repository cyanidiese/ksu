import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AuctionBox() {
  return (
    <a role="link" className="list__item status-open" aria-label="2023 Pork Industry Forum" href="/auctions/2023-pork-industry-forum">
      <header className="list__header">
        <div className="el-with-icon">
          <svg width="30" height="25" aria-hidden="true" className="el-with-icon__icon_left">
            <use href="#gavel"></use>
            </svg> Auction 
          </div>
        <div className="list__header-info uppercase">open</div>
      </header>
      <div className="list__logo-image has-image" style="background-image: url(&quot;https://cdn.hand.bid/91cad277-3d6e-4084-86eb-fdf628946a78/-/preview/-/resize/x90/&quot;);"></div>
      <div className="auction-box__content">
        <div className="auction-box__content-main">
          <p className="auction-box__title">2023 Pork Industry Forum</p>
          <p className="auction-box__subtitle">National Pork Producers Council</p>
          <p className="auction-box__sub-subtitle">Rosen Centre Hotel</p>
        </div>
        <div className="auction-box__content-additional">
          <div className="auction-box__items-count">169 items</div>
          <div className="element-desc mt-4"></div>
        </div>
      </div>
    </a>
    // <>
    //   <main className={`${styles.main} ${inter.className}`}>
    //     <div className={styles.description}>
    //       <div>
    //         <Link href="/auctions">See All Events</Link>
    //       </div>
    //     </div>
    //   </main>
    // </>
  )
}
