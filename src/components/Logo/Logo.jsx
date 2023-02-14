import { LogoContainer, LogoImg, LogoTitle } from "./StyledLogo";
import style from "./style.module.css"

const Logo = ({ title, image}) => (
  <div>
    <div className="style.container">
      <img className={style.img} src={image} alt="logo" />
      <span className={style.title}>{title}</span>
    </div>
  </div>
);

// Styled components
// const Logo = (title, image) => {
//   <div>
//     <LogoContainer>
//       <LogoImg src={image} alt="logo" />
//       <LogoTitle>{title}</LogoTitle>
//     </LogoContainer>
//   </div>
// };

export default Logo;