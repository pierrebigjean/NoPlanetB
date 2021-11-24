const initFirstPage = () => {
  if (document.location.pathname === "/") {
    setTimeout(() => { document.location.pathname = "/home"; }, 3000);
  }
}

export { initFirstPage };
