//css
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={` ${styles.footer} d-flex flex-column align-items-center py-2`}>
        <h3>escreva sobre oq você tem interesse!</h3>
        <p>Blogzinho &copy; 2023</p>
    </footer>
  )
};

export default Footer;