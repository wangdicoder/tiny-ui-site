/**
 * Created by wangdi on 6/11/17.
 */
export const openSideBar = () => {
    document.querySelector('.side-bar').style.width = '256px';
    const cover = document.querySelector('.side-bar-cover');
    cover.style.opacity = '1';
    cover.style.pointerEvents = 'auto';
};

export const closeSideBar = () => {
    document.querySelector('.side-bar').style.width = '0';
    const cover = document.querySelector('.side-bar-cover');
    cover.style.opacity = '0';
    cover.style.pointerEvents = 'none';
};

export const disabledSideBar = () => {
    const cover = document.querySelector('.side-bar-cover');
    cover.style.opacity = '0';
    cover.style.pointerEvents = 'none';
};

export const displaySideBar = () => {
    document.querySelector('.side-bar').style.width = '256px';
};