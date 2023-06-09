import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Auctions() {
  return (
    <>
      <Head>
        <title>Auctions - Mobile bidding + auction software</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="desktop">
          <div className="desktop--top mb-3">
            <p className="showing-all-text mr-3">Showing all  <span className="primary-color">3</span></p>
            <div className="searching flex">
              <div className="main-searching">
                <input type="text" name="search" autoComplete="off" id="searching" className="searching__input ng-valid ng-touched ng-dirty" placeholder="Name, organization, or location" />
                <span role="presentation" className="main-searching__btn">
                  <svg>
                    <use href="#redesign-search" className="main-searching__primary"></use>
                  </svg>
                </span>
                <button type="reset" aria-label="Clear" className="flex searching__reset">
                  <svg height="15" width="15" aria-hidden="true">
                    <use href="#close2" className="main-searching__primary"></use>
                  </svg>
                </button>
                </div>
                <button type="button" className="close__btn ml-1"> Close </button>
              </div>
            </div>
            <form noValidate aria-label="Filter by status" className="filters mb-2">
              <div className="mb-2 open">
                <label className="el-with-icon item-status-filter__item rounded-checkbox_open" htmlFor="openCheckbox">
                  <input type="checkbox" name="auction-main-status" className="rounded-checkbox__input" id="openCheckbox" value="openCheckbox"/>
                  <span role="presentation" className="rounded-checkbox__check"></span><span>open</span>
                </label>
              </div>
              <div className="mb-2 presale">
                <label className="el-with-icon item-status-filter__item rounded-checkbox_presale" htmlFor="presaleCheckbox">
                  <input type="checkbox" name="auction-main-status" className="rounded-checkbox__input" id="presaleCheckbox" value="presaleCheckbox"/>
                  <span role="presentation" className="rounded-checkbox__check"></span><span>presale</span>
                </label>
              </div>
              <div className="mb-2 preview">
                <label className="el-with-icon item-status-filter__item rounded-checkbox_preview" htmlFor="previewCheckbox">
                <input type="checkbox" name="auction-main-status" className="rounded-checkbox__input" id="previewCheckbox" value="previewCheckbox"/>
                <span role="presentation" className="rounded-checkbox__check"></span><span>preview</span></label>
              </div>
              <div className="closed mb-2">
                <label className="el-with-icon item-status-filter__item rounded-checkbox_closed" htmlFor="closedCheckbox">
                  <input type="checkbox" name="auction-main-status" className="rounded-checkbox__input" id="closedCheckbox" value="closedCheckbox"/>
                  <span role="presentation" className="rounded-checkbox__check"></span>
                  <span>closed</span>
                </label>
              </div>
              <div className="form-field form-field_float mr-0">
                <label htmlFor="filter-select" className="form-field_float__label uppercase">Show</label>
                <select id="filter-select">
                  <option value="all" aria-selected="false"> All Events </option><option value="auctions" aria-selected="false"> Auctions</option><option value="events" aria-selected="true"> Events</option><option value="fundraisers" aria-selected="false"> Fundraisers</option>
                </select>
              </div>
              <div className="form-field form-field_float mr-0">
                <label htmlFor="sorting-select" className="form-field_float__label uppercase">Display</label>
                <select id="sorting-select">
                  <option value="name" aria-selected="false"> A - Z</option><option value="-name" aria-selected="true"> Z - A</option><option value="-startTime" aria-selected="false"> Date</option><option value="" aria-selected="false"> By Default</option>
                </select>
              </div>
              <button type="button" className="nowrap reset-filters-btn ml-2"> reset filters </button>
            </form>
            <div aria-label="Set event view mode" role="listbox" className="global-tab xs-100">
              <button type="button" role="option" className="global-tab__btn el-with-icon active" aria-selected="true">
                <svg height="25" width="25" aria-hidden="true" className="el-with-icon__icon_left">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" href="#list"></use>
                </svg> 
                list 
              </button>
            <button type="button" role="option" className="global-tab__btn el-with-icon" aria-selected="false">
              <svg height="25" width="25" aria-hidden="true" className="el-with-icon__icon_left">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#pointer"></use>
              </svg> 
              Event map 
            </button>
          </div>
        </div>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>
    </>
  )
}
