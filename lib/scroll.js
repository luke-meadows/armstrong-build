export function disableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.main-content').style.opacity = '0.6';
  document.querySelector('.main-content').style.pointerEvents = 'none';
  if (navigator.userAgentData?.platform !== 'macOS') {
    document.querySelector('.main-content').style.paddingRight = '17px';
  }
  window.scrollTo(0, scrollX);
}

export function enableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'scroll';
  document.querySelector('.main-content').style.opacity = '1';
  document.querySelector('.main-content').style.paddingRight = '0px';
  document.querySelector('.main-content').style.pointerEvents = 'all';
  window.scrollTo(0, scrollX);
}
export function disableScrollTeam() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'hidden';
  if (navigator.userAgentData?.platform !== 'macOS') {
    document.querySelector('.main-content').style.paddingRight = '17px';
  }
  window.scrollTo(0, scrollX);
}

export function enableScrollTeam() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'scroll';
  if (navigator.userAgentData?.platform !== 'macOS') {
    document.querySelector('.main-content').style.paddingRight = '0';
  }
  window.scrollTo(0, scrollX);
}
