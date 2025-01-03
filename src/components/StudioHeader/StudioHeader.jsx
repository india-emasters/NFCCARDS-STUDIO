import styles from './StudioHeader.module.css'
import LOGO from '../../assets/images/logo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const StudioHeader = ({ projectid }) => {
    const [projectName, setProjectName] = useState(`Project ${projectid}`);
    const nodes = useSelector((state) => state.node);
    const background = useSelector((state) => state.background.data);

    const handleSave = () => {
        const newCard = {
            name: projectName,
            backgrounds: background,
            nodes: nodes
        }
        console.log(newCard);
    }
    return (
        <header className={styles.headerWrapper}>
            <nav className={styles.navbarWrapper}>
                <div className={styles.navbarColumn}>
                    <div className={styles.navbarColumnGrid}>
                        <div className={styles.navbarBrand}>
                            <img src={LOGO} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className={styles.navbarColumn}>
                    <div className={styles.navbarFilename}>
                        <input type='text' placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
                    </div>
                    <div className={styles.btns}>
                        <button onClick={() => handleSave()}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"/>
                            </svg>
                            Save
                        </button>
                        <button>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/>
                            </svg>
                            PDF
                        </button>
                        <button>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                            <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                            Preview
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default StudioHeader;