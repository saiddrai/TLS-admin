import NavbarCSS from "./Navbar.module.css"

const Navbar = () => {
    return ( 
        <div className={NavbarCSS.navbar} >
            <button className={NavbarCSS.button}  > 

            <img className={NavbarCSS.img} src="./logo.png" alt="logo"  />
            </button>
            <button className={NavbarCSS.button}>
            <svg  className={NavbarCSS.img} width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3398 3.7214C15.8164 2.25952 13.4109 2.25952 11.8875 3.7214L3.79117 11.4902C3.59281 11.6805 3.45937 11.9285 3.40978 12.1989C2.44005 17.4872 2.36847 22.901 3.19804 28.2131L3.39495 29.474H8.60376V18.6042C8.60376 17.8792 9.19139 17.2917 9.91626 17.2917H19.311C20.0358 17.2917 20.6235 17.8792 20.6235 18.6042V29.474H25.8323L26.0292 28.2131C26.8587 22.901 26.7872 17.4872 25.8175 12.1989C25.768 11.9285 25.6344 11.6805 25.4361 11.4902L17.3398 3.7214ZM10.07 1.82734C12.6092 -0.609114 16.6181 -0.609114 19.1573 1.82734L27.2535 9.59619C27.8496 10.1681 28.2505 10.913 28.3994 11.7255C29.4223 17.3038 29.4979 23.0147 28.6227 28.6181L28.3065 30.6437C28.1756 31.4814 27.4541 32.099 26.6062 32.099H19.311C18.5861 32.099 17.9985 31.5113 17.9985 30.7865V19.9167H11.2288V30.7865C11.2288 31.5113 10.6411 32.099 9.91626 32.099H2.62098C1.77314 32.099 1.05163 31.4814 0.920821 30.6437L0.604491 28.6181C-0.270596 23.0147 -0.195084 17.3038 0.827843 11.7255C0.976821 10.913 1.37771 10.1681 1.97371 9.59619L10.07 1.82734Z" fill="white"/>
</svg>
            </button >
            <button  className={NavbarCSS.button}>ss</button>
            <button className={NavbarCSS.button}>ss</button>

        </div>
     );
}
 
export default Navbar;