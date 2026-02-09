import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className ,
  href,
  onClick,
  children,
  px,
  white,
}) => {
  const classes = `
    button
    relative
    
 
    items-center
    justify-center
    h-11
    transition-colors
    duration-200
    hover:text-color-1
    cursor-pointer
    ${px || "px-7"}
    ${white ? "text-n-8" : "text-n-1"}
    ${className || ""}
  `;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button type="button" className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}> 
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;