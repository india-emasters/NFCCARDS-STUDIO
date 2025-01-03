import { useEffect, useState } from "react";
import StudioHeader from "../components/StudioHeader/StudioHeader"
import StudioSidebar from "../components/StudioSidebar/StudioSidebar";
import StudioController from "../components/StudioController/StudioController";
import StudioEditor from "../components/StudioController/StudioEditor";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackground } from "../utils/backgroundSlice";
import Loader from "../components/loader/Loader";
import { fetchProjectImages } from "../utils/imageSlice";
import { fetchAllNodes } from "../utils/nodeSclice";
import StudioEditor2 from "../components/StudioController/StudioEditor2";

const StudioLayout = ({ projectid }) => {
    const [sidebarActive, setSidebarActive] = useState('text');
    const handleChangeSidebarActive = (value) => {
        setSidebarActive(value);
    }
    const [cardside, setCardside] = useState("front");
    const handleChangeBackside = () => {
        if (cardside === 'front') {
            setCardside('back');
        } else {
            setCardside('front');
        }
    }
    const dispatch = useDispatch();
    const backgroundsLoaded = useSelector((state) => state.background.status);
    // const handleBeforeUnload = (e) => {
    //     const dialogText = "Changes not saved. Are you sure you want to leave?";
    //     e.returnValue = dialogText;
    //     return dialogText;
    // }
    useEffect(() => {
        dispatch(fetchBackground(projectid));
        dispatch(fetchProjectImages(projectid));
        dispatch(fetchAllNodes(projectid));
        // window.addEventListener("beforeunload", handleBeforeUnload);
        // return () => { window.removeEventListener("beforeunload", handleBeforeUnload); }

    }, [])

    if (backgroundsLoaded === 'loading' || backgroundsLoaded === 'failed') {
        return <Loader />
    }

    return (
        <>
        <StudioHeader projectid={projectid}/>
        <StudioSidebar value={sidebarActive} onChange={handleChangeSidebarActive}/>
        <main id="studio-main">
            <div className="studio-row">
                <div className="studio-col1">
                    <StudioController active={sidebarActive} cardside={cardside} projectid={projectid}/>
                </div>
                <div className="studio-col2">
                    <StudioEditor cardside={cardside} cardsideToogler={handleChangeBackside}/>
                    {/* <StudioEditor2 cardside={cardside} cardsideToogler={handleChangeBackside}/> */}
                </div>
            </div>
        </main>
        </>
    )
}

export default StudioLayout;